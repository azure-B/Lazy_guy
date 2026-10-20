# Lazy Guy — Multi-IDE Agent Guide

Markdown-first **React + Express** project.  
Same rules on **Cursor**, **Codex**, **Claude Code**, and **Antigravity**.

**Example built with Lazy Guy:** [azure-B/BU_Team](https://github.com/azure-B/BU_Team) — a team web project (React + Express) developed using this guide.

Agent rules: [`.AI/docs/`](.AI/docs/) · Specs/API/jobs: [`.AI/md/`](.AI/md/) · Live tree: [`Folder.md`](Folder.md)

---

## Table of contents (project order)

1. [MCP registration (`MCPkeys.json`)](#1-mcp-registration-mcpkeysjson) — do this first
2. [IDE install](#2-ide-install)
3. [Env wiring](#3-env-wiring)
4. [How to Dev? (feature flow)](#4-how-to-dev-feature-flow)
5. [Roles — Front / Back / Python](#5-roles--front--back--python)
6. [Uniformity & Folder.md](#6-uniformity--foldermd)
7. [Rules index](#7-rules-index)

---

## 1. MCP registration (`MCPkeys.json`)

**Flow:** paste tokens into `MCPkeys.json` → run one script → MCP connects → `MCPkeys.json` is deleted.

```
MCPkeys.json.example  →  MCPkeys.json (paste tokens)
           ↓
  node scripts/register-mcp.mjs
           ↓
  .cursor/mcp.json  +  delete MCPkeys.json
```

Detail: [`.AI/docs/09-mcp-setup.md`](.AI/docs/09-mcp-setup.md)

### Token sources (hyperlinks)

| Service | MCP docs | Where to get the key |
|---------|----------|----------------------|
| **GitHub** | [GitHub MCP (Cursor)](https://github.com/github/github-mcp-server/blob/main/docs/installation-guides/install-cursor.md) | [Personal access tokens](https://github.com/settings/tokens) |
| **Supabase** | [Supabase MCP](https://supabase.com/docs/guides/ai-tools/mcp) | [Project Settings](https://supabase.com/dashboard/project/_/settings/general) → project ref |
| **Netlify** | [Netlify MCP](https://github.com/netlify/netlify-mcp) | [PAT](https://app.netlify.com/user/applications#personal-access-tokens) |
| **Render** | [Render MCP](https://render.com/docs/mcp-server) | [API Keys](https://dashboard.render.com/u/settings#api-keys) |

### Steps

1. `cp MCPkeys.json.example MCPkeys.json` — template: [`MCPkeys.json.example`](MCPkeys.json.example)
2. Paste real values (especially `github.token`):

```json
{
  "github": {
    "token": "ghp_YOUR_GITHUB_PERSONAL_ACCESS_TOKEN"
  },
  "supabase": {
    "project_ref": "YOUR_PROJECT_REF",
    "read_only": true
  },
  "netlify": {
    "auth_token": "YOUR_NETLIFY_AUTH_TOKEN"
  },
  "render": {
    "api_key": "YOUR_RENDER_API_KEY"
  }
}
```

3. `node scripts/register-mcp.mjs` — [`scripts/register-mcp.mjs`](scripts/register-mcp.mjs)
4. Confirm `.cursor/mcp.json` updated and **`MCPkeys.json` deleted**
5. Reload MCP / restart Cursor → Settings → Tools & MCP

**Back:** connect GitHub + Supabase + Netlify + Render — schema/deploy/CORS work is much easier with MCP.

Never commit `MCPkeys.json` (see [`.gitignore`](.gitignore)).

---

## 2. IDE install

Keep [`AGENTS.md`](AGENTS.md) ≡ [`CLAUDE.md`](CLAUDE.md), [`.AI/docs/`](.AI/docs/), [`Folder.md`](Folder.md).

| IDE | Entry |
|-----|--------|
| Cursor | `AGENTS.md` + [`.cursor/rules/`](.cursor/rules/) |
| Codex | `AGENTS.md` |
| Claude Code | `CLAUDE.md` |
| Antigravity | `AGENTS.md` + `.AI/docs/` |

---

## 3. Env wiring

| File | Use |
|------|-----|
| [`env_example`](env_example) | Render ↔ Netlify ↔ Supabase URL map |
| [`back/.env.example`](back/.env.example) → `back/.env` | Render / Express |
| [`front/.env.example`](front/.env.example) → `front/.env` | Netlify / Vite |

Rules: [`.AI/docs/05-netlify-supabase.md`](.AI/docs/05-netlify-supabase.md)

---

## 4. How to Dev? (feature flow)

1. Spec: [`.AI/md/specs/`](.AI/md/specs/) (English) — [`_TEMPLATE.md`](.AI/md/specs/_TEMPLATE.md)
2. Design in **Stitch**
3. Stitch **View code** → save HTML in [`front/publish/`](front/publish/)
4. Ask AI: *Convert `front/publish/<page>.html` into React*
5. Agent: pages + `components/common/` + `services/api.js` + secure Express MVC → update [`.AI/md/API`](.AI/md/API/README.md), [jobs](.AI/md/jobs/), [`Folder.md`](Folder.md)

Detail: [`.AI/docs/07-ai-md-workflow.md`](.AI/docs/07-ai-md-workflow.md)

---

## 5. Roles — Front / Back / Python

Full: [`.AI/docs/08-roles.md`](.AI/docs/08-roles.md)

### Front

**Route:** spec → Stitch → `front/publish/` → React (`common/` for shared UI) → `services/api.js` → `.AI/md/jobs/front/`

**Context:** [`.AI/docs/03-front.md`](.AI/docs/03-front.md), [`.AI/docs/07-ai-md-workflow.md`](.AI/docs/07-ai-md-workflow.md), publish HTML, [`api.js`](front/src/services/api.js)

### Back (MCP recommended)

**Route:** spec → `routes/` → `controller/` → `models/` → security checklist → `.AI/md/API` + jobs

**Use MCP** (GitHub / Supabase / Netlify / Render) after [§1](#1-mcp-registration-mcpkeysjson).

**Context:** [`.AI/docs/02-back.md`](.AI/docs/02-back.md), [`.AI/docs/05-netlify-supabase.md`](.AI/docs/05-netlify-supabase.md), [`.AI/docs/09-mcp-setup.md`](.AI/docs/09-mcp-setup.md)

### Python

**Route:** spec → edit `python/` only (no jobs by default)

**Context:** [`.AI/docs/00-overview.md`](.AI/docs/00-overview.md), [`python/`](python/), specs

---

## 6. Uniformity & Folder.md

```
AGENTS.md ≡ CLAUDE.md → .AI/docs/ (SSOT)
  → specs → Stitch → publish → React (+ common)
  → Express MVC (secure) → API + jobs
  → Folder.md (always keep in sync)
```

- [`.AI/docs/06-uniformity.md`](.AI/docs/06-uniformity.md)
- Live tree: [`Folder.md`](Folder.md)

---

## 7. Rules index

| Doc | Topic |
|-----|-------|
| [`.AI/docs/00-overview.md`](.AI/docs/00-overview.md) | Overview |
| [`.AI/docs/01-git.md`](.AI/docs/01-git.md) | Git |
| [`.AI/docs/02-back.md`](.AI/docs/02-back.md) | Express + security |
| [`.AI/docs/03-front.md`](.AI/docs/03-front.md) | React + Stitch |
| [`.AI/docs/04-md-documentation.md`](.AI/docs/04-md-documentation.md) | Specs / API / jobs |
| [`.AI/docs/05-netlify-supabase.md`](.AI/docs/05-netlify-supabase.md) | Hosts |
| [`.AI/docs/06-uniformity.md`](.AI/docs/06-uniformity.md) | Cross-IDE |
| [`.AI/docs/07-ai-md-workflow.md`](.AI/docs/07-ai-md-workflow.md) | AI + MD |
| [`.AI/docs/08-roles.md`](.AI/docs/08-roles.md) | Roles |
| [`.AI/docs/09-mcp-setup.md`](.AI/docs/09-mcp-setup.md) | MCPkeys → MCP |
| [`Folder.md`](Folder.md) | Live tree |
