# 07 ??How AI Applies MD in Development

Operating manual for **every** IDE. Humans write Markdown (+ Stitch HTML); agents produce the same React + Express artifacts.

## Roles

| Actor | Writes | Does not write |
|-------|--------|----------------|
| Non-engineer / PM | `.AI/md/specs/*.md`, Stitch design ??`front/publish/*.html` | Application code |
| AI agent | `back/`, `front/src/`, `.AI/md/API`, `.AI/md/jobs`, `Folder.md` | Extra scope beyond the spec |
| Maintainer | `docs/*.md`, keep `AGENTS.md` ??`CLAUDE.md` | Ad-hoc IDE-only rules |

## How to Dev? (Human ??AI)

```
1. Spec in .AI/md/specs/
2. Design in Stitch ??View code ??save HTML to front/publish/
3. Ask AI: ?œDevelop the page from front/publish/<file>.html??4. AI converts to React (extract common ??components/common/)
5. AI implements/secures Express MVC as needed
6. AI updates .AI/md/API, .AI/md/jobs, md/folder
```

See also README **How to Dev?** and `docs/03-front.md`.

## Required Order

```
1. Entry file boot (AGENTS.md / CLAUDE.md)
2. git pull origin main (unless skipped)
3. Read docs/00 ??06 ??07 ??area ??05 if needed
4. Read or create .AI/md/specs/<feature>.md
5. If UI: read front/publish/ HTML (Stitch export)
6. Implement front and/or back from spec + publish only
7. Update .AI/md/API, .AI/md/jobs, md/folder
8. Mark spec status
```

## Map Spec / Publish ??Code

| Input | Destination |
|-------|-------------|
| Spec **API** | `back/routes/` + `back/controller/` + `back/models/` |
| Spec **UI** + `front/publish/*.html` | `front/src/pages/` + layout |
| Repeated UI in publish/HTML | `front/src/components/common/` |
| Site chrome | `front/src/components/layout/` |
| UI API calls | `front/src/services/api.js` only |
| Spec **Data** | Supabase via `back/models/` (safe queries only) |

### Express (never skip a layer)

```
request ??routes/ ??controller/ (validate) ??models/ (safe data) ??response
```

Apply **`docs/02-back.md` security** (CORS allowlist, no SQL concatenation, validation, auth, safe errors).

### React (never skip a layer)

```
publish HTML ??pages/ + common/ + layout/ ??services/api.js ??Express
```

## Doc Updates in the Same Task

| Change | Update |
|--------|--------|
| Endpoint add/change/delete | `.AI/md/API/README.md` |
| back code | `.AI/md/jobs/back/` |
| front code | `.AI/md/jobs/front/` (APIs + files + publish source) |
| Path add/move/delete | `Folder.md` |

## Spec Status

`draft` ??`ready` ??`in-progress` ??`done`

## Example

User: *"Stitch design is done. I put the HTML in front/publish/health.html ??build the page."*

1. Ensure/update `.AI/md/specs/health-check.md`
2. Convert HTML ??`HealthPage` + extract shared pieces to `components/common/`
3. Wire `getHealth()` in `services/api.js`
4. Confirm back health route is secure (CORS, safe JSON errors)
5. Jobs + `Folder.md`; status `done`

## Anti-Patterns

- Code from chat with no `.AI/md/specs/` file
- Pasting Stitch HTML into `pages/` without extracting `common/`
- Ignoring `front/publish/` when the user provided it
- Supabase/SQL inside `routes/` or React pages
- Open CORS (`*`) or string-built SQL in Express
- Editing `.AI/md/API/README.md` on front-only work
- Renaming `controller/` to `controllers/` (must match `Folder.md`)
- Non-English `.AI/md/**` or commit messages
- Adding Claude-only or Cursor-only workflows outside `docs/`
