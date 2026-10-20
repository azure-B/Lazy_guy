# 08 — Role Work Routes & Recommended Context

Split work by **Front**, **Back**, and **Python**.  
Every role follows `.AI/docs/00` → `06` → `07`, then this file.

**Spec is automated:** humans ask for **development only**.  
The agent always creates/updates `.AI/md/specs/<feature>.md` first (see `.AI/docs/07-ai-md-workflow.md`).

Human-facing: [QUICKSTART.md](../../QUICKSTART.md) · [README hub](../../README.md) · one-file prompts in [`.AI/prompts/`](../prompts/)

## Quick Map

| Role | Owns | Primary host | Job logs |
|------|------|--------------|----------|
| **Front** | `front/**`, Stitch → `publish/` | Netlify | `.AI/md/jobs/front/` |
| **Back** | `back/**`, API, security, data | Render + Supabase | `.AI/md/jobs/back/` |
| **Python** | `python/**` | Local / batch | none (default) |

## Shared first step (all roles)

```
User request (dev only)
  → AI auto-spec: .AI/md/specs/<feature>.md
  → role route below
```

---

## Front

### Work route (human view)

```
[optional] Stitch → front/publish/<page>.html
  → ask AI to build / convert
  → React pages/ + components/common/ + layout/
  → services/api.js
  → .AI/md/jobs/front/ (+ Folder.md if needed)
```

### Work route (agent view)

```
auto-spec
  → read publish HTML if any
  → pages/ + common/ + layout/
  → services/api.js
  → jobs + mark spec done
```

Do **not** edit `.AI/md/API/README.md` on front-only work.  
Do **not** call `fetch` outside `services/api.js`.

### Recommended context

| Priority | Path | Why |
|----------|------|-----|
| 1 | `.AI/docs/03-front.md` | Stitch, publish, common |
| 2 | `.AI/docs/07-ai-md-workflow.md` | Auto-spec + conversion |
| 3 | `front/publish/<page>.html` | Visual source (if any) |
| 4 | `front/src/services/api.js` | API client |
| 5 | `.AI/md/API/README.md` | Endpoints (read-only) |
| 6 | `front/.env.example` | `VITE_*` names |

### Prompt pattern (dev only)

> Convert `front/publish/<page>.html` into React. Auto-create the spec. Extract shared UI into `components/common/`. Wire APIs only through `services/api.js`.

---

## Back

### MCP (strongly recommended)

Back is easier with **GitHub + Supabase + Netlify + Render** MCP.  
Register via `MCPkeys.json` — `.AI/docs/09-mcp-setup.md` · [README §1](../../README.md#1-mcp-registration-mcpkeysjson).

| MCP | Use for |
|-----|---------|
| Supabase | Schema, SQL test (permission for write), Auth — `.AI/docs/10-db-erd-supabase.md` |
| Render | Express host, env, deploys, logs |
| Netlify | Front `VITE_*` / CORS alignment |
| GitHub | Repo / PRs |

### Work route (human view)

```
ask AI for the API / feature
  → routes/ → controller/ → models/
  → security checklist
  → .AI/md/API + jobs
```

### Work route (agent view)

```
auto-spec (API + Data)
  → adapt ERD if needed (.AI/md/db/erd.md)
  → optional Supabase MCP SQL (with permission)
  → routes/ → controller/ → models/
  → security checklist (.AI/docs/02-back.md)
  → .AI/md/API + jobs + Folder.md
```

### Recommended context

| Priority | Path | Why |
|----------|------|-----|
| 1 | `.AI/docs/02-back.md` | MVC + security |
| 2 | `.AI/docs/10-db-erd-supabase.md` | Adaptive ERD + SQL |
| 3 | `.AI/md/db/erd.md` | Living schema |
| 4 | `.AI/docs/05-netlify-supabase.md` | Hosts |
| 5 | `.AI/docs/09-mcp-setup.md` | MCP |
| 6 | `.AI/docs/07-ai-md-workflow.md` | Auto-spec |
| 7 | `.AI/md/API/README.md` | Endpoints |
| 8 | `back/routes/`, `controller/`, `models/` | Code |
| 9 | `back/middleware/security.js` | CORS / headers |
| 10 | `env_example` + `back/.env.example` | Wiring |

### Prompt pattern (dev only)

> Add this API feature. Auto-create the spec. Use routes → controller → models. Adapt ERD if needed. With my permission, use Supabase MCP SQL to test. Update `.AI/md/API` and jobs.

---

## Python

### Work route (human view)

```
ask AI to change python/
  → scripts / data only
  → no jobs by default
```

### Work route (agent view)

```
auto-spec (I/O shape)
  → edit python/ only
  → mark spec done
```

### Recommended context

| Priority | Path | Why |
|----------|------|-----|
| 1 | `.AI/docs/00-overview.md` | Folder roles |
| 2 | `.AI/docs/07-ai-md-workflow.md` | Auto-spec |
| 3 | `python/` | Scripts |
| 4 | `env_example` | If calling hosted APIs |

### Prompt pattern (dev only)

> Update `python/...` for this behavior. Auto-create the spec. Do not change Express/React unless asked.

---

## Shared

1. Boot: `AGENTS.md` / `CLAUDE.md` → `.AI/docs/00` → `06` → `07` → `08`
2. **Always auto-spec** before implementing
3. English for all `.AI/md/**` and commits
4. MCP tokens via temporary `MCPkeys.json` — `.AI/docs/09-mcp-setup.md`
5. Structure changes → `Folder.md`
