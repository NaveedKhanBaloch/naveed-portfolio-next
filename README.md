# Naveed Portfolio

Next.js portfolio prepared for Coolify deployment on a VPS.

## Coolify settings

- Build pack: Dockerfile
- Port: `3000`
- Required environment variables:
  - `ADMIN_PASSWORD`
  - `ADMIN_SESSION_SECRET`
  - `CONTENT_FILE_PATH=/app/data/portfolio-content.json`

For persistent admin edits, mount a Coolify persistent volume to `/app/data`.

## Local development

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
npm run start
```
