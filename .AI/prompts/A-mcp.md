# Prompt A — Connect MCP (everyone, once)

## Human instruction (what the user wants)

Help a complete beginner connect MCP for this Lazy Guy project.  
Explain in very easy English. Do the setup work you can; guide steps the human must click.

## AI: read these files first (mandatory)

- `AGENTS.md`
- `QUICKSTART.md`
- `README.md` (section MCP only if needed)
- `.AI/docs/09-mcp-setup.md`
- `MCPkeys.json.example`
- `scripts/register-mcp.mjs`
- `.gitignore`

## AI: do this

1. Explain how to copy `MCPkeys.json.example` → `MCPkeys.json`.
2. Explain where to paste: GitHub token, Supabase project_ref, Netlify token, Render API key (one line each + link if in docs).
3. Tell the human to run: `node scripts/register-mcp.mjs`
4. Confirm that a successful run **deletes** `MCPkeys.json`.
5. Tell them to reload MCP / restart Cursor and check Settings → Tools & MCP.
6. Auto-create a tiny spec under `.AI/md/specs/` only if you change project files; otherwise just guide.

## Rules

- Follow Lazy Guy invariants in `AGENTS.md`.
- Never commit secrets.
- Speak simply. Short sentences.
