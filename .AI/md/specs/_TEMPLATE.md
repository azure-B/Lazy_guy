# Feature: <Name>

- Status: draft | ready | in-progress | done
- Date: YYYY-MM-DD

## Goal

One sentence: what this feature achieves.

## Users

Who uses it and why.

## UI

- Screen:
- Stitch / publish: front/publish/<page>.html
- Fields:
- Actions:
- Common components to extract:

## API

| Method | Path | Request | Response |
|--------|------|---------|----------|
| GET | /api/example | ??| `{ ... }` |

## Data (Supabase)

| Table | Columns | Notes |
|-------|---------|-------|
| | | |

- Living ERD: `.AI/md/db/erd.md` (AI may improve ERD for best results — `.AI/docs/10-db-erd-supabase.md`)
- SQL testing via Supabase MCP: permission required for write/DDL — ask the user first

## Out of Scope

What not to build in this task.

## Acceptance

- [ ] UI matches this spec
- [ ] API matches this spec
- [ ] .AI/md/API and .AI/md/jobs updated
