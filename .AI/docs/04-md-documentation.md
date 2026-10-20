# 04 — md Documentation Rules

Apply when writing or editing `.AI/md/**`.  
**All md content must be English.**

## Purpose

`.AI/md/` stores specs, API catalog, jobs, and the living ERD.  

**Humans may skip writing specs** and only ask for development.  
**Agents always auto-create/update** `.AI/md/specs/<feature>.md` in the same task (`.AI/docs/07-ai-md-workflow.md`).

Agent behavior rules stay in `.AI/docs/` only. Keep `AGENTS.md` ≡ `CLAUDE.md` (`.AI/docs/06-uniformity.md`).

## .AI/md/specs/ (Feature Specs)

| Who | What |
|-----|------|
| Human (optional) | May fill `_TEMPLATE.md` in advance |
| AI (required) | If no/incomplete spec, create/update from the user request before coding |

| Field | Required | Notes |
|-------|----------|-------|
| Goal | Yes | One sentence |
| Users | Yes | Who uses it |
| UI | If front | Screens, fields, actions; note publish path |
| API | If back | Method, path, request, response |
| Data | If DB | Supabase tables/columns + link to `.AI/md/db/erd.md` |
| Out of scope | Yes | What not to build |
| Status | Yes | `draft` \| `ready` \| `in-progress` \| `done` |

Rules:

- One feature per file: `.AI/md/specs/<kebab-case-name>.md`
- Never implement without a spec file — **auto-create it** if the human did not
- Plain English

## .AI/md/API/README.md

Single API catalog. Append each endpoint:

```markdown
## METHOD /api/path

- Description:
- Request:
- Response:
- Related files: back/routes/..., back/controller/...
- Spec: .AI/md/specs/<feature>.md
```

Remove the section when the endpoint is deleted.

## .AI/md/db/erd.md

Living ERD SSOT. AI may adapt for best results. See `.AI/docs/10-db-erd-supabase.md`.

## Folder.md (project root)

SSOT for the real project tree. Update when folders/files are added, removed, or moved.

## .AI/md/jobs/

| Path | Purpose |
|------|---------|
| `jobs/back/` | back work logs |
| `jobs/front/` | front work logs |

- Date format: `YYYY-MM-DD`
- Large work: `YYYY-MM-DD_work-summary.md`
- Minor fixes: timed entries in `YYYY-MM-DD.md`
- front jobs **must** list API endpoints used and changed filenames
