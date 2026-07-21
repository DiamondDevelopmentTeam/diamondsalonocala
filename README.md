# Diamond Salon Ocala

The public website for Diamond Salon Ocala, built with React, TypeScript, Vite, and an optional Express submission API.

## Project structure

```text
client/   React website and optimized salon assets
server/   Optional Express API for contact, recruitment, and client forms
```

The repository uses npm workspaces and a single root lockfile.

## Local development

1. Install Node.js 22 or newer.
2. Run `npm ci` from the repository root.
3. Copy `.env.example` to `.env` and review the values.
4. Run `npm run dev`.

The website runs at `http://localhost:5173`; the API runs at `http://localhost:4000`.

## Validation

```bash
npm run lint
npm run typecheck
npm run build
```

The full build outputs the website to `client/dist` and the API to `server/dist`.

## GitHub Pages

The Pages workflow builds only the static client with this repository base path:

```text
/diamondsalonocala/
```

Vite generates `client/dist/404.html` as an SPA fallback and adds `.nojekyll` during every production build. React Router uses `import.meta.env.BASE_URL`, so direct visits and refreshes under the repository path resolve correctly.

The deployment workflow uploads `client/dist`. If a hosted submission API is available, add its absolute URL as the repository Actions variable `VITE_API_URL`. Without that variable, general contact and booth-rental inquiries open a prefilled email draft; sensitive client forms remain disabled rather than sending personal information insecurely.

## Full-stack hosting

Set `VITE_BASE_PATH=/` and `VITE_ENABLE_SAME_ORIGIN_API=true` when the Express server hosts the built client at the domain root. The included Dockerfile is configured this way.

Form submissions are stored in `server/data/submissions.json`, which is ignored by Git. Optional Resend email delivery is configured through the environment values documented in `.env.example`.

## Content and images

Business details are centralized in:

```text
client/src/config/site.ts
client/src/data/team.ts
client/src/data/services.ts
client/src/data/forms.ts
client/src/data/gallery.ts
```

Public imagery is organized under `client/public/images` with responsive WebP variants for salon and team photography.
