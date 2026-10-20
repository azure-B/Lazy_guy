# 00 ??Project Overview (Shared SSOT)

Markdown-first development: non-engineers write `.AI/md/specs/`; AI agents in **any** IDE implement the same React + Express layout and the same docs.

Supported IDEs: **Cursor**, **Codex**, **Claude Code**, **Antigravity**.

## Product Intent

| Goal | Enforcement |
|------|-------------|
| Non-engineers contribute | Features start in `.AI/md/specs/*.md` (English) |
| React + Express MVC | `front/` + `back/routes` ??`controller` ??`models` |
| Render + Netlify + Supabase | `docs/05-netlify-supabase.md` + root `env_example` |
| Same results every IDE | `docs/06-uniformity.md` + identical entry files |
| Stitch ??React | HTML in `front/publish/`; shared UI ??`components/common/` |
| Secure API | Express security rules in `docs/02-back.md` |

## How Every IDE Loads Rules (Same Behavior)

| IDE | Auto-loaded entry | Must then read |
|-----|-------------------|----------------|
| Cursor | `AGENTS.md` + `.cursor/rules/*.mdc` (pointers) | `docs/00` ??`06` ??area ??`07` |
| Codex | `AGENTS.md` | same |
| Claude Code | `CLAUDE.md` (= same content as `AGENTS.md`) | same |
| Antigravity | `AGENTS.md` (link in Rules/Instructions) | same |

**Do not** put full workflows in IDE files. Full rules live only under `docs/`.

## Folder Roles

| Folder | Role |
|--------|------|
| `front/` | React (Vite) ??Netlify |
| `back/` | Express MVC ??Render |
| `python/` | Scripts / read-only data |
| `.AI/md/` | Specs, API catalog, jobs, folder tree |
| `docs/` | **Agent rule SSOT** |
| `env_example` | Render / Netlify / Supabase URL map |

## Project Doc SSOT

| Document | Path | Owner |
|----------|------|-------|
| Feature specs | `.AI/md/specs/` | Humans write; agents implement |
| API catalog | `.AI/md/API/README.md` | Agents after back changes |
| Folder tree | `Folder.md` | Agents on structure change |
| Job logs | `.AI/md/jobs/back/`, `.AI/md/jobs/front/`, `.AI/md/jobs/docs/` | Agents after work |
| Agent rules | `docs/*.md` | Maintainers only |
| IDE setup (humans) | `docs/13-ide-setup.md` | Maintainers |
| Env wiring | `env_example`, `back/.env.example`, `front/.env.example` | Maintainers / deploy |

## Mandatory Read (Before Any Edit)

1. `docs/00-overview.md` (this file)
2. `docs/06-uniformity.md`
3. `docs/07-ai-md-workflow.md`
4. Area: `docs/02-back.md` | `docs/03-front.md` | `docs/04-md-documentation.md` | `docs/01-git.md`
5. Deploy/data: `docs/05-netlify-supabase.md`
6. Feature: matching `.AI/md/specs/<feature>.md`

## Default Feature Flow

```
.AI/md/specs/<feature>.md ??Stitch ??front/publish/*.html
  ??React (pages + common) and/or secure Express MVC
  ??.AI/md/API + .AI/md/jobs + Folder.md
```

Human-facing steps: root `README.md` (first visit) + `QUICKSTART.md` (Quick try / Full setup)

## Git Sync (Required)

```bash
git pull origin main
```

Skip only if the user already pulled or asked to skip. On failure, stop and explain.

## Rules Index

| Topic | Doc |
|-------|-----|
| Git | `docs/01-git.md` |
| back | `docs/02-back.md` |
| front | `docs/03-front.md` |
| md writing | `docs/04-md-documentation.md` |
| Render / Netlify / Supabase | `docs/05-netlify-supabase.md` |
| Cross-IDE uniformity | `docs/06-uniformity.md` |
| How AI applies MD | `docs/07-ai-md-workflow.md` |
| MCP setup | `docs/09-mcp-setup.md` |
| Error fix | `docs/11-error-fix.md` |
| Run / preview | `docs/12-run-preview.md` |
| IDE / app setup | `docs/13-ide-setup.md` |
