# 03 ??When Working on front

Apply when editing `front/**` or implementing UI from `.AI/md/specs/` / Stitch HTML.

## Stack

- **UI:** React (Vite)
- **Design source:** Stitch ??HTML in `front/publish/`
- **Host:** Netlify (SPA) per `docs/05-netlify-supabase.md`
- **API:** Express on Render via `VITE_API_BASE_URL`
- **Env:** `front/.env.example` + root `env_example`
- **API calls:** `services/api.js` only
- **Workflow:** `docs/07-ai-md-workflow.md`

## Code Structure

```
publish/             ??Stitch HTML exports (design source of truth for visuals)
src/components/common/   ??shared UI extracted across pages (Button, Input, Card, ??
src/components/layout/   ??Header, Footer, Layout
src/pages/               ??route-level pages
src/services/            ??API calls (api.js only)
```

- One component folder per UI piece; co-locate styles
- Do not call `fetch`/`axios` from pages ??go through `services/api.js`
- Env: `VITE_*` only (see `docs/05-netlify-supabase.md`)

## Stitch ??publish ??React (Required Dev Path)

1. Finish the design in **Stitch**.
2. Open **View code** in Stitch and save the HTML under `front/publish/`  
   - Prefer `front/publish/<page-name>.html` or `front/publish/<page-name>/index.html`
3. Ask the AI to develop the page from that HTML (and the matching `.AI/md/specs/` entry).
4. Agent converts HTML into React:
   - Page shell ??`front/src/pages/`
   - Chrome (header/nav/footer) ??`front/src/components/layout/`
   - **Repeated blocks** (buttons, inputs, cards, list rows, modals) ??`front/src/components/common/`
5. Keep `front/publish/` as the design reference; do not treat raw HTML as the long-term app.

### Common extraction rules

| Signal | Action |
|--------|--------|
| Same markup/style on 2+ pages | Move to `components/common/` |
| Site-wide chrome | `components/layout/` |
| Page-only section | Stay in that page (or a page-local component folder) |
| Data fetching | Only `services/api.js` |

When converting, prefer reusable props over copy-pasted JSX. Name common components clearly (`Button`, `TextField`, `Card`, ??.

## Spec-Driven UI Work (auto-spec OK)

Humans may request **dev only**. Agent **auto-creates/updates** `.AI/md/specs/<feature>.md` first.

1. Auto-create/update the spec from the user request (+ publish HTML if any).
2. Prefer matching `front/publish/` HTML as the visual source.
3. Build only screens/fields listed under **UI**.
4. Wire to endpoints listed under **API** (do not invent extra APIs in front work).
5. Update `.AI/md/jobs/front/` with endpoints + filenames.
6. Do **not** edit `.AI/md/API/README.md` during front-only work.

## Completion Checklist

1. **`.AI/md/jobs/front/`** ??endpoints used + changed filenames
2. **`Folder.md`** ??if structure changed
3. **`.AI/md/specs/<feature>.md`** ??update status if the UI part is done
4. Shared UI lives under **`components/common/`** when reused

## Job Log Rules

| Scale | Method | Filename |
|-------|--------|----------|
| Large (new page, feature) | Separate file | `YYYY-MM-DD_work-summary.md` |
| Minor (style, bugfix) | Daily log entry | `YYYY-MM-DD.md` |

### Separate File Template

```markdown
# Work Summary

- Date: YYYY-MM-DD
- Area: front
- Spec: .AI/md/specs/<feature>.md
- Publish source: front/publish/<page>.html

## Change Summary
(1?? lines)

## Changed Files
- front/src/components/common/...
- front/src/pages/...
- front/src/services/api.js

## APIs Used
- POST /api/auth/login ??login request
```

### Daily Log Entry Format

```markdown
## HH:MM ??Work summary
- Spec: .AI/md/specs/... (if any)
- Publish: front/publish/...
- Changed files: front/src/...
- APIs used: GET /api/...
```
