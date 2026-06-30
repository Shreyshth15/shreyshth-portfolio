"""Backend tests for /api/chat/stream SSE endpoint and persistence."""
import json
import os
import pytest
import requests
from pymongo import MongoClient

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')
if not BASE_URL:
    # Read from frontend env file as fallback
    try:
        with open('/app/frontend/.env') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    BASE_URL = line.split('=', 1)[1].strip().rstrip('/')
                    break
    except Exception:
        pass

MONGO_URL = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
DB_NAME = os.environ.get('DB_NAME', 'test_database')


def _post_sse(message, session_id=None, timeout=90):
    """POST to /api/chat/stream and parse SSE events. Returns list[dict]."""
    payload = {"message": message}
    if session_id:
        payload["session_id"] = session_id
    events = []
    with requests.post(
        f"{BASE_URL}/api/chat/stream",
        json=payload,
        stream=True,
        timeout=timeout,
        headers={"Accept": "text/event-stream"},
    ) as resp:
        assert resp.status_code == 200, f"Status {resp.status_code}: {resp.text[:500]}"
        buf = ""
        for chunk in resp.iter_content(chunk_size=None, decode_unicode=True):
            if not chunk:
                continue
            buf += chunk
            while "\n\n" in buf:
                raw, buf = buf.split("\n\n", 1)
                line = raw.strip()
                if not line.startswith("data:"):
                    continue
                data_str = line[len("data:"):].strip()
                try:
                    events.append(json.loads(data_str))
                except json.JSONDecodeError:
                    pass
                if events and events[-1].get("done"):
                    return events
    return events


class TestChatStream:
    """SSE chat streaming tests"""

    def test_chat_stream_hire_question(self):
        events = _post_sse("Why should I hire him?")
        assert len(events) > 0, "No SSE events received"

        # First event should have session_id
        assert "session_id" in events[0], f"First event missing session_id: {events[0]}"
        session_id = events[0]["session_id"]
        assert isinstance(session_id, str) and len(session_id) > 0

        # Should have multiple deltas
        deltas = [e for e in events if "delta" in e]
        assert len(deltas) >= 2, f"Expected multiple delta tokens, got {len(deltas)}"

        # Final event has done:true
        assert events[-1].get("done") is True, f"Last event not done:true: {events[-1]}"

        # Combined content references Shreyshth / finance context
        full = "".join(d.get("delta", "") for d in deltas).lower()
        assert len(full) > 20, f"Full response too short: {full!r}"
        finance_keywords = ["shreyshth", "credit", "research", "finance", "quant",
                            "intel", "investment", "analy", "model", "python", "data"]
        assert any(k in full for k in finance_keywords), (
            f"Response doesn't mention Shreyshth/finance context: {full[:300]}"
        )

    def test_chat_stream_followup_uses_session_id(self):
        # Turn 1
        ev1 = _post_sse("What's his valuation experience?")
        sid = ev1[0]["session_id"]
        assert ev1[-1].get("done") is True

        # Turn 2 - follow up referencing context
        ev2 = _post_sse("Which industries did he cover in that role?", session_id=sid)
        assert ev2[0].get("session_id") == sid, "Session id not preserved on follow-up"
        deltas2 = [e for e in ev2 if "delta" in e]
        assert len(deltas2) >= 2
        assert ev2[-1].get("done") is True

        full2 = "".join(d.get("delta", "") for d in deltas2).lower()
        assert len(full2) > 20

    def test_chat_messages_persisted(self):
        """Verify user + assistant messages are written to chat_messages collection."""
        events = _post_sse("Tell me about the Intel project")
        sid = events[0]["session_id"]
        assert events[-1].get("done") is True

        mongo = MongoClient(MONGO_URL)
        try:
            coll = mongo[DB_NAME]["chat_messages"]
            docs = list(coll.find({"session_id": sid}))
            roles = [d.get("role") for d in docs]
            assert "user" in roles, f"User message not persisted. Found roles: {roles}"
            assert "assistant" in roles, f"Assistant message not persisted. Found roles: {roles}"
            # Assistant content should be non-empty
            assistant_doc = next(d for d in docs if d["role"] == "assistant")
            assert isinstance(assistant_doc.get("content"), str)
            assert len(assistant_doc["content"]) > 10
        finally:
            mongo.close()
