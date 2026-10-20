# Folder.md — Live Project Tree (SSOT)

**Keep this file accurate at all times.**  
Whenever you add, remove, rename, or move a file/folder, update this tree in the **same task**.

Rules: `.AI/docs/04-md-documentation.md` · `.AI/docs/06-uniformity.md`

```
lazy_guy/
├── Folder.md                 ← this file (live tree)
├── QUICKSTART.md             ← beginners: Quick try + Full setup
├── README.md                 ← first-visit hub (value, example, limits)
├── LICENSE                   ← BSD Zero Clause License (0BSD)
├── AGENTS.md                 ← shared IDE entry (= CLAUDE.md)
├── CLAUDE.md
├── env_example               ← Render / Netlify / Supabase URL map
├── MCPkeys.json.example      ← MCP token template (never commit MCPkeys.json)
├── .gitignore
├── .AI/                      ← all agent + project markdown
│   ├── README.md
│   ├── prompts/              ← one-file chat prompts (A–H)
│   │   ├── README.md
│   │   ├── A-mcp.md
│   │   ├── B-front.md
│   │   ├── C-back.md
│   │   ├── D-db.md
│   │   ├── E-python.md
│   │   ├── F-fullstack.md
│   │   ├── G-fix.md
│   │   └── H-preview.md
│   ├── docs/                 ← agent rule SSOT
│   │   ├── 00-overview.md
│   │   ├── 01-git.md
│   │   ├── 02-back.md
│   │   ├── 03-front.md
│   │   ├── 04-md-documentation.md
│   │   ├── 05-netlify-supabase.md
│   │   ├── 06-uniformity.md
│   │   ├── 07-ai-md-workflow.md
│   │   ├── 08-roles.md
│   │   ├── 09-mcp-setup.md
│   │   ├── 10-db-erd-supabase.md
│   │   ├── 11-error-fix.md
│   │   ├── 12-run-preview.md
│   │   └── 13-ide-setup.md
│   └── md/                   ← specs, API catalog, jobs, ERD, guides
│       ├── db/
│       │   └── erd.md
│       ├── API/
│       │   └── README.md
│       ├── guides/
│       │   ├── verification-notes.md
│       │   └── assets/
│       │       └── bu-team-home.png
│       ├── specs/
│       │   ├── README.md
│       │   ├── _TEMPLATE.md
│       │   ├── health-check.md
│       │   ├── readme-first-visit.md
│       │   └── git-sync-and-dev-up.md
│       └── jobs/
│           ├── docs/
│           │   ├── 2026-10-20_readme-first-visit.md
│           │   └── 2026-10-20_git-sync-and-dev-up.md
│           ├── back/
│           │   └── 2026-10-20_scaffold.md
│           └── front/
│               └── 2026-10-20_scaffold.md
├── back/                     ← Express MVC (Render)
│   ├── app.js
│   ├── package.json
│   ├── .env.example
│   ├── middleware/
│   │   └── security.js
│   ├── routes/
│   │   ├── index.js
│   │   └── health.js
│   ├── controller/
│   │   └── healthController.js
│   └── models/
│       ├── healthModel.js
│       └── supabaseClient.js
├── front/                    ← React Vite (Netlify)
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── netlify.toml
│   ├── .env.example
│   ├── publish/
│   │   └── README.md
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── index.css
│       ├── components/
│       │   ├── common/
│       │   └── layout/
│       │       ├── Layout.jsx
│       │       └── Layout.css
│       ├── pages/
│       │   ├── HomePage.jsx
│       │   └── HealthPage.jsx
│       └── services/
│           └── api.js
├── python/
│   └── api/
├── scripts/
│   ├── register-mcp.mjs
│   └── dev-up.mjs
├── .cursor/
│   ├── mcp.json.example
│   └── rules/
│       ├── project-overview.mdc
│       ├── git-workflow.mdc
│       ├── back-workflow.mdc
│       ├── front-workflow.mdc
│       └── md-documentation.mdc
└── .claude/
    └── README.md
```

## Update checklist

After any structure change:

1. Edit the tree above to match disk reality
2. Do not leave stale paths
3. Job logs go under `.AI/md/jobs/` — they do not replace this file
