# MICAMPECHE — Project Ground Truth

*Derived from Master Codex v2.0 — 30 de agosto de 2026. Working updates layered on since (latest: 31 ago 2026 — phone-number login, verification-as-write-gate, live weather). This file supersedes any earlier assumptions from prior sessions. If this file conflicts with your memory of this project, this file wins.*

**Business:** MiCampeche · **Tagline:** "Tu ciudad, un solo lugar." · **Founder:** Glancy
**Base:** San Francisco de Campeche, Campeche, México
**Domain:** micampeche.app — GitHub Pages, repo `glancyg17/MiCampeche.app`, branch `main`
**Supabase:** `fszvefihkjrqkxysencc` (us-east-1, LIVE) · **Stripe:** live account, UK-registered
**Contact:** WhatsApp +52 981 126 9854 — real number, used sparingly as a fallback only, not the default path for anything new.

## Mission

One daily-use place for noticias, eventos, la tienda local, avisos vecinales, reportes de infraestructura, and alertas oficiales. This is a **consolidation product, not an invention** — nothing needs to be the best source of anything, it needs to be the one place people check.

## Status: This Is Production

Real accounts, real businesses, real payments. Mistakes affect real people, not mock data. As of 31 ago 2026 no system is mock — weather is now live (Open-Meteo).

## Core Working Rules

1. **Always work from the actual current repo.** Never assume a prior working copy (local or from memory) is accurate — confirm against the real, current files before any non-trivial change.
2. **Verify database/RLS/schema state directly against Supabase before assuming anything.** This discipline has caught two real privilege-escalation vulnerabilities and multiple silent bugs (see Lessons Learned). Working from assumption is the single biggest historical source of wasted time on this project.
3. **Every change touching `index.html`, `css/styles.css`, `js/app.js`, or `manifest.json` MUST bump `CACHE_NAME` in `sw.js` in the same commit.** Non-negotiable — the service worker will otherwise serve the fix to nobody.
4. **Real account actions (posting, claiming, confirming, verifying a business) require a signed-in account whose phone is verified.** *Changed 31 ago 2026:* WhatsApp verification used to be a badge only; it is now a hard write-gate. An account with `phone_verification_status` of `pending` or `rejected` can browse but cannot write anything — enforced in the DB by `is_verified_writer()` in every user-facing INSERT policy, and mirrored in the UI (`runWriteGate`). Login is now by **phone number + password** (prefix defaults to +52); Supabase Auth is still email+password underneath and the `email_for_phone` RPC resolves the typed phone to the account email at sign-in. Email is still collected at signup. The password is still the real credential — "phone as entire identity, no password" stays killed.
5. **Validate against the real system before calling anything done.** A syntax check is not validation. For database work: test against the live Supabase project directly. For app logic: the real functional test suite (`test-smoke.js`, ~195 tests as of 31 ago 2026) must pass, and new work should extend it, not just avoid breaking it.
6. **Voice/tone:** plain, warm, concrete. Spanish-first for anything user-facing. Never invent statistics or business numbers not stated by the founder.
7. **Flag before reopening a previously-killed idea** (see "Killed Ideas" below) — including when a new request looks similar to a killed one but is meaningfully different. Say so explicitly rather than silently deciding either way.
8. **Solo-founder constraint:** every solution must be executable and reviewable by one person. The moderation burden is real — the unified "Pendiente" queue exists to keep it manageable. Don't add new review categories without weighing that cost.

## Hard "Never" Constraints

- **NEVER** make MiCampeche a party to someone else's transaction. Merchant-payment-facilitation (accepting money on behalf of businesses from their customers) was deliberately killed and stays killed. What IS live: Stripe Payment Links charging MiCampeche's *own* users for MiCampeche's *own* fees (the $99 MXN Oferta slot, $749 MXN/mo Premium). MiCampeche never touches card data. Do not extend this exception further without explicit discussion.
- **NEVER** assume mock data represents real user behaviour.
- **NEVER** reproduce copyrighted news content. Noticias is aggregator-only: thumbnail, headline, honest short paraphrase, link out. No scraping, no copied wording.
- **NEVER** add a feature that increases moderation burden without discussing capacity first.
- **NEVER** ship a change without validating it against the real system it touches.
- **NEVER** let a database policy or trigger grant a privilege it doesn't explicitly, narrowly intend to. Any new "owner can update their own X" RLS policy must be checked against the self-escalation failure mode described in Lessons Learned before shipping.

## Killed Ideas — Do Not Silently Re-propose

| Idea | Why killed |
|---|---|
| Hyperlocal Uber Eats / Rappi competitor | DiDi Food already active in Campeche since 2021, 200+ local restaurants, low commission — not a blue ocean |
| Standalone payments business for merchants | Clip/SumUp/Mercado Pago already solve this cheaply; founder is not a licensed financial authority in Mexico; no real friction being solved |
| Groupon-style deals platform as the whole business | Downgraded to one feature (Ofertas) sized to real traffic, not launched as a standalone company |
| Featured Eventos for a flat fee | Founder chose to keep Eventos fully free and visibility-fair instead of adding a second paid product |
| Automated WhatsApp/SMS verification (Twilio/Meta API) | Originally killed for per-message cost + personal-touch preference. *Re-examined 31 ago 2026:* both premises weakened — Meta's WhatsApp Cloud API makes inbound "service" conversations free (a webhook delivers the sender's number), and verification is now a hard blocker on every signup, not a nicety. Still **not built**: it needs a dedicated number (can't double as a normal WhatsApp), a Meta Business account, and a Supabase Edge Function webhook. Interim: inline fast-approve in the Pendiente list + an admin app-open nudge. The unofficial-library route (`whatsapp-web.js` etc.) stays killed — ToS violation, ban risk, always-on server. |
| Security questions for password reset | Weak generally, weaker in a small close-knit community where answers may be known to neighbors/family |
| Phone number as entire account identity (no password) | Password remains the real, portable login credential; phone is a trust/uniqueness signal layered on top, not a replacement |

## Architecture

**Frontend:** Plain HTML/CSS/JS, no framework, no build step (deliberately simple). `index.html` (markup only) · `css/styles.css` · `js/app.js` · `manifest.json` · `sw.js` · `.nojekyll` · `assets/icons/` · `assets/images/`

*Service worker (changed 31 ago 2026):* now auto-updates silently — the new worker calls `skipWaiting()`/`clients.claim()` itself and the page reloads onto it at the next safe idle moment (backgrounded, or no modal/menu/input active). The old "tap to update" banner and its CSS/handlers were removed. Rule #3 (bump `CACHE_NAME`) still stands.

*Mobile install gate (added 31 ago 2026):* mobile visitors still in a browser tab get a full-screen prompt to install the PWA (Android one-tap via `beforeinstallprompt`; iOS an Add-to-Home-Screen guide). Not a hard wall — a small "Seguir en el navegador" link passes through, held for the session. Skipped when already standalone. Founder/dev bypass: `localStorage mc_skip_install_gate=1`.

**Backend:** Supabase — Auth is email+password under the hood, but **users log in with phone number + password** (`email_for_phone` RPC resolves phone→email at sign-in; email still collected at signup). Phone is database-guaranteed unique once verified. WhatsApp verification is a **hard write-gate**: `is_verified_writer()` (`not banned and phone_verification_status = 'verified'`) is in every user-facing INSERT policy across all content tables, `businesses`, `ofertas_bookings`, `ofertas_redemptions`, and `reportes_confirmations`. Postgres with RLS on every table (no exceptions), Storage (public "uploads" bucket, folder-scoped per uploader, 5MB limit, JPEG/PNG/WebP only), pg_cron daily job removing anonymous sessions >14 days old that never converted.

**Payments:** Stripe live, UK-country account (matches founder's real banking; checkout still forced MXN/Spanish via locale parameter). Two live Payment Links: $99 MXN Oferta slot (one-time) and $749 MXN/mo Premium subscription. MiCampeche never receives or stores card data. Payment verification is currently a client-side redirect signal, not webhook-verified — worst case is a free slot, and every post still goes through admin review. A Stripe webhook is the documented upgrade path if abuse becomes real.

**Testing:** `test-smoke.js` (Node, jsdom, canvas) — real functional suite against the actual app.js/supabase-client.js source and a faithful fake Supabase client. Complement with direct testing against the live Supabase database for anything RLS/trigger/uniqueness-related — some failure modes (e.g. ambiguous foreign keys breaking PostgREST embeds) are invisible to raw SQL or a JS-only fake.

### Four-Tab Structure
- **Inicio** — hero + stat strip · Oferta del día · Noticias de hoy · Eventos de hoy (2 random, re-roll every 5 min)
- **Tienda** — Ofertas carousel above a toggle · Mercado ⇆ Clasificados. *Since 31 ago 2026* listings also carry fulfillment (entrega/recoger/ambos), item condition, availability (ahora/pedido), an exact-typed `price_text`, and per-listing `contact_methods` (whatsapp/llamada/sms). Business profiles carry `payment_methods`, `delivers` + `delivery_info`, `pickup_address`. Buyer↔seller contact is a **direct WhatsApp/call/SMS handoff** from a listing detail view — no in-app chat (deliberate; MiCampeche stays out of the transaction).
- **Anuncios** — Eventos ⇆ Perdidos ⇆ Empleos
- **Vecinos** — Avisos ⇆ Reportes ⇆ Alertas (+ Pagar servicios shortcuts)

Noticias, "Cómo funciona", "Pagar servicios" reachable via Inicio "Ver todo" or hamburger menu, not bottom nav.

## Monetization (live)

**Target:** $100,000 MXN/month (sustain 1–2 people, not venture-scale). Rule of thumb: charge businesses who already understand paying for visibility; stay free for residents.

- **Ofertas:** $99 MXN/slot via live Stripe Payment Link, paid *before* booking (prevents unpaid squatting on the calendar). 1 slot/day platform-wide, bookable up to 2 weeks ahead. Concurrent-slot cap (not monthly): Negocio free = 1 held slot at a time, Premium = up to 3. Slots free up automatically as dates pass.
- **Negocio Premium:** $749 MXN/mo live Stripe subscription. 10 products (vs 2 free), up to 3 concurrent Oferta slots (vs 1). Premium is never self-granted client-side — always a founder action, enforced by a DB trigger that blocks any other path, including the account's own owner. Admin accounts always have real Premium rights and never see the upgrade prompt.
- **Free forever:** Noticias, Eventos browsing, Clasificados (1 free item), Perdidos, Avisos (1/day), Reportes, Alertas, Pagar servicios shortcuts, Empleos for job-seekers.
- **Open question:** whether to charge employers for Empleos listings — still undecided.

## Known Real Bugs — Don't Re-diagnose From Scratch

- **Stale JWT after anonymous→real conversion:** `updateUser()` succeeds server-side immediately but the session token still carries `is_anonymous:true` until `refreshSession()` is called explicitly. Broke business verification right after signup, and silently caused signup's second write (name/phone) to fail with zero error handling. Fix: explicit `refreshSession()` + retry against a freshly-settled session + real error surfacing.
- **Two privilege-escalation vulnerabilities, same root cause:** an "owner can update their own row" RLS policy with no column restriction let any signed-in user set protected fields via a raw API call. Found in `businesses.status`/`is_premium` (self-approve/self-grant Premium) and `profiles.is_admin`/`banned` (self-grant admin, self-unban). Fix pattern: a trigger that reverts protected fields unless the acting session is genuinely admin or is direct service-role/DB access with no JWT context. Check any future "owner can update their own X" policy against this exact failure mode.
- **PL/pgSQL `raise exception` rolls back earlier writes in the same function call:** an attempt-count lockout counter for password-reset was silently non-functional because the increment got rolled back by a later exception. Fix: return status strings instead of raising, so partial bookkeeping commits normally.
- **pgcrypto lives in `extensions` schema, not `public`, on this project:** a locked-down `search_path=''` on a SECURITY DEFINER function meant `crypt()`/`gen_salt()` weren't found unqualified. Fix: qualify explicitly as `extensions.crypt(...)`.
- **Ambiguous foreign key broke a PostgREST embed:** `password_reset_requests` has two FKs to `profiles` (`profile_id`, `approved_by`) — a plain `profiles(...)` embed is ambiguous and fails. Invisible to raw SQL testing. Fix: name the relationship explicitly, `profiles!profile_id(...)`.
- **FAB used `position:absolute`** instead of `fixed`, scrolled away with content; also needed re-offsetting above the bottom nav after fixing.
- **Hero photo relative path bug:** CSS lives in `css/`, so a relative asset path resolved wrong; fixed with a root-relative path (leading `/`).
- **`.nojekyll` missing its leading dot** for a period — GitHub Pages never recognized it.
- **Samsung Internet / Chromium mobile auto-repaints in system dark mode** — fixed with explicit `color-scheme: light`.
- **Viewport-unit drift (100svh vs real dynamic viewport)** let the whole app frame drift upward during scroll gestures — fixed by pinning `html`/`body` with `position:fixed; inset:0` so only inner `.scr` containers scroll.
- **Standing pattern:** features have more than once been found already partially built from outside the visible session — sometimes complete, sometimes with real bugs (a function called but never defined, a variable referenced but never declared). Audit what actually exists before assuming either that nothing's there, or that what's there is finished.
- **iOS Safari paints a native background behind a bare `<button>`** even with `background:none` — `-webkit-appearance:none` didn't reliably kill it either. This codebase already uses `<div role="button" onclick>` for most tappable chrome (`.tb-icon`, `.prod-card`, `.seg-btn`); match that rather than fighting button styling.
- **`email_for_phone` RPC is a deliberate, accepted disclosure:** it turns a known phone number into that account's email. Fine here because `profiles` is already world-readable (phone/name/verification status) and email is a low-value identifier in this app. The zero-disclosure alternative is a server-side (Edge Function) sign-in — heavier, not worth it yet.
- **`profiles` self-update trigger (`enforce_profile_self_update_limits`)** already locks `is_admin`/`banned` and — key for the verification gate — reverts `phone_verification_status` on any non-phone self-update, and forces it back to `'pending'` whenever the phone itself changes. So editing your number re-triggers verification automatically; nothing else needs to enforce that.

## Open Questions (not yet decided — flag before deciding unilaterally)

- Outreach plan for the first 10–20 citizen journalists — nothing tested.
- Does Perdidos need a verification step for high-stakes posts (missing person vs. missing cat)?
- Should Empleos charge employers for listings?
- Is client-side Stripe payment-redirect trust still right once there's real transaction volume, or is it time for a webhook?
- No sponsored/featured placement model for Noticias, Clasificados, or Perdidos.
- No concrete numeric target yet for "how many businesses/residents before this is working."
- Should MiCampeche own the buyer↔seller relationship in Tienda (in-app chat) instead of the current direct WhatsApp/call/SMS handoff? Chat would enable dispute mediation and future monetization but adds a moderation surface and a notification-infra dependency.
- The verification write-gate (added 31 ago 2026) raised the solo-founder load — every new signup needs manual approval before that person can act. Watch whether that becomes a bottleneck; the documented next step is automating verification via Meta's WhatsApp Cloud API.

## Immediate Priorities

**Toward real users & revenue:**
- Automate WhatsApp verification (Meta WhatsApp Cloud API webhook → Supabase Edge Function → match sender number → auto-verify). Needs a dedicated number + Meta Business account. Now that verification gates every write, this is the friction point most worth removing once signup volume justifies the setup.
- First real in-person conversations for the first Ofertas cohort.
- Concrete outreach plan for the first citizen-journalist cohort.
- Revisit Stripe webhook need once there's real transaction volume.
- SMTP (e.g. Resend) is now lower priority — users log in and reset by phone/WhatsApp, so email confirmation and the dormant email-link reset flow matter less. Still nice-to-have for email as a recovery channel.

**Compounding infrastructure:**
- ~~Wire a real weather data source~~ — **done 31 ago 2026** (Open-Meteo: current + 12h hourly strip + hi/lo; "Ver pronóstico completo" links Conagua).
- Consider extending the admin-only notification badge to regular accounts once there's real usage pattern to justify it.
- Fuller "my submissions" history view for regular users (rejections already surface; no complete history yet).
- Revisit Empleos employer monetization once there's usage data.
