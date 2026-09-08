# Ishaan Taneja — Cybersecurity Portfolio

Production-ready personal portfolio for **Ishaan Taneja** (CompTIA Security+ | SOC Analyst L1).
Static site, dark SOC aesthetic, ready for **GitHub Pages** at:

`https://ishaantaneja.github.io/cybersec_portfolio/`

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Lucide icons

## Local development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

`bun install` / `bun run build` also work if you prefer Bun.

## GitHub Pages deploy (`ishaantaneja/cybersec_portfolio`)

Vite `base` is set to `/cybersec_portfolio/` in `vite.config.ts` so asset URLs work on a **project** Pages site.

### Option A — Push source + GitHub Actions (recommended)

1. Create (or clone) the empty repo `ishaantaneja/cybersec_portfolio`.
2. Unzip this package into the repo root (so `package.json`, `src/`, `public/` sit at the top level — not inside a nested folder).
3. Commit and push to `main`.
4. Enable **GitHub Pages** → Source: **GitHub Actions**.
5. Use the included `.github/workflows/deploy.yml`, push, and wait for the workflow.

If you do not have a lockfile yet, use `npm install` instead of `npm ci` in the workflow once, commit `package-lock.json`, then switch back to `npm ci`.

### Option B — Upload `dist/` manually

A verified `dist/` is included in the release zip when the build succeeded.

1. Repo **Settings → Pages → Deploy from a branch**.
2. Publish the contents of `dist/` (e.g. via `gh-pages` branch), **or** use Actions as above.
3. Site URL: `https://ishaantaneja.github.io/cybersec_portfolio/`

### Custom domain or user site (`ishaantaneja.github.io`)

If you deploy to a **user/organization** site root or a custom domain at the site root, change:

```ts
// vite.config.ts
base: "/",
```

Rebuild, then point DNS / Pages custom domain as usual. Keep `base: "/cybersec_portfolio/"` for the project repo named `cybersec_portfolio`.

## Resume PDF

Place your resume at:

```text
public/resume.pdf
```

After build/deploy it will be served at:

`https://ishaantaneja.github.io/cybersec_portfolio/resume.pdf`

(See `public/RESUME_PLACEHOLDER.txt`.)

## Push from this zip

```bash
git clone https://github.com/ishaantaneja/cybersec_portfolio.git
cd cybersec_portfolio
# Unzip so package.json lands in this directory (not nested oddly)
unzip /path/to/cybersec_portfolio.zip -d .
npm install
npm run build
git add .
git commit -m "Add portfolio site"
git push origin main
```

Do **not** commit `node_modules/`. Commit `dist/` only if you deliberately want branch-based static hosting without Actions; otherwise prefer building in CI.

## Sections

- Hero (intent, CTAs)
- Story arc
- Experience
- Projects
- Skills (grouped chips)
- Certs / Education / Volunteering
- Contact

No LICENSE file by design.
