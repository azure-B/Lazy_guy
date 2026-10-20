# Lazy Guy — for people with no coding background

This project lets you build a website by **talking to an AI** in Cursor.  
You do **not** need to know programming, React, Node.js, or “how AI works”.

**Short version:** open [`QUICKSTART.md`](QUICKSTART.md) and follow it.  
**This README:** same ideas, explained more slowly (what to click, what `@` means, what to paste).

**Example made with Lazy Guy:** [azure-B/BU_Team](https://github.com/azure-B/BU_Team)

Questions? **benefit5758@naver.com**

---

## Table of contents

1. [What you need on your computer](#1-what-you-need-on-your-computer)
2. [What is “Chat” and what is `@`?](#2-what-is-chat-and-what-is-)
3. [First day — connect tools (MCP)](#3-first-day--connect-tools-mcp)
4. [Every day — pick your job and talk to AI](#4-every-day--pick-your-job-and-talk-to-ai)
5. [Ready-made messages (copy and paste)](#5-ready-made-messages-copy-and-paste)
6. [If something breaks](#6-if-something-breaks)
7. [See the page in the browser](#7-see-the-page-in-the-browser)
8. [Words you may see (simple meanings)](#8-words-you-may-see-simple-meanings)
9. [Extra / advanced links](#9-extra--advanced-links)

---

## 1. What you need on your computer

### Step A — Install Cursor

1. Go to [https://cursor.com/](https://cursor.com/) and install Cursor.  
2. Open Cursor.  
3. Click **File → Open Folder…**  
4. Choose this project folder: **`lazy_guy`**  
5. Wait until the file list appears on the left.

### Step B — Open the AI chat

1. Look for **Chat** (or Agent chat) in Cursor.  
2. Click it so you see a text box where you can type.  
3. That box is where you will type `@` and your requests.

You are ready. You do **not** need to open a terminal yourself for normal work — the AI can run commands for you.

---

## 2. What is “Chat” and what is `@`?

### Chat

Chat = the place you **talk to the AI**.  
You write normal sentences. The AI edits files and runs tools for you.

### `@` (very important)

`@` means: **“AI, please read this file too.”**

#### How to use `@` (click by click)

1. Click inside the Chat input box.  
2. Type the `@` key on your keyboard.  
3. A list of files appears.  
4. Start typing the name, for example: `A-mcp` or `B-front`.  
5. Click the file you want (example: `.AI/prompts/B-front.md`).  
6. You will see a chip/tag in the chat like `@.AI/prompts/B-front.md`.  
7. Under that, type your request in easy English.  
8. Press **Send** / Enter.

#### Golden rule

For normal work, attach **one** prompt file from `.AI/prompts/`.  
That prompt already tells the AI which other rules to open.  
You usually do **not** need to `@` many rule files yourself.

| Situation | What to `@` |
|-----------|-------------|
| First day setup | only `@.AI/prompts/A-mcp.md` |
| Make a screen | `@.AI/prompts/B-front.md` (+ optional HTML file) |
| Make a server API | `@.AI/prompts/C-back.md` |
| Change database | `@.AI/prompts/D-db.md` |
| Python script | `@.AI/prompts/E-python.md` |
| Screen + API together | `@.AI/prompts/F-fullstack.md` |
| Error / red message | `@.AI/prompts/G-fix.md` |
| Show the page now | `@.AI/prompts/H-preview.md` |

---

## 3. First day — connect tools (MCP)

Do this **once** on each computer.  
MCP = letting the AI use GitHub / Supabase / Netlify / Render helpers.  
If you skip this, some “Back” work is harder, but Front can still start.

### What you do

1. Open Chat.  
2. Type `@` and choose:

   **`.AI/prompts/A-mcp.md`**

3. Paste this message and send:

```text
Help me finish MCP setup. I am a beginner. Follow the prompt file.
```

4. The AI will tell you, in easy words, to:
   - copy `MCPkeys.json.example` → make `MCPkeys.json`
   - paste your secret keys into that file
   - run: `node scripts/register-mcp.mjs`
5. After success, `MCPkeys.json` is **deleted on purpose** (so secrets are not left in the folder). That is good.

### Where to get keys (if the AI asks)

- GitHub: https://github.com/settings/tokens  
- Supabase: https://supabase.com/dashboard  
- Netlify: https://app.netlify.com/user/applications#personal-access-tokens  
- Render: https://dashboard.render.com/u/settings#api-keys  

More detail for helpers: [`.AI/docs/09-mcp-setup.md`](.AI/docs/09-mcp-setup.md)

**Never** upload or commit a filled `MCPkeys.json` to the internet.

---

## 4. Every day — pick your job and talk to AI

### Pick your position

| I am… | I care about… | Attach this |
|-------|----------------|-------------|
| **Front** | Buttons, screens, look & feel | `@.AI/prompts/B-front.md` |
| **Back** | Invisible server / “API” / data | `@.AI/prompts/C-back.md` |
| **Python** | Scripts / cleaning data files | `@.AI/prompts/E-python.md` |
| **Both** | One feature = screen + server | `@.AI/prompts/F-fullstack.md` |

### Everyday flow (repeat)

```
1. Open Chat
2. @ one prompt file
3. (Front) also @ your HTML under front/publish/ if you have it
4. Write what you want in simple words
5. Send
6. Wait — AI creates the “spec”, writes code, updates docs
7. If you want to see the page → use §7
8. If it breaks → use §6
```

You do **not** write a long planning document. The AI creates `.AI/md/specs/...` for you.

### Optional: design in Stitch first (Front)

1. Design the screen in **Stitch**.  
2. Open **View code**.  
3. Save the HTML into the folder `front/publish/`  
   Example name: `front/publish/home.html`  
4. Then use the Front message in §5.

---

## 5. Ready-made messages (copy and paste)

After you `@` the prompt file, you can paste one of these boxes.  
Change only the parts in `[ brackets ]`.

### Front — make a page

First `@` → `.AI/prompts/B-front.md`  
Also `@` → `front/publish/[your-page].html` if you have it.

```text
Build this page. I am a beginner. Follow the prompt.
HTML: front/publish/[your-page].html
What the page should do: [one short sentence]
```

### Back — make an API

First `@` → `.AI/prompts/C-back.md`

```text
I need these APIs. I am a beginner. Follow the prompt.
- [example: GET /api/notices — list]
- [example: GET /api/notices/:id — one item]
```

### Back — change database (you allow SQL)

First `@` → `.AI/prompts/D-db.md`

```text
I allow SQL write. Follow the prompt.
I need: [example: notices table for a public list]
```

### Python

First `@` → `.AI/prompts/E-python.md`

```text
Make a script that [example: cleans JSON under python/api].
I am a beginner. Follow the prompt.
```

### Front + Back together

First `@` → `.AI/prompts/F-fullstack.md`  
Optional `@` → your HTML file.

```text
I want screen + API together. I am a beginner. Follow the prompt.
Feature: [example: public notices list]
HTML if any: front/publish/[page].html
DB write: [ask me first / yes / no]
```

---

## 6. If something breaks

You do **not** need to understand red error text.

1. In Chat, `@` → **`.AI/prompts/G-fix.md`**  
2. Paste this (put your error in the middle):

```text
Fix everything in one pass. I am a beginner.

Error / what I see:
[PASTE THE FULL ERROR HERE]

What I was trying to do:
[one short sentence]

Follow G-fix.md. Explain in easy words.
```

3. Send.  
4. The AI should fix things in **one go**, then tell you how to check.  
5. If it still fails, the AI must give you **another ready paste box** — you should not invent a new prompt yourself.

Rules for the AI: [`.AI/docs/11-error-fix.md`](.AI/docs/11-error-fix.md)

---

## 7. See the page in the browser

You do **not** need to know how to “run React” or “run Node” yourself.

1. In Chat, `@` → **`.AI/prompts/H-preview.md`**  
2. Paste:

```text
Show me the result in the browser. I am a beginner.
Page route: [/ or /health]
I need API too: [yes / no]
Follow the prompt. Do not start servers twice if they are already running.
```

3. The AI runs a helper (`node scripts/dev-up.mjs`) that:
   - starts the screen app if needed (usually http://localhost:5173)
   - starts the server if needed (usually http://localhost:3001)
   - **skips** starting if it is already running (no duplicates)
4. Open the link the AI gives you in your browser (Chrome, Edge, etc.).

After a page change, you can send the same H-preview request again — the AI should just show the page, not start two copies.

Rules: [`.AI/docs/12-run-preview.md`](.AI/docs/12-run-preview.md)

---

## 8. Words you may see (simple meanings)

| Word | Simple meaning |
|------|----------------|
| AI / Chat | The helper you type to |
| `@` | “Please read this file” |
| Prompt file | A ready instruction sheet for the AI (in `.AI/prompts/`) |
| Front | The visible website (buttons, pages) |
| Back | The invisible server that stores/sends data |
| API | A doorway the screen uses to ask the server for data |
| Spec | A short plan file — **AI writes it for you** |
| MCP | Extra tools (GitHub, Supabase, …) for the AI |
| Localhost | Your own computer’s website address (like http://localhost:5173) |
| Folder.md | A map of project folders — AI should keep it updated |

---

## 9. Extra / advanced links

Use these only when you need more depth. Beginners can ignore most of this list.

| Link | What it is |
|------|------------|
| [`QUICKSTART.md`](QUICKSTART.md) | Shorter checklist version of this guide |
| [`.AI/prompts/`](.AI/prompts/) | All one-file prompts (A–H) |
| [`.AI/docs/`](.AI/docs/) | Full rules for the AI |
| [`Folder.md`](Folder.md) | Live folder map |
| [`AGENTS.md`](AGENTS.md) | What every AI must follow |
| [`env_example`](env_example) | Later: website hosting addresses |
| [`.AI/docs/09-mcp-setup.md`](.AI/docs/09-mcp-setup.md) | MCP details |
| [`.AI/docs/11-error-fix.md`](.AI/docs/11-error-fix.md) | Error fix rules |
| [`.AI/docs/12-run-preview.md`](.AI/docs/12-run-preview.md) | How servers are started |

Same AI rules work in Cursor, Codex, Claude Code, and Antigravity — but this README assumes **Cursor**, which is easiest for beginners.

---

### Daily reminder

```text
1) @ one prompt
2) say what you want
3) send
4) broken? → @ G-fix
5) want to see it? → @ H-preview
```

That is the whole workflow.
