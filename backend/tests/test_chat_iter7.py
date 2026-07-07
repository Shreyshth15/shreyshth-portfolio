"""Iteration 7 chat guardrail + grounding scenarios."""
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

GUARD = "Best to email Shreyshth directly."
BANNED = ["visa", "opt", "immigration", "sponsorship", "work authorization", "stay-back"]


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


def _text(msg):
    return "".join(e.get("delta", "") for e in _stream(msg) if "delta" in e).strip()


def test_visa_question_deflects():
    t = _text("What is his visa status?")
    assert t == GUARD, f"Got: {t!r}"


def test_gpa_question_deflects():
    t = _text("What is his GPA?")
    assert t == GUARD, f"Got: {t!r}"


def test_kelley_switch_story():
    t = _text("Why did he leave Kelley?")
    assert t != GUARD
    low = t.lower()
    assert "kelley" in low
    assert any(k in low for k in ["economics", "quantitative", "arts and sciences"]), t
    # No em dash, no banned words
    assert "—" not in t and "–" not in t
    for b in BANNED:
        assert b not in low, f"Banned word '{b}' in reply: {t}"


def test_move_to_us_year():
    t = _text("When did he move to the US?")
    assert "2021" in t, t
    assert "—" not in t
    low = t.lower()
    for b in BANNED:
        assert b not in low, f"Banned word '{b}' in reply: {t}"
