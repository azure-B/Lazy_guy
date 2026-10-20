# 12 — Show the result (run React + Node, no duplicate servers)

When the user asks to **see the result**, **open the page**, or after a **page/API change**, the agent must run the apps and point to the live URL — not only describe code.

## Defaults

| App | Folder | Command | URL / port |
|-----|--------|---------|------------|
| Front (React / Vite) | `front/` | `npm run dev` | http://localhost:5173 |
| Back (Express / Node) | `back/` | `npm run dev` | http://localhost:3001 |

Prefer the helper (checks ports, skips if already up):

```bash
node scripts/dev-up.mjs
```

Optional path only:

```bash
node scripts/dev-up.mjs --front
node scripts/dev-up.mjs --back
```

## When to run

| User intent | Agent action |
|-------------|--------------|
| “Show me the result / open the page / 화면 보여줘” | Ensure Front (+ Back if API needed) is running → give the URL (and route if any) |
| After Front page edit | Ensure Front is running → open/tell `http://localhost:5173/[route]` |
| After Back API edit | Ensure Back is running → give `http://localhost:3001/api/...` smoke tip |
| Full-stack change | Ensure **both** are running (no duplicates) |

## No duplicate servers (required)

1. **Before** starting, check if the port already answers (script does this).
2. If Front port **5173** is up → do **not** start another Vite.
3. If Back port **3001** is up → do **not** start another Node.
4. If already up → say: “Already running at …” and reuse it.
5. Only install deps (`npm install`) in that folder if `node_modules` is missing.

## After start

- Tell the human the exact link in easy words, e.g.  
  `Open this in your browser: http://localhost:5173/health`
- If Simple Browser / preview is available in the IDE, open it; otherwise the localhost URL is enough.
- Do not block the chat forever waiting on servers — start in background, then confirm ports.

## Windows / Cursor notes

- Use background shell for `npm run dev`.
- Check the terminals folder or `node scripts/dev-up.mjs` output for “already running” vs “started”.

## Related

- Beginner prompt: `.AI/prompts/H-preview.md`
- QUICKSTART § “See the result”
