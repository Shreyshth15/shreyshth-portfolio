"""Tests for the /health probe endpoint (deployment fix)."""
import os
import requests

EXTERNAL_URL = os.environ.get("REACT_APP_BACKEND_URL", "").rstrip("/") or "http://localhost:3000"
INTERNAL_URL = "http://127.0.0.1:8001"


def test_health_internal_returns_200_ok():
    r = requests.get(f"{INTERNAL_URL}/health", timeout=10)
    assert r.status_code == 200
    data = r.json()
    assert data == {"status": "ok"}


def test_health_not_behind_api_prefix():
    # /api/health should NOT exist (health is top-level)
    r = requests.get(f"{INTERNAL_URL}/api/health", timeout=10)
    assert r.status_code == 404


def test_api_root_still_works_internal():
    r = requests.get(f"{INTERNAL_URL}/api/", timeout=10)
    assert r.status_code == 200
    assert "message" in r.json()


def test_api_root_still_works_external():
    # External ingress routes /api/* to backend
    if not EXTERNAL_URL.startswith("http"):
        return
    r = requests.get(f"{EXTERNAL_URL}/api/", timeout=15)
    assert r.status_code == 200
