# MiCampeche

A daily-use civic + community app for San Francisco de Campeche, Mexico —
noticias, eventos, tienda local, avisos vecinales, reportes de infraestructura,
and alertas oficiales, in one place.

Live at **micampeche.app** (once DNS + GitHub Pages are configured — see
below).

## Current status: front-end prototype, no backend yet

Everything in this repo is a **static front-end prototype**. There is no
database, no real user accounts, and no payment processing wired in. All
data (news items, events, marketplace listings, offers, reports) lives in
plain JavaScript arrays at the top of `js/app.js`, clearly marked as mock
data. Every "submit" action (posting a product, claiming an Oferta, booking
a deal slot) currently just logs to the browser console and shows a
confirmation toast — nothing persists between page loads.

This is intentional: the UI/UX has been built and iterated on first, with
the plan to wire up a real backend (Supabase is the leading candidate,
matching the pattern used in an earlier sibling project) once the app's
shape is settled.

## Structure

```
micampeche/
├── index.html          — all markup, references the CSS/JS below
├── css/styles.css       — all styling
├── js/app.js             — all application logic + mock data
├── manifest.json         — PWA manifest (install-to-home-screen metadata)
├── sw.js                  — service worker (caches the app shell for offline use)
├── icons/                 — PWA icons (⚠️ placeholders needed, see below)
└── CNAME                  — custom domain for GitHub Pages (micampeche.app)
```

## Known gaps before this is a real product

- **Icons are missing.** `manifest.json` references
  `icons/icon-192.png`, `icons/icon-512.png`,
  `icons/icon-maskable-192.png`, and `icons/icon-maskable-512.png`. None of
  these files exist yet — drop real PNGs in `icons/` with those exact names.
  Maskable icons need real content confined to the center ~80% "safe zone"
  since Android crops them into different shapes depending on the launcher.
- **No backend.** See above — this is the next real milestone.
- **Hardcoded placeholders in `js/app.js`** worth searching for and
  replacing before going live:
  - `MICAMPECHE_WHATSAPP` — a placeholder phone number for the "Contacto"
    menu item. Replace with the real MiCampeche WhatsApp Business number.
- **Account/tier system doesn't exist yet.** The Negocio / Negocio Premium
  tiers, RFC verification, and the $99 MXN per-deal / $749 MXN per-month
  pricing are all real business decisions already made, but nothing in the
  code enforces them yet — there's no login, so there's no "which tier is
  this business on" to check.

## Deploying to GitHub Pages with a custom domain

1. Push this repo to GitHub (public repo, or a private repo on a paid plan —
   GitHub Pages requires one or the other).
2. In the repo's **Settings → Pages**, set the source to the `main` branch,
   root directory.
3. The `CNAME` file already in this repo tells GitHub Pages to serve
   `micampeche.app`. At your domain registrar, point:
   - An `A` record (or four, GitHub's current IPs — check
     [GitHub's Pages docs](https://docs.github.com/pages) for the current
     list) at the apex domain, **or**
   - A `CNAME` record for a subdomain (e.g. `www`) at
     `<your-github-username>.github.io`.
4. Once DNS propagates, enable **"Enforce HTTPS"** in the Pages settings.

## Local development

No build step — it's plain HTML/CSS/JS. Open `index.html` directly in a
browser, or serve the folder locally to test the service worker properly
(service workers generally require `http://localhost` or `https://`, not a
bare `file://` path):

```
python3 -m http.server 8000
# then visit http://localhost:8000
```
