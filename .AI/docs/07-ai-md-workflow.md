# 07 — How AI Applies MD in Development

Operating manual for **every** IDE.

**Humans can request development only** (no hand-written spec).  
**Agents always auto-create/update** `.AI/md/specs/<feature>.md` from the request, then implement.

## Roles

| Actor | Writes | Does not write |
|-------|--------|----------------|
| Human (any role) | Chat request, optional Stitch HTML in `front/publish/` | Need not write specs |
| AI agent | Auto-spec + `back/` / `front/src/` / `.AI/md/API` / jobs / `Folder.md` / ERD | Scope beyond the user request |
| Maintainer | `.AI/docs/*`, keep `AGENTS.md` ? `CLAUDE.md` | Ad-hoc IDE-only rules |

## Dev-only mode (default for humans)

User says things like:

- *“Convert `front/publish/login.html` into React.”*
- *“Add a products API with list + detail.”*
- *“Update the python script to clean CSV X.”*

Agent **must** (same task, before heavy coding):

1. Infer a kebab-case feature name
2. Create or update `.AI/md/specs/<feature>.md` from [`.AI/md/specs/_TEMPLATE.md`](../md/specs/_TEMPLATE.md)
3. Fill Goal, Users, UI/API/Data from the chat (+ publish HTML if present)
4. Set status `ready` ? `in-progress` ? `done`
5. Then implement Front / Back / Python as requested

Optional: humans may still pre-write a spec; if one exists, use it and update it instead of starting from scratch.

## How to Dev? (Human ? AI)

```
1. (Optional) Stitch ? front/publish/<page>.html
2. Ask AI for the feature / page / API / script  ? no manual spec required
3. AI auto-writes .AI/md/specs/<feature>.md
4. AI implements (React common/, Express MVC, python/, …)
5. AI updates .AI/md/API, .AI/md/jobs, Folder.md, ERD if needed
```

See README **How to Dev?** and `.AI/docs/03-front.md`.

## Required Order

```
1. Entry boot (AGENTS.md / CLAUDE.md)
2. Safe Git sync per docs/01-git.md (implementation only; skip preview/ZIP/offline)
3. Read .AI/docs/00 ? 06 ? 07 ? area ? 05/09/10 if needed
4. Auto-create/update .AI/md/specs/<feature>.md   ? always
5. If UI: read front/publish/ HTML when provided
6. Implement from auto-spec + publish + user request
7. Update .AI/md/API, .AI/md/jobs, Folder.md
8. Mark spec status done
```

## Map Spec / Publish ? Code

| Input | Destination |
|-------|-------------|
| Spec **API** (auto or human) | `back/routes/` + `back/controller/` + `back/models/` |
| Spec **UI** + `front/publish/*.html` | `front/src/pages/` + layout |
| Repeated UI | `front/src/components/common/` |
| Site chrome | `front/src/components/layout/` |
| UI API calls | `front/src/services/api.js` only |
| Spec **Data** | Supabase via `back/models/` + `.AI/md/db/erd.md` |

### Express

```
request ? routes/ ? controller/ (validate) ? models/ (safe data) ? response
```

Security: `.AI/docs/02-back.md`.

### React

```
publish HTML ? pages/ + common/ + layout/ ? services/api.js ? Express
```

## Doc Updates in the Same Task

| Change | Update |
|--------|--------|
| Feature request | `.AI/md/specs/<feature>.md` (auto) |
| Endpoint change | `.AI/md/API/README.md` |
| back code | `.AI/md/jobs/back/` |
| front code | `.AI/md/jobs/front/` |
| Schema | `.AI/md/db/erd.md` |
| Path change | `Folder.md` |

## Spec Status

`draft` ? `ready` ? `in-progress` ? `done`

## Example

User: *"Stitch is done — `front/publish/health.html` — build the page."* (no spec file)

1. AI creates `.AI/md/specs/health-check.md`
2. Convert HTML ? page + `components/common/` as needed
3. Wire `services/api.js`
4. Jobs + `Folder.md`; spec ? `done`

## Anti-Patterns

- Coding with **no** auto-spec written in the same task
- Forcing humans to fill `_TEMPLATE.md` before they can ask for work
- Pasting Stitch HTML into `pages/` without extracting `common/`
- Ignoring `front/publish/` when provided
- Supabase/SQL inside `routes/` or React pages
- Open CORS (`*`) or string-built SQL in Express
- Editing `.AI/md/API/README.md` on front-only work
- Non-English `.AI/md/**` or commit messages
