"""Backend tests for /api/contact endpoint."""
import os
import pytest
import requests
from pymongo import MongoClient
from dotenv import load_dotenv
load_dotenv('/app/backend/.env')

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')
if not BASE_URL:
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


class TestContactEndpoint:
    """POST /api/contact tests"""

    def test_contact_success(self):
        payload = {
            "name": "TEST_Recruiter",
            "email": "test_recruiter@example.com",
            "message": "TEST_Hi Shreyshth, would love to chat about credit research roles.",
        }
        r = requests.post(f"{BASE_URL}/api/contact", json=payload, timeout=30)
        assert r.status_code == 200, f"Status {r.status_code}: {r.text[:300]}"
        data = r.json()
        assert data.get("ok") is True
        assert isinstance(data.get("id"), str) and len(data["id"]) > 0

        # Verify persisted in mongo
        mongo = MongoClient(MONGO_URL)
        try:
            doc = mongo[DB_NAME]["contact_messages"].find_one({"id": data["id"]})
            assert doc is not None, "contact message not persisted"
            assert doc["email"] == payload["email"]
            assert doc["name"] == payload["name"]
            assert doc["message"] == payload["message"]
            # cleanup
            mongo[DB_NAME]["contact_messages"].delete_one({"id": data["id"]})
        finally:
            mongo.close()

    def test_contact_missing_name(self):
        r = requests.post(
            f"{BASE_URL}/api/contact",
            json={"email": "a@b.com", "message": "hi"},
            timeout=15,
        )
        assert r.status_code == 422

    def test_contact_missing_email(self):
        r = requests.post(
            f"{BASE_URL}/api/contact",
            json={"name": "x", "message": "hi"},
            timeout=15,
        )
        assert r.status_code == 422

    def test_contact_missing_message(self):
        r = requests.post(
            f"{BASE_URL}/api/contact",
            json={"name": "x", "email": "a@b.com"},
            timeout=15,
        )
        assert r.status_code == 422

    def test_contact_empty_strings(self):
        r = requests.post(
            f"{BASE_URL}/api/contact",
            json={"name": "", "email": "", "message": ""},
            timeout=15,
        )
        assert r.status_code == 422
