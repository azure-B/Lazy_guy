# 04 ??md Documentation Rules

Apply when writing or editing `.AI/md/**`.  
**All md content must be English.**

## Purpose

`md/` is how **non-engineers** participate: they write specs; agents implement and keep API/jobs/folder in sync.

Agent behavior rules stay in `docs/` only. Keep `AGENTS.md` and `CLAUDE.md` identical (`docs/06-uniformity.md`).

## .AI/md/specs/ (Feature Specs)

Primary input for new features. Copy `.AI/md/specs/_TEMPLATE.md`.

| Field | Required | Notes |
|-------|----------|-------|
| Goal | Yes | One sentence |
| Users | Yes | Who uses it |
| UI | If front | Screens, fields, actions |
| API | If back | Method, path, request, response |
| Data | If DB | Supabase tables/columns |
| Out of scope | Yes | What not to build |
| Status | Yes | `draft` \| `ready` \| `in-progress` \| `done` |

Rules:

- One feature per file: `.AI/md/specs/<kebab-case-name>.md`
- Agents must not implement features that lack a spec (create the spec first)
- Keep language plain ??no jargon required

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

## Folder.md

SSOT for the real project tree. Update only when folders/files are added, removed, or moved.

## .AI/md/jobs/

| Path | Purpose |
|------|---------|
| `jobs/back/` | back work logs |
| `jobs/front/` | front work logs |

- Date format: `YYYY-MM-DD`
- Large work: `YYYY-MM-DD_work-summary.md`
- Minor fixes: timed entries in `YYYY-MM-DD.md`
- front jobs **must** list API endpoints used and changed filenames
