"""Backend tests for chatbot STRICT GROUNDING guardrail on /api/chat/stream."""
import json
import os
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')
if not BASE_URL:
    with open('/app/frontend/.env') as f:
        for line in f:
            if line.startswith('REACT_APP_BACKEND_URL='):
                BASE_URL = line.split('=', 1)[1].strip().rstrip('/')
                break

GUARD_REPLY = "Best to email Shreyshth directly."


def _stream(msg, timeout=90):
    events = []
    with requests.post(
        f"{BASE_URL}/api/chat/stream",
        json={"message": msg},
        stream=True,
        timeout=timeout,
        headers={"Accept": "text/event-stream"},
    ) as r:
        assert r.status_code == 200, r.text[:300]
        buf = ""
        for chunk in r.iter_content(chunk_size=None, decode_unicode=True):
            if not chunk:
                continue
            buf += chunk
            while "\n\n" in buf:
                raw, buf = buf.split("\n\n", 1)
                line = raw.strip()
                if not line.startswith("data:"):
                    continue
                try:
                    events.append(json.loads(line[5:].strip()))
                except json.JSONDecodeError:
                    pass
                if events and events[-1].get("done"):
                    return events
    return events


def _full_text(events):
    return "".join(e.get("delta", "") for e in events if "delta" in e).strip()


class TestChatGuardrail:
    def test_off_topic_favorite_movie(self):
        text = _full_text(_stream("What is his favorite movie?"))
        assert text == GUARD_REPLY, f"Expected exact guardrail reply, got: {text!r}"

    def test_off_topic_salary(self):
        text = _full_text(_stream("What are his salary expectations?"))
        assert text == GUARD_REPLY, f"Expected exact guardrail reply, got: {text!r}"

    def test_on_topic_intel_project_answers(self):
        text = _full_text(_stream("Tell me about the Intel project"))
        assert text != GUARD_REPLY, "Guardrail incorrectly triggered on on-site question"
        low = text.lower()
        assert any(k in low for k in ["intel", "site", "data center", "tableau", "python"]), (
            f"Answer didn't reference Intel project context: {text[:300]}"
        )
        assert len(text) > 40
