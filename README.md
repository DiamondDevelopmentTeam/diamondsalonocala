# Diamond Salon Ocala

The public website for Diamond Salon Ocala, built with React, TypeScript, and Vite. Public contact and professional inquiries are delivered through the shared Diamond Azure Function and Microsoft Graph.

## Project structure

```text
client/   React website and optimized salon assets
server/   Optional local storage API for sensitive client forms only
```

The repository uses npm workspaces and a single root lockfile.

## Local development

1. Install Node.js 22 or newer.
2. Run `npm ci` from the repository root.
3. Copy `.env.example` to `.env` and review the values.
4. Run `npm run dev`.

The website runs at `http://localhost:5173`; the optional client-form storage API runs at `http://localhost:4000`.

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

The deployment workflow uploads `client/dist`. Configure the repository Actions variable `VITE_INQUIRY_API_URL` with the shared Function route ending in `/api/send-inquiry`, and configure `VITE_RECAPTCHA_SITE_KEY` with a public reCAPTCHA v2 checkbox key approved for the production and local hostnames. The workflow fails before deployment when either value is missing. The browser submits a fixed `diamond-salon-ocala` site identifier and cannot choose an email recipient. If the secure Function URL is unavailable, contact and booth-rental forms fail closed; there is no browser email fallback.

## Full-stack hosting

Set `VITE_BASE_PATH=/` and `VITE_ENABLE_SAME_ORIGIN_API=true` when the Express server hosts the built client at the domain root. The included Dockerfile is configured this way.

Sensitive client forms can be stored in `server/data/submissions.json`, which is ignored by Git, when the optional full-stack server is intentionally hosted. Contact and professional inquiries bypass this server and use `diamondpeo-webforms-api`, which validates the approved site/form metadata and reCAPTCHA token before Microsoft Graph delivery.

## Public inquiry architecture

```text
React form → visible reCAPTCHA → diamondpeo-webforms-api /api/send-inquiry
→ server-side validation and recipient mapping → Microsoft Graph → Diamond mailbox
```

Only public Vite values belong in GitHub Pages. Microsoft identity credentials, `GRAPH_SENDER_EMAIL`, the site recipient mapping, and reCAPTCHA secrets remain Azure Function settings. The Salon checkbox uses its own `SALON_RECAPTCHA_SECRET_KEY`; it never falls back to the shared v3 secret used by other sites.

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
