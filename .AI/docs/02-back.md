# 02 ??When Working on back

Apply when editing `back/**` or implementing APIs from `.AI/md/specs/`.

## Stack

- **Runtime:** Express MVC (host: **Render**)
- **Data:** Supabase (Postgres + Auth) per `docs/05-netlify-supabase.md`
- **Env:** `back/.env.example` + root `env_example`
- **Entry:** `app.js`
- **Workflow:** `docs/07-ai-md-workflow.md`
- **Security:** mandatory ??see below

## Code Structure

```
routes/ ??controller/ ??models/
```

| Layer | Folder | Responsibility |
|-------|--------|----------------|
| Routes | `routes/` | URL mapping only |
| Controllers | `controller/` | Validate input, status codes, safe responses |
| Models | `models/` | Supabase / parameterized data access only |

## Security (Required ??Be Strict)

Agents must treat security as a first-class requirement on every back change. Prefer failing closed.

### CORS

- Allow only origins from `CORS_ORIGIN` (comma-separated allowlist in production)
- Never use `origin: true` / `*` in production
- Local may use the front dev origin (`http://localhost:5173`)

### Injection & data access

- **No string-concatenated SQL** ??use Supabase query builders or parameterized APIs only
- Never interpolate user input into raw SQL, filter strings, or RPC names
- Validate/whitelist sort columns, table aliases, and IDs before queries
- Prefer Supabase client in `models/`; do not expose service-role operations to the browser

### Input validation

- Validate `body` / `query` / `params` in **controllers** before calling models
- Reject unexpected fields; enforce types, length, and enums
- Return `400` with safe messages (no stack traces or secrets)

### Auth & secrets

- Protect private routes with verified Supabase JWTs (or documented equivalent)
- `SUPABASE_SERVICE_ROLE_KEY` stays on the server (Render) only
- Never log tokens, passwords, or service keys

### HTTP hardening

- JSON body size limits
- Security headers (e.g. Helmet) when middleware is available
- No detailed error payloads in production (`NODE_ENV=production`)
- Rate-limit auth and write endpoints when adding public traffic

### Output & files

- Escape or encode any data that might be reflected into HTML (prefer JSON APIs)
- Do not serve user uploads without type/size checks and private storage rules

### Security checklist (every API change)

- [ ] CORS allowlist correct for Netlify / local
- [ ] No raw SQL concatenation; models use safe APIs
- [ ] Input validated in controller
- [ ] Auth applied where the spec requires it
- [ ] Errors do not leak internals
- [ ] Secrets only in server env

## Spec-Driven API Work

1. Read `.AI/md/specs/<feature>.md` (create it first if missing).
2. Implement endpoints exactly as listed under **API** in the spec.
3. Apply the security checklist above.
4. Use Supabase patterns from `docs/05-netlify-supabase.md` (no ad-hoc DB drivers).
5. Update `.AI/md/API/README.md` and `.AI/md/jobs/back/`.

## Completion Checklist

1. **`.AI/md/API/README.md`** ??added / updated / deleted endpoints
2. **`.AI/md/jobs/back/`** ??work log
3. **`Folder.md`** ??if files were added/moved/removed
4. **`.AI/md/specs/<feature>.md`** ??mark status `done` or note remaining gaps
5. **Security checklist** passed

## Financial Product Data (if present)

- Data: `python/api/product.json` (read-only)
- Guide: `.AI/md/API/product-data.md`
- Update that file together with `.AI/md/API/README.md` when product APIs change

## Job Log Rules

| Scale | Method | Filename |
|-------|--------|----------|
| Large (new API, structure) | Separate file | `YYYY-MM-DD_work-summary.md` |
| Minor (bugfix) | Daily log entry | `YYYY-MM-DD.md` |

### Separate File Template

```markdown
# Work Summary

- Date: YYYY-MM-DD
- Area: back
- Spec: .AI/md/specs/<feature>.md

## Change Summary
(1?? lines)

## Changed Files
- back/routes/...
- back/controller/...

## API Changes
- GET /api/... (added|updated|deleted)
??See .AI/md/API/README.md

## Security
- CORS / validation / auth notes
```

### Daily Log Entry Format

```markdown
## HH:MM ??Work summary
- Spec: .AI/md/specs/... (if any)
- Changed files: ...
- API: (if applicable) METHOD /api/...
- Security: (brief)
```
