# 08 — Role Work Routes & Recommended Context

Split work by **Front**, **Back**, and **Python**.  
Every role still follows `.AI/docs/00` → `06` → `07`, then this file.

Human-facing copy with hyperlinks: [README — Roles](../../README.md#5-roles--front--back--python)

## Quick Map

| Role | Owns | Primary host | Job logs |
|------|------|--------------|----------|
| **Front** | `front/**`, Stitch → `publish/` | Netlify | `.AI/md/jobs/front/` |
| **Back** | `back/**`, API, security, data | Render + Supabase | `.AI/md/jobs/back/` |
| **Python** | `python/**` | Local / batch | none (default) |

---

## Front

### Work route

```
.AI/md/specs/<feature>.md
  → Stitch design
  → front/publish/<page>.html
  → ask AI to convert
  → pages/ + components/common/ + layout/
  → services/api.js
  → .AI/md/jobs/front/ (+ Folder.md if needed)
```

Do **not** edit `.AI/md/API/README.md` on front-only work.  
Do **not** call `fetch` outside `services/api.js`.

### Recommended context

| Priority | Path | Why |
|----------|------|-----|
| 1 | `.AI/docs/03-front.md` | Stitch, publish, common |
| 2 | `.AI/docs/07-ai-md-workflow.md` | Conversion order |
| 3 | `.AI/md/specs/<feature>.md` | Scope |
| 4 | `front/publish/<page>.html` | Visual source |
| 5 | `front/src/services/api.js` | API client |
| 6 | `.AI/md/API/README.md` | Endpoints (read-only) |
| 7 | `front/.env.example` | `VITE_*` names |

### Prompt pattern

> Convert `front/publish/<page>.html` per `.AI/md/specs/<feature>.md`. Extract shared UI into `components/common/`. Wire APIs only through `services/api.js`.

---

## Back

### MCP (strongly recommended)

Back work is **much easier** with **Supabase + Netlify + Render MCP** connected.  
Register via root `MCPkeys.json` → `node scripts/register-mcp.mjs` — see `.AI/docs/09-mcp-setup.md` and [README §1](../../README.md#1-mcp-registration-mcpkeysjson).

| MCP | Use for | Docs |
|-----|---------|------|
| Supabase | Tables, migrations, SQL (`read_only` first), Auth | https://supabase.com/docs/guides/ai-tools/mcp |
| Render | Express service, env, deploys, logs | https://render.com/docs/mcp-server |
| Netlify | Front `VITE_*` / site URL vs API CORS | https://github.com/netlify/netlify-mcp |

Without MCP, follow `.AI/docs/05-netlify-supabase.md` + `env_example` manually.

### Work route

```
.AI/md/specs/<feature>.md (API + Data)
  → routes/ → controller/ (validate) → models/ (Supabase, safe queries)
  → security checklist (.AI/docs/02-back.md)
  → .AI/md/API/README.md + .AI/md/jobs/back/ (+ Folder.md)
```

### Recommended context

| Priority | Path | Why |
|----------|------|-----|
| 1 | `.AI/docs/02-back.md` | MVC + security |
| 2 | `.AI/docs/05-netlify-supabase.md` | Host / data |
| 3 | `.AI/docs/09-mcp-setup.md` | MCP registration |
| 4 | `.AI/md/specs/<feature>.md` | API + Data |
| 5 | `.AI/md/API/README.md` | Existing endpoints |
| 6 | `back/routes/`, `controller/`, `models/` | Code |
| 7 | `back/middleware/security.js` | CORS / headers |
| 8 | `env_example` + `back/.env.example` | Wiring |

### Prompt pattern

> Implement API from `.AI/md/specs/<feature>.md` using routes → controller → models. Use Supabase/Render/Netlify MCP if available. Pass the security checklist. Update `.AI/md/API` and `.AI/md/jobs/back/`.

---

## Python

### Work route

```
Clarify I/O in .AI/md/specs/ (or the user request)
  → edit python/ only
  → keep product/API JSON read-only unless the spec says otherwise
  → no .AI/md/jobs required (default)
```

### Recommended context

| Priority | Path | Why |
|----------|------|-----|
| 1 | `.AI/docs/00-overview.md` | Folder roles |
| 2 | `python/` | Scripts |
| 3 | `.AI/md/specs/<feature>.md` | Data shape |
| 4 | `env_example` | If calling hosted APIs |

### Prompt pattern

> Update `python/...` per the spec. Do not change Express/React unless asked.

---

## Shared

1. Boot: `AGENTS.md` / `CLAUDE.md` → `.AI/docs/00` → `06` → `07` → `08`
2. English for all `.AI/md/**` and commits
3. MCP tokens only via temporary `MCPkeys.json` — `.AI/docs/09-mcp-setup.md`
4. Structure changes → update root `Folder.md`
