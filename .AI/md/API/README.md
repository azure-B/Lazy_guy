# API Catalog

Append one section per endpoint. Remove the section when the endpoint is deleted.  
Related rules: `docs/02-back.md`, `docs/04-md-documentation.md`.

## GET /api/health

- Description: Liveness check for the Express API
- Request: none
- Response: `{ ok: boolean, service: string, timestamp: string }`
- Related files: `back/routes/health.js`, `back/controller/healthController.js`, `back/models/healthModel.js`
- Spec: `.AI/md/specs/health-check.md`
