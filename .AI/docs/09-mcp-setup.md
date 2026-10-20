# 09 — MCP Setup (`MCPkeys.json` → register → delete)

**Intended flow:** paste tokens into `MCPkeys.json` → run one command → MCP is written into `.cursor/mcp.json` and connected (after Cursor reload). Then `MCPkeys.json` is deleted.

Human walkthrough: [README §1](../../README.md#1-mcp-registration-mcpkeysjson)

## Mental model

```
MCPkeys.json.example  →  copy to MCPkeys.json  →  paste tokens
                              ↓
                 node scripts/register-mcp.mjs
                              ↓
              .cursor/mcp.json  (MCP ready)
                              ↓
                    delete MCPkeys.json
```

You do **not** manually edit `.cursor/mcp.json` for day-to-day setup. Tokens in `MCPkeys.json` are enough.

## Safety

- Secrets only in temporary root **`MCPkeys.json`** (gitignored).
- Never commit `MCPkeys.json` or a filled `.cursor/mcp.json`.
- After **success**, the script **deletes `MCPkeys.json`**.
- Prefer Supabase `read_only=true` until writes are needed.

## `MCPkeys.json` fields

| Field | Required | What it is |
|-------|----------|------------|
| `github.token` | **Yes (typical)** | [GitHub Personal Access Token](https://github.com/settings/tokens) |
| `supabase.project_ref` | Back | Supabase project ref (scopes MCP URL) |
| `netlify.auth_token` | Back / Front deploy | Netlify PAT |
| `render.api_key` | Back | Render API key |

Template: root [`MCPkeys.json.example`](../../MCPkeys.json.example)

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

## Steps

1. `cp MCPkeys.json.example MCPkeys.json`
2. Paste real tokens (especially `github.token`)
3. `node scripts/register-mcp.mjs`
4. Confirm `.cursor/mcp.json` updated and **`MCPkeys.json` deleted**
5. Reload MCP / restart Cursor
6. Settings → Tools & MCP — `github` (and others you filled) should be on

## What the script writes

| Key in `MCPkeys.json` | MCP server | How auth is applied |
|-----------------------|------------|---------------------|
| `github.token` | `github` | `Authorization: Bearer <token>` → `https://api.githubcopilot.com/mcp/` |
| `supabase.project_ref` | `supabase` | URL query `project_ref` (+ optional browser OAuth once) |
| `netlify.auth_token` | `netlify` | env `NETLIFY_AUTH_TOKEN` for `@netlify/mcp` |
| `render.api_key` | `render` | `Authorization: Bearer <key>` → `https://mcp.render.com/mcp` |

## Back role

Use **GitHub + Supabase + Netlify + Render** MCP together.

| Task | MCP |
|------|-----|
| Repo / PRs / issues | GitHub |
| Schema / SQL / Auth / ERD testing | Supabase (see `.AI/docs/10-db-erd-supabase.md`) |
| API host env / logs | Render |
| Front env vs API URL | Netlify |

For **direct SQL adjust + test**: start with `read_only: true`; when the user grants write permission, re-register with `read_only: false` (or use write-capable Supabase MCP tools), run DDL/DML tests, then update `.AI/md/db/erd.md`.

Official docs:

- [GitHub MCP (Cursor)](https://github.com/github/github-mcp-server/blob/main/docs/installation-guides/install-cursor.md)
- [Create a GitHub PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)
- [Supabase MCP](https://supabase.com/docs/guides/ai-tools/mcp)
- [Netlify MCP](https://github.com/netlify/netlify-mcp)
- [Render MCP](https://render.com/docs/mcp-server)

Security rules still apply: `.AI/docs/02-back.md`.

## Re-register

Recreate `MCPkeys.json` from the example, paste tokens again, run the script. On success `MCPkeys.json` is deleted again.
