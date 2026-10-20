# Feature: Health Check

- Status: done
- Date: 2026-10-20

## Goal

Show whether the Express API is reachable from the React app.

## Users

Developers verifying local or deployed wiring (Render API ??Netlify front).

## UI

- Screen: `/health` (`HealthPage`)
- Fields: JSON status or error message
- Actions: load on mount via `services/api.js`

## API

| Method | Path | Request | Response |
|--------|------|---------|----------|
| GET | /api/health | ??| `{ ok, service, timestamp }` |

## Data (Supabase)

None.

## Out of Scope

Auth, database checks, uptime monitoring SaaS.

## Acceptance

- [x] UI matches this spec
- [x] API matches this spec
- [x] .AI/md/API and .AI/md/jobs updated
