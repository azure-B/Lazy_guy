# QUICKSTART — short path (no coding knowledge needed)

You do **not** need to know how to code.  
You do **not** need to write a “spec”.  
You only: pick your job → attach **one** prompt file → say what you want → send.

**Want slower, click-by-click help** (what `@` means, every paste box)?  
→ open [`README.md`](README.md) first.

Example project built this way: [azure-B/BU_Team](https://github.com/azure-B/BU_Team) / [site](https://bu-team.netlify.app/)

Questions? benefit5758@naver.com

---

### Start here — pick your app

| I use… | Jump in this file | Full steps in README |
|--------|-------------------|----------------------|
| **Cursor** | [→ Cursor](#app-cursor) | [README → Cursor](README.md#app-cursor) |
| **Codex** | [→ Codex](#app-codex) | [README → Codex](README.md#app-codex) |
| **Claude Code** | [→ Claude Code](#app-claude) | [README → Claude Code](README.md#app-claude) |
| **Antigravity** | [→ Antigravity](#app-antigravity) | [README → Antigravity](README.md#app-antigravity) |

You need **one** app only — not all four.

---

## Jump list

- [0. Install one AI app](#0-install-one-ai-app-pick-yours)
  - [Cursor](#app-cursor)
  - [Codex](#app-codex)
  - [Claude Code](#app-claude)
  - [Antigravity](#app-antigravity)
- [1. First day — MCP](#1-first-day-only--connect-tools-mcp)
- [2. Pick your position](#2-pick-your-position)
- [3. How to ask the AI](#3-how-to-ask-the-ai-every-time)
- [4. Daily checklist](#4-your-daily-checklist)
- [5. Fix errors](#5-if-there-is-an-error-important)
- [6. What you never need to do](#6-what-you-never-need-to-do)
- [7. If you get stuck](#7-if-you-get-stuck-not-a-code-error)
- [8. Did it work?](#8-after-the-ai-finishes--quick-did-it-work)
- [9. See the result](#9-see-the-result-on-screen-react--node)

---

## 0. Install one AI app (pick yours)

Same folder. Same prompts under `.AI/prompts/`.  
Only how you open chat / attach a file changes.

Jump: [Cursor](#app-cursor) · [Codex](#app-codex) · [Claude Code](#app-claude) · [Antigravity](#app-antigravity)

---

<a id="app-cursor"></a>

### Cursor

**Full steps:** [README → Cursor](README.md#app-cursor)

1. Install [Cursor](https://cursor.com/).  
2. **File → Open Folder…** → `lazy_guy`.  
3. Open **Chat**.  
4. Type `@` → pick `.AI/prompts/….md` → say what you want → Send.

Done. Go to [§1 First day MCP](#1-first-day-only--connect-tools-mcp).

---

<a id="app-codex"></a>

### Codex

**Full steps:** [README → Codex](README.md#app-codex)

1. Open this folder in **Codex**.  
2. Start chat / agent (`AGENTS.md` is read automatically).  
3. Attach with `@.AI/prompts/….md` **or** type:  
   `Read .AI/prompts/….md and follow it`  
4. Say what you want → Send.

Done. Go to [§1 First day MCP](#1-first-day-only--connect-tools-mcp).

---

<a id="app-claude"></a>

### Claude Code

**Full steps:** [README → Claude Code](README.md#app-claude)

1. Open a terminal in this folder (`lazy_guy`).  
2. Start **Claude Code** (it reads `CLAUDE.md` automatically).  
3. Type: `Read .AI/prompts/….md and follow it`  
   (or `@` if your UI supports it).  
4. Say what you want → Send.

Done. Go to [§1 First day MCP](#1-first-day-only--connect-tools-mcp).

---

<a id="app-antigravity"></a>

### Antigravity

**Full steps:** [README → Antigravity](README.md#app-antigravity)

1. Open / link this folder in **Antigravity**.  
2. Point Rules at `AGENTS.md`.  
3. Chat → `@.AI/prompts/….md` **or**  
   `Read .AI/prompts/….md and follow it`  
4. Say what you want → Send.

Done. Go to [§1 First day MCP](#1-first-day-only--connect-tools-mcp).

---

## 1. First day only — connect tools (MCP)

Do this **once** per computer.

### You do

1. In chat, attach the MCP prompt:
   - Cursor / if `@` works: **`@.AI/prompts/A-mcp.md`**
   - Codex / Claude / Antigravity without `@`: type  
     **`Read .AI/prompts/A-mcp.md and follow it.`**

2. Send this message:

```text
Help me finish MCP setup. I am a beginner. Follow the prompt file.
```

3. Do what the AI tells you (copy `MCPkeys.json.example` → `MCPkeys.json`, paste tokens, run `node scripts/register-mcp.mjs`).

### Done when

- AI says MCP is ready.
- `MCPkeys.json` is gone after a successful register (that is normal and good).

Token links (if AI asks you to get keys):

- GitHub: https://github.com/settings/tokens  
- Supabase: https://supabase.com/dashboard  
- Netlify: https://app.netlify.com/user/applications#personal-access-tokens  
- Render: https://dashboard.render.com/u/settings#api-keys  

More detail: [README §3 First day MCP](README.md#3-first-day--connect-tools-mcp)

---

## 2. Pick your position

| I am… | I make… | Use this prompt only |
|-------|---------|----------------------|
| **Front** | Screens / buttons / pages | `@.AI/prompts/B-front.md` |
| **Back** | Server / API / database | `@.AI/prompts/C-back.md` (and `@.AI/prompts/D-db.md` if tables change) |
| **Python** | Scripts / data files | `@.AI/prompts/E-python.md` |
| **Both Front+Back** | One full feature | `@.AI/prompts/F-fullstack.md` |

---

## 3. How to ask the AI (every time)

### Step by step

1. Open Chat (Cursor / Codex / Claude Code / Antigravity).  
2. Attach **exactly one** prompt from the table above  
   (`@` **or** `Read .AI/prompts/….md and follow it`).  
3. If Front: also attach your HTML if you have it, e.g. `@front/publish/my-page.html`  
4. Type what you want in plain English (or edit the `[brackets]` inside the prompt).  
5. Send.  
6. Wait. The AI will:
   - create the spec for you  
   - write the code  
   - update docs (`jobs`, API, `Folder.md`, ERD when needed)

### Example messages

**Front**

```text
@.AI/prompts/B-front.md
@front/publish/home.html

Build this page. I am a beginner. Follow the prompt.
```

**Back**

```text
@.AI/prompts/C-back.md

I need GET /api/notices (list) and GET /api/notices/:id (one item).
I am a beginner. Follow the prompt.
```

**Back + database**

```text
@.AI/prompts/D-db.md

I allow SQL write. I need a notices table for public list + detail.
Follow the prompt.
```

**Python**

```text
@.AI/prompts/E-python.md

Make a script that cleans JSON under python/api.
Follow the prompt.
```

**Full feature**

```text
@.AI/prompts/F-fullstack.md
@front/publish/notices.html

Public notices list screen + list API. Ask me before DB write.
Follow the prompt.
```

---

## 4. Your daily checklist

Copy this into a note and tick as you go:

```text
[ ] Open this project in my AI app (Cursor / Codex / Claude / Antigravity)
[ ] (First day) A-mcp.md done
[ ] I know my position: Front / Back / Python
[ ] I attached ONE prompt file (@ or “Read … and follow it”)
[ ] I wrote what I want in simple words
[ ] I sent the message
[ ] I looked at what the AI changed
[ ] If something is wrong → go to §5 (Fix errors)
```

---

## 5. If there is an error (important)

You do **not** need to understand the red text.  
You only need to **command the AI** like this.

### Do this every time something breaks

1. In chat, attach:

   **`@.AI/prompts/G-fix.md`**

2. Copy **all** of the box below.  
3. Replace the `[ brackets ]` with your error and your goal.  
4. Send.

```text
@.AI/prompts/G-fix.md

Fix everything in one pass. I am a beginner.

Error / what I see:
[PASTE THE FULL ERROR HERE]

What I was trying to do:
[one short sentence]

Follow G-fix.md. Auto-create/update the spec if needed. Update jobs/API/Folder.md. Explain in easy words.
```

### What the AI must do

- Fix the **whole** problem in one answer when possible.  
- Tell you how to check it worked.  
- At the end, give you **another copy-paste box** in case it still fails  
  (so you never have to invent a prompt yourself).

Rule for agents: [`.AI/docs/11-error-fix.md`](.AI/docs/11-error-fix.md)

### Also OK (short)

If you are mid-chat with the same AI, you can send:

```text
Something broke. Use @.AI/prompts/G-fix.md rules.
Fix everything in one pass. Here is the error:

[PASTE ERROR]
```

---

## 6. What you never need to do

- Write a long spec by yourself (AI auto-creates it).  
- Attach 10 rule files by hand (the prompt tells the AI what to open).  
- Invent your own “fix prompt” — always use **§5** above.  
- Memorize Express or React.  
- Commit secrets (`MCPkeys.json`, `.env`).

---

## 7. If you get stuck (not a code error)

1. Attach `@.AI/prompts/G-fix.md` if there is any error text.  
2. Or reply: `I am stuck. Explain like I am new. What should I click next?`  
3. Or open [`README.md`](README.md).  
4. Or email: **benefit5758@naver.com**

---

## 8. After the AI finishes — quick “did it work?”

| Position | Check |
|----------|--------|
| Front | Open the page in the app / browser preview |
| Back | Call the API path the AI named (or ask AI: “How do I test this API?”) |
| Python | Ask AI: “How do I run this script?” then run it |
| DB | Ask AI: “Show me the tables you created” |

Always keep [`Folder.md`](Folder.md) correct — the AI should update it when files move.

---

## 9. See the result on screen (React + Node)

You do **not** need to know how to start servers.  
Ask the AI to show the page.

### Do this

1. Attach:

   **`@.AI/prompts/H-preview.md`**

2. Paste:

```text
@.AI/prompts/H-preview.md

Show me the result in the browser. I am a beginner.
Page route: [/ or /health]
I need API too: [yes / no]
Follow the prompt. Do not start servers twice if they are already running.
```

3. Open the link the AI gives you (usually `http://localhost:5173/...`).

### What the AI must do

- Run Front (React) and Back (Node) if needed.  
- **Check if already running** — if yes, reuse; do **not** start duplicates.  
- Prefer: `node scripts/dev-up.mjs`  
- After a page edit, also show/open the page the same way.

Rules: [`.AI/docs/12-run-preview.md`](.AI/docs/12-run-preview.md)

---

**Remember**

- Errors → `@.AI/prompts/G-fix.md` (see **§5**)  
- See the page → `@.AI/prompts/H-preview.md` (see **§9**)  

Daily work stays in this file. Deeper links: [`README.md`](README.md).
