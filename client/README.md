# Diamond Salon Ocala Website Rebuild

A complete full-stack rebuild of the public Diamond Salon Ocala website using React, TypeScript, Vite, Express, and a lightweight file-backed submission store.

## Included

- Responsive luxury salon design with a compact sticky header and mobile menu
- Home, Team, Our Space, Services, Giving Back, Forms, Contact, Specials, Join Our Team, Salon Etiquette, Privacy, Terms, and 404 pages
- Hero slideshow and salon gallery lightbox
- Image loader that accepts WebP, PNG, JPG, JPEG, GIF, or SVG without changing imports
- Functional contact, booth-rental, and digital client forms
- Express API with Zod validation, Helmet, CORS, rate limiting, request IDs, and hashed IP storage
- Local JSON persistence for submissions
- Optional Resend email delivery using environment variables
- Production static serving from the Express server
- Dockerfile, Docker Compose, and GitHub Actions CI
- Placeholder SVGs so the project runs before the final salon images are copied in

## Project structure

```text
diamond-salon-ocala-rebuild/
├─ client/                  React + Vite website
│  ├─ public/images/        Replace or add salon images here
│  └─ src/
├─ server/                  Express API and production server
│  ├─ data/                 Local submission storage
│  └─ src/
├─ Dockerfile
├─ docker-compose.yml
└─ .github/workflows/ci.yml
```

## Add your images

Copy the real image files into:

```text
client/public/images/
```

Keep the base names shown in `client/public/images/README.md`. Your logo can remain:

```text
High-Res-Diamond-Animation-Logo-1.webp
```

The application automatically checks common image extensions. You do not need to edit every component when the extension differs.

The original uploaded filename screenshot is included as `IMAGE-FILENAME-REFERENCE.png`.

## Local setup

1. Install Node.js 22 or newer.
2. Open a terminal in the project root.
3. Install dependencies:

```bash
npm install
```

4. Copy the environment template:

**PowerShell**

```powershell
Copy-Item .env.example .env
```

**macOS/Linux**

```bash
cp .env.example .env
```

5. Start the client and server together:

```bash
npm run dev
```

Open:

- Website: `http://localhost:5173`
- API health check: `http://localhost:4000/api/health`

## Production build

```bash
npm run typecheck
npm run build
npm start
```

The Express server will serve `client/dist` and the API from the same port. The default production URL is:

```text
http://localhost:4000
```

## Form submissions

Without an email provider, submissions are safely written to:

```text
server/data/submissions.json
```

The file is excluded from Git so client information is not accidentally committed.

To send an email copy through Resend, configure these values in `.env`:

```env
RESEND_API_KEY=your_key
SUBMISSION_TO_EMAIL=Brooke@diamondsalonocala.com
FROM_EMAIL=Diamond Salon Website <website@your-verified-domain.com>
```

The website still stores the submission if email delivery fails.

## Docker

```bash
docker compose up --build
```

Then visit `http://localhost:4000`.

## Content edits

Frequently changed salon information is centralized in:

```text
client/src/config/site.ts
client/src/data/team.ts
client/src/data/services.ts
client/src/data/forms.ts
```

Update booking links, social links, staff biographies, prices, and hours there.

## Deployment notes

### Single full-stack deployment

Deploy the Docker image or Node application to Azure App Service, Azure Container Apps, Render, Railway, Fly.io, or another Node-compatible host. Set `NODE_ENV=production`, `PORT`, `CLIENT_ORIGIN`, and email variables in the host settings.

### Static client plus separate API

The React client can be deployed separately. Set:

```env
VITE_API_URL=https://your-api-domain.example
VITE_BASE_PATH=/
```

Then build the client with:

```bash
npm run build --workspace client
```

Upload `client/dist` to the static host and deploy the server separately.

## Before launch

- Replace the placeholder images with the final high-resolution files.
- Confirm the exact booking URL used by the salon.
- Replace the Facebook and Instagram placeholder URLs in `client/src/config/site.ts`.
- Review all staff names, biographies, booking links, prices, and business hours.
- Have the privacy policy and terms reviewed for the salon's actual hosting, analytics, booking, and data practices.
- Use durable managed storage or a database if submissions become business-critical or the app runs on multiple server instances.
