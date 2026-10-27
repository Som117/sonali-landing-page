# Enquiry API tests: validation (no real emails sent) + rate limiter unit test
import os
import sys
import time
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL").rstrip("/")
VALID = {"name": "TEST_QA", "company": "TEST_Brand", "email": "qa@example.com",
         "collab_type": "UGC Campaign", "budget": None, "message": "Hello there test"}


@pytest.fixture
def s():
    return requests.Session()


# Health
def test_root(s):
    r = s.get(f"{BASE_URL}/api/")
    assert r.status_code == 200
    assert "message" in r.json()


# Validation - all 422, none reach email send
@pytest.mark.parametrize("override", [
    {"email": "not-an-email"},
    {"collab_type": "Random"},
    {"message": "hi"},
    {"name": ""},
    {"company": ""},
    {"message": "x" * 3001},
])
def test_validation_422(s, override):
    r = s.post(f"{BASE_URL}/api/enquiries", json={**VALID, **override})
    assert r.status_code == 422, r.text
    assert "detail" in r.json()


def test_missing_fields_422(s):
    r = s.post(f"{BASE_URL}/api/enquiries", json={"name": "TEST"})
    assert r.status_code == 422


def test_invalid_collab_type_message(s):
    r = s.post(f"{BASE_URL}/api/enquiries", json={**VALID, "collab_type": "Nope"})
    assert r.json()["detail"] == "Invalid collaboration type"


# Rate limiter unit test (avoids sending 5 real emails)
def test_rate_limiter_unit():
    sys.path.insert(0, "/app/backend")
    from dotenv import load_dotenv
    load_dotenv("/app/backend/.env")
    import server
    ip = f"TEST_{time.time()}"
    results = [server._rate_limited(ip) for _ in range(6)]
    assert results == [False] * 5 + [True]
    assert server._rate_limited("TEST_other_ip") is False
