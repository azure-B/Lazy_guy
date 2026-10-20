# QUICKSTART — short path

You do **not** need to invent a long plan.  
Pick **one** prompt → say what you want → send → preview or fix.

**Slower hub (value, example, limits):** [`README.md`](README.md)

Example (Lazy Guy collaboration): [BU_Team source](https://github.com/azure-B/BU_Team) · [live site](https://bu-team.netlify.app/)

Questions? benefit5758@naver.com

---

## Two paths

| Path | Goal | MCP / cloud tokens? |
|------|------|---------------------|
| **[1. Quick try](#1-quick-try--see-the-local-app-first)** | See the local app first | **No** |
| **[2. Full setup](#2-full-setup--mcp-and-cloud-services)** | Connect GitHub / Supabase / deploy helpers | **Yes**, when you need them |

Do **§1 Quick try** first unless you already know you need cloud tools today.

ZIP downloads without Git: skip any “pull / sync” steps. Local preview still works.

---

## Jump list

- [0. Install one AI app](#0-install-one-ai-app)
- [1. Quick try](#1-quick-try--see-the-local-app-first)
- [2. Full setup](#2-full-setup--mcp-and-cloud-services)
- [3. Pick your position](#3-pick-your-position)
- [4. How to ask](#4-how-to-ask-the-ai-every-time)
- [5. Daily checklist](#5-your-daily-checklist)
- [6. Fix errors (G-fix)](#6-if-there-is-an-error-important)
- [7. What you never need to do](#7-what-you-never-need-to-do)
- [8. Stuck?](#8-if-you-get-stuck-not-a-code-error)
- [9. Did it work?](#9-after-the-ai-finishes--quick-did-it-work)
- [10. Preview (H-preview)](#10-see-the-result-on-screen-react--node)

---

## 0. Install one AI app

You need **one** app — not all four.  
Same folder. Same prompts under `.AI/prompts/`.

| App | Short start | Full steps |
|-----|-------------|------------|
| **Cursor** | Open folder → Chat → `@.AI/prompts/….md` | [ide setup → Cursor](.AI/docs/13-ide-setup.md#cursor) |
| **Codex** | Open folder → chat → `@` or `Read .AI/prompts/….md and follow it` | [ide setup → Codex](.AI/docs/13-ide-setup.md#codex) |
| **Claude Code** | Run in this folder (reads `CLAUDE.md`) → `Read .AI/prompts/….md and follow it` | [ide setup → Claude Code](.AI/docs/13-ide-setup.md#claude-code) |
| **Antigravity** | Open folder → rules → `AGENTS.md` → `@` or `Read …` | [ide setup → Antigravity](.AI/docs/13-ide-setup.md#antigravity) |

Also need **Node.js 18+** (20 LTS recommended) for local preview (`npm` / `node scripts/dev-up.mjs`).

---

## 1. Quick try — see the local app first

**Goal:** open the starter page without creating MCP tokens or a database.  
Git sync is **not** required for this path.

### You need

- This project folder open in your AI app  
- Node.js 18+ installed  
- Prompt [`.AI/prompts/H-preview.md`](.AI/prompts/H-preview.md)

### Steps

1. Open chat.  
2. Attach H-preview (`@` **or** type `Read .AI/prompts/H-preview.md and follow it`).  
3. Paste:

```text
Show me the result in the browser. I am a beginner.
Page route: /
I need API too: yes
Follow the prompt. Do not start servers twice if they are already running.
```

4. Open the link the AI gives you (usually `http://localhost:5173`).  
5. Optional API check: `http://localhost:3001/api/health`

### Manual fallback (if you prefer the terminal)

```bash
node scripts/dev-up.mjs
```

Then open `http://localhost:5173` only if the command reports **READY**.

The helper:

- Installs dependencies when `node_modules` is missing  
- Checks that Front/Back look like **this** project (not just an open port)  
- Writes logs under `.dev-up-logs/` if it starts a service  
- Exits with an error if a requested service fails  

Local preview does not need MCP keys or a cloud database.

### If Quick try fails

Go to [§6 G-fix](#6-if-there-is-an-error-important).

When you later need GitHub/DB/deploy helpers → [§2 Full setup](#2-full-setup--mcp-and-cloud-services).

---

## 2. Full setup — MCP and cloud services

**MCP** = letting your AI coding tool use helper connections (GitHub, Supabase, Netlify, Render).  
Useful for Back / deploy / database work. **Not required** to see the local home page.

### Required vs optional

| Item | For Quick try | For cloud / MCP helpers |
|------|---------------|-------------------------|
| AI coding app + Node.js 18+ | Required | Required |
| GitHub token in MCP | No | Typical yes |
| Supabase project | No | When you use real DB |
| Netlify / Render tokens | No | When you use those deploy helpers |

### What you do

1. Attach [`.AI/prompts/A-mcp.md`](.AI/prompts/A-mcp.md)  
   (or `Read .AI/prompts/A-mcp.md and follow it`).  
2. Send:

```text
Help me finish MCP setup. I am a beginner. Follow the prompt file.
```

3. Follow the AI: copy `MCPkeys.json.example` → `MCPkeys.json`, paste tokens, run:

```bash
node scripts/register-mcp.mjs
```

4. On **success**, the script updates `.cursor/mcp.json` and **deletes the temporary root `MCPkeys.json`**.  
   That only removes the temp paste file in the project folder. It does **not** mean all credentials everywhere are gone (cloud accounts and `.cursor/mcp.json` may still hold configured values).  
5. Reload MCP / restart the app if asked.

### Token links (if the AI asks)

- GitHub: https://github.com/settings/tokens  
- Supabase: https://supabase.com/dashboard  
- Netlify: https://app.netlify.com/user/applications#personal-access-tokens  
- Render: https://dashboard.render.com/u/settings#api-keys  

Details: [`.AI/docs/09-mcp-setup.md`](.AI/docs/09-mcp-setup.md)

**Never** commit a filled `MCPkeys.json` or secrets in `.env`.

---

## 3. Pick your position

| I am… | I make… | Use this prompt |
|-------|---------|-----------------|
| **Front** | Screens / buttons / pages | `.AI/prompts/B-front.md` |
| **Back** | Server / API / database | `.AI/prompts/C-back.md` (+ `.AI/prompts/D-db.md` if tables change) |
| **Python** | Scripts / data files | `.AI/prompts/E-python.md` |
| **Both** | One full feature | `.AI/prompts/F-fullstack.md` |

---

## 4. How to ask the AI (every time)

1. Open Chat.  
2. Attach **exactly one** prompt (`@` or `Read .AI/prompts/….md and follow it`).  
3. If Front: also attach HTML under `front/publish/` when you have it.  
4. Type what you want in plain English.  
5. Send. The AI should create/update a spec under `.AI/md/specs/`, write code, and update docs when needed.  
6. Preview → [§10](#10-see-the-result-on-screen-react--node). Errors → [§6](#6-if-there-is-an-error-important).

### Example messages

**Front**

```text
Read .AI/prompts/B-front.md and follow it.
Build this page. I am a beginner. Follow the prompt.
```

**Back**

```text
Read .AI/prompts/C-back.md and follow it.
I need GET /api/notices (list) and GET /api/notices/:id (one item).
I am a beginner. Follow the prompt.
```

**Full feature**

```text
Read .AI/prompts/F-fullstack.md and follow it.
Public notices list screen + list API. Ask me before DB write.
Follow the prompt.
```

---

## 5. Your daily checklist

```text
[ ] Open this project in my AI app
[ ] Quick try done once (see the local page)
[ ] (When needed) Full setup / A-mcp done
[ ] I know my position: Front / Back / Python
[ ] I attached ONE prompt file
[ ] I wrote what I want in simple words
[ ] I sent the message
[ ] I reviewed what the AI changed
[ ] If something is wrong → §6 (G-fix)
[ ] Want to see it → §10 (H-preview)
```

---

## 6. If there is an error (important)

1. Attach **`.AI/prompts/G-fix.md`**.  
2. Paste:

```text
Find the root cause and fix the related places. I am a beginner.

Error / what I see:
[PASTE THE FULL ERROR HERE]

What I was trying to do:
[one short sentence]

Follow G-fix.md. Explain in easy words.
```

3. The AI should diagnose and fix related places when possible, tell you how to check, and give another paste box if it still fails.

Rules: [`.AI/docs/11-error-fix.md`](.AI/docs/11-error-fix.md)

---

## 7. What you never need to do

- Write a long spec by yourself (AI auto-creates it).  
- Attach ten rule files by hand (the prompt tells the AI what to open).  
- Invent your own “fix prompt” — use **§6**.  
- Memorize Express or React.  
- Commit secrets (`MCPkeys.json`, `.env`).

---

## 8. If you get stuck (not a code error)

1. Use G-fix if there is error text.  
2. Or ask: `I am stuck. Explain like I am new. What should I click next?`  
3. Or open [`README.md`](README.md).  
4. Or email: **benefit5758@naver.com**

---

## 9. After the AI finishes — quick “did it work?”

| Position | Check |
|----------|--------|
| Front | Open the page (H-preview) |
| Back | Call the API path the AI named |
| Python | Ask: “How do I run this script?” |
| DB | Ask: “Show me the tables you created” |

Keep [`Folder.md`](Folder.md) accurate — the AI should update it when files move.

---

## 10. See the result on screen (React + Node)

1. Attach **`.AI/prompts/H-preview.md`**.  
2. Paste:

```text
Show me the result in the browser. I am a beginner.
Page route: [/ or /health]
I need API too: [yes / no]
Follow the prompt. Do not start servers twice if they are already running.
```

3. Open a URL only if `dev-up` (or the AI) reports that service as **ready** (usually `http://localhost:5173/...`).

`node scripts/dev-up.mjs` verifies Lazy Guy Front/Back before printing READY.  
Unrecognized processes on the same ports are treated as failures, not “already running.”

Rules: [`.AI/docs/12-run-preview.md`](.AI/docs/12-run-preview.md)

---

**Remember**

- First visit → **Quick try (§1)**  
- Cloud helpers → **Full setup (§2)**  
- Errors → **G-fix (§6)**  
- See the page → **H-preview (§10)**
