# 05 ??Render + Netlify + Supabase

Stack constraints for every IDE. Do not invent alternate hosts or databases.

**Env map SSOT (placeholders & wiring):** project root `env_example`  
**Runtime copies:** `back/.env.example` ??`back/.env` | `front/.env.example` ??`front/.env`

## Service Roles

| Platform | Hosts | Env file |
|----------|-------|----------|
| **Netlify** | React (Vite) SPA | `front/.env` + Netlify UI env |
| **Render** | Express API | `back/.env` + Render UI env |
| **Supabase** | Postgres + Auth | URL/keys shared; service role on Render only |

## Front ??Netlify

- Build: Vite ??`front/dist`
- Config: `front/netlify.toml` (SPA ??`index.html`)
- Env: `VITE_*` only (`VITE_API_BASE_URL`, `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`, `VITE_SITE_URL`)
- Never put `SUPABASE_SERVICE_ROLE_KEY` in front or Netlify

## Back ??Render + Express + Supabase

- Deploy Express (`back/`) as a Render Web Service
- Env: `PORT`, `CORS_ORIGIN`, `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`
- Data access only in `back/models/` ??controllers never import `@supabase/supabase-js` directly

## Cross-link Alignment (required when going live)

Fill `env_example`, then mirror into platform dashboards:

1. `front` `VITE_API_BASE_URL` = Render `RENDER_API_BASE` (`https://??onrender.com/api`)
2. `back` `CORS_ORIGIN` = Netlify `NETLIFY_SITE_URL` (`https://??netlify.app`)
3. Same `SUPABASE_URL` on Render and Netlify (`VITE_SUPABASE_URL`)
4. `SUPABASE_ANON_KEY` ??front only; `SUPABASE_SERVICE_ROLE_KEY` ??Render only
5. Supabase Auth redirect URL ??Netlify site URL (see `SUPABASE_AUTH_REDIRECT_URL` in `env_example`)

## Auth Pattern

1. Prefer Supabase Auth for sign-up / sign-in / session
2. Front holds the user session (anon key)
3. Back validates JWTs when protecting routes (or trusts RLS when the spec says so)
4. Specs under `.AI/md/specs/` must say which path is used

## Schema Changes

- Describe tables/columns in the feature spec **Data** section first
- Prefer SQL migrations under `back/supabase/migrations/` when added
- Do not silently invent tables not listed in the spec

## Bookmark Links (also in `env_example`)

- Render dashboard: https://dashboard.render.com/
- Render docs: https://render.com/docs
- Netlify dashboard: https://app.netlify.com/
- Netlify docs: https://docs.netlify.com/
- Supabase: project ??Settings ??API (URL + keys)
