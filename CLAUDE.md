# MICAMPECHE — Project Ground Truth

*Derived from Master Codex v4.0 — 30 de agosto de 2026, updated through 4 sep 2026. This version (v5.0) incorporates everything built in the chat session of 5 sep 2026: an Eventos monetization initiative (month-calendar date picker, pay-to-feature, featured/list visual split, home-page integration), a multi-business profiles initiative (up to 5 businesses per account, independent per-business Premium upgrades, an admin cancellation worklist), several real bugs found and fixed along the way (some before they ever shipped), a published-today Aviso de Privacidad / Términos y Condiciones, and a considered decision to defer real push notifications. This file supersedes any earlier assumptions from prior sessions. If this file conflicts with your memory of this project, this file wins.*

**Business:** MiCampeche · **Tagline:** "Tu ciudad, un solo lugar." · **Founder:** Glancy
**Base:** San Francisco de Campeche, Campeche, México
**Domain:** micampeche.app — GitHub Pages, repo `glancyg17/MiCampeche.app`, branch `main`. Defensive registration of micampeche.com / micampeche.com.mx recommended (redirect to the `.app`) — cheap brand protection, not yet actioned, not urgent.
**Supabase:** `fszvefihkjrqkxysencc` (us-east-1, LIVE) · **Stripe:** live account, UK-registered
**Contact:** WhatsApp +52 981 126 9854 — real number, used sparingly as a fallback only. Support email `hola@micampeche.app` is now also live and referenced in the Aviso de Privacidad / Términos.

## Mission

One daily-use place for noticias, eventos, la tienda local, avisos vecinales, reportes de infraestructura, and alertas oficiales. This is a **consolidation product, not an invention** — nothing needs to be the best source of anything, it needs to be the one place people check.

## Status: This Is Production

Real accounts, real businesses, real payments — now across **four** live Stripe Payment Link flows (Ofertas, Evento Destacado, negocio adicional setup, negocio adicional Premium upgrade), plus the original two (Ofertas' concurrent-slot precedent aside, Negocio Premium remains the one flow that's manually activated by the founder, not self-service). Mistakes affect real people, not mock data.

## Core Working Rules

1. **Always work from the actual current repo.** Never assume a prior working copy (local, from memory, or from an earlier chat session) is accurate — confirm against the real, current files before any non-trivial change. This session repeatedly found things already built outside the visible session (see "Standing Pattern" under Known Real Bugs) — audit, don't assume, in either direction (assuming something isn't built, or assuming it's finished).
2. **Verify database/RLS/schema state directly against Supabase before assuming anything.** This discipline has now caught real privilege-escalation vulnerabilities, a `SECURITY DEFINER` gap, and a `.maybeSingle()` crash waiting to happen — all *before* they reached production, this session. Working from assumption remains the single biggest historical source of wasted time on this project.
2a. **When testing destructively against live Supabase, don't trust `BEGIN`/`ROLLBACK` alone.** This session, a multi-statement adversarial test wrapped in an explicit transaction still left a real status change committed — the exact mechanism is unconfirmed (the execute-SQL tool may not preserve a single session/transaction context across an entire submitted string the way `psql` would), but the practical lesson is firm: for any test that mutates real rows, prefer disposable test data (a real insert, the real test, a real delete) with an explicit `SELECT`-verified cleanup afterward, over relying on rollback to make it safe. Caught once this session, fixed immediately, no lasting damage — but don't repeat the assumption.
3. **Every change touching `index.html`, `css/styles.css`, `js/app.js`, or `manifest.json` MUST bump `CACHE_NAME` in `sw.js` in the same commit** — and this now also explicitly applies to `js/supabase-client.js` (the repo's own `CLAUDE.md` may still list only the first four; the Master Codex is ground truth). Non-negotiable — the service worker will otherwise serve the fix to nobody. When something "already fixed" still isn't visible on a real device, check for a stale cached bundle before assuming a new bug — this happened at least twice this session and both times the underlying code was already correct.
4. **Real account actions (posting, claiming, confirming, verifying a business, creating an additional business, upgrading one to Premium) require a signed-in account whose phone is verified.** Enforced both by `is_verified_writer()` at the DB layer and by `runWriteGate` in the UI. Login is by **phone number + password**.
5. **Validate against the real system before calling anything done.** For database work: test against the live Supabase project directly, including simulating a real adversarial session, per rule 2a above. For app logic: `test-smoke.js` must pass and new work should extend it. Real touch/gesture bugs need an actual on-device check — jsdom can't exercise them.
6. **Voice/tone:** plain, warm, concrete. Spanish-first for anything user-facing. Never invent statistics or business numbers not stated by the founder.
7. **Flag before reopening a previously-killed idea** — including when a new request looks similar to a killed one but is meaningfully different, or is a deliberate, explicitly-acknowledged exception (see Killed Ideas below for two new entries this session, both explicit, deliberate choices rather than drift).
8. **Solo-founder constraint:** every solution must be executable and reviewable by one person. This is why business-premium-upgrade *cancellation* is self-service on the app side but stays a **manual** Stripe-side action for the founder (with an automatic admin reminder, not a webhook) — building real webhook infrastructure was a deliberate non-choice this session, not an oversight (see Killed Ideas).
9. **Big builds get broken into small, sequential, independently-shippable steps**, each landing and getting verified before the next starts — this is how both the Eventos monetization initiative and the multi-business profiles initiative were built this session (3 steps each), and it's the pattern to keep using for anything of similar scope.

## Hard "Never" Constraints

- **NEVER** make MiCampeche a party to someone else's transaction. Merchant-payment-facilitation was deliberately killed and stays killed. What IS live: Stripe Payment Links charging MiCampeche's *own* users for MiCampeche's *own* fees (now four such flows — see Monetization). MiCampeche never touches card data.
- **NEVER** assume mock data represents real user behaviour.
- **NEVER** reproduce copyrighted news content. Noticias is aggregator-only: thumbnail, headline, honest short paraphrase, link out. This discipline extends to Eventos/Alertas/Noticias automated ingestion alike.
- **NEVER** add a feature that increases moderation burden without discussing capacity first. (Reject-reason-required logic was deliberately loosened this session for automated content specifically — see below — precisely to *reduce* needless moderation friction, not add to it.)
- **NEVER** ship a change without validating it against the real system it touches.
- **NEVER** let a database policy or trigger grant a privilege it doesn't explicitly, narrowly intend to. Every new owner-facing policy this session (business creation, business deletion, premium-upgrade insert/delete) was checked against the self-escalation failure mode and verified live with a real adversarial session before shipping.

## Killed Ideas — Do Not Silently Re-propose

| Idea | Why killed |
|---|---|
| Hyperlocal Uber Eats / Rappi competitor | DiDi Food already active in Campeche since 2021, 200+ local restaurants, low commission — not a blue ocean |
| Standalone payments business for merchants | Clip/SumUp/Mercado Pago already solve this cheaply; founder is not a licensed financial authority in Mexico |
| Groupon-style deals platform as the whole business | Downgraded to one feature (Ofertas) sized to real traffic |
| Featured Eventos for a flat fee | *Superseded, not simply killed* — this session shipped a real "feature an event" mechanic ($99, 3-day window, capacity-capped, rotating) once the founder revisited it with a concrete monetization design. The original flat-fee framing stays killed; the rotating/capped version is what's live. |
| Automated WhatsApp/SMS verification (Twilio/Meta API) | Not yet built; interim is inline fast-approve + admin nudge. Unofficial-library route stays killed (ToS/ban risk). |
| Security questions for password reset | Weak generally, weaker in a small close-knit community |
| Phone number as entire account identity (no password) | Password remains the real, portable login credential |
| Single, dynamic-quantity Stripe subscription for multi-business Premium billing ("Premium+N" as one real subscription object) | Would need real subscription-management API calls or Stripe's Customer Portal — this app has zero backend beyond static Payment Links. Modeled instead as N independent $499/mo subscriptions, one per upgraded additional business; "Premium+N" is a computed display label (count how many businesses currently have the bump), not a literal Stripe object. |
| A 6-month minimum commitment for Premium / business-premium-upgrade subscriptions | Founder explicitly chose monthly-rolling instead — simpler, no lock-in period to build or enforce. |
| Fully automated (webhook-driven) Stripe subscription cancellation when a business or its upgrade is removed | Founder chose manual cancellation with an automatic admin reminder instead (`business_cancellation_reminders`) — matches the existing manual-management pattern already used for the flagship Negocio Premium relationship, avoids needing new backend/webhook infrastructure. |

**Noticias sourcing — resolved, not just bootstrapped.** v4.0 described Noticias automated ingestion as "not yet built," pending partnership responses from Tribuna Campeche and Central de Noticias Campeche. **This session found both pipelines already live** (`sync-noticias-tribuna`, `sync-noticias-central` Edge Functions, both ACTIVE) — another instance of the standing pattern below. Noticias is no longer manual-only.

## Architecture

**Frontend:** Plain HTML/CSS/JS, no framework, no build step. `index.html` · `css/styles.css` · `js/app.js` · `js/supabase-client.js` · `manifest.json` · `sw.js` · `.nojekyll` · `assets/icons/` · `assets/images/`

*Service worker:* unchanged mechanism (auto-updates silently, `skipWaiting()`/`clients.claim()`). Rule #3's cache-bump requirement now explicitly covers `js/supabase-client.js` too.

*Static informational screens (new this session):* `scr-privacidad` and `scr-terminos` follow the exact same pattern as the pre-existing `scr-info` ("Cómo funciona") — static content baked directly into `index.html`, reached via the generic `nav()` (which needs no registration for a new screen id), with a small cross-link between the two. Linked from the hamburger menu ("Aviso de privacidad y Términos") and from a consent line on the signup form specifically (not login).

### Home Page (Inicio) — redesigned this session

- **Hero:** now cycles its background photo with the existing time-of-day greeting (`.welcome-hero.wh-am` / `.wh-pm` / `.wh-noche`, applied by `renderWelcomeHero()`) — Buenos días uses the original `MiCampeche-Hero.jpg`; Buenas tardes/noches use `MiCampeche-Hero-2.jpg` / `-3.jpg`. **Confirm these two image files actually exist in `assets/images/`** — they were wired up in code but the files themselves were never supplied through the chat session that built this; if they're still missing, the tarde/noche hero states are silently blank.
- **Stat strip removed entirely** (Vacantes/Alertas activas/Reportes abiertos tiles, and their `openAnunciosTo`/`openReportarTo` helpers) — gone by design, not a bug.
- **Oferta del día** restyled from a small 48px-thumbnail row into a full-width, photo-forward hero-style card (`.dc-of-hero`), now sitting directly below the welcome hero (no code reorder needed once the stat strip was removed — it was already first in `#dash-body`).
- **New "Evento destacado" section** (`#dash-featured-evento`) — one currently-featured event (see Eventos monetization below), rotating hourly from whatever's active.
- **"Eventos de hoy" redesigned** — image instead of a redundant date-box (every card already shares today's date), full chronological order by time (no longer a random 2-pick sample — shows *all* of today's events), and a featured-today event sorts first regardless of its own time.

### Eventos — monetization + redesign (shipped this session, 3 steps)

**Step 1 — month-calendar date picker.** The event's own date field (`type:'monthcal'` in `POST_FORMS.eventos`) is a real month-grid with prev/next navigation, replacing the plain native `<input type="date">`. Deliberately allows **past dates** (no availability/capacity concept at all here, unlike the Ofertas/feature calendars) — the founder wanted this explicitly. Reusable component (`monthCalHtml`/`monthCalView`/`monthCalSelected`), distinct from the older Ofertas-style rolling-window "featurecal" picker described next.

**Step 2 — pay-to-feature ($99, 3-day window).** New table `eventos_featured_bookings` (event_id, start_date, end_date generated as `start_date + 2`). A `BEFORE INSERT` trigger (`check_eventos_featured_capacity`) rejects a booking if any day in its 3-day span would push concurrent active bookings past **4** — verified live with real inserts (a 5th overlapping booking correctly rejected; a non-overlapping window correctly unaffected). Featuring only reaches `eventos_featured_bookings` for an already-`published` event (never bypasses moderation) and only for the event's own submitter (RLS-checked against `eventos.submitted_by`). Self-service, same trusted pay→redirect→create pattern as Ofertas (no webhook). A dedicated `'featurecal'` field type (flat rolling window, `SLOT_WINDOW_DAYS` forward, auto-selects 3 connected days on tap, marks a start day "Ocupado" if it would breach the cap) appears on the eventos form only when "¿Quieres destacar tu evento?" is answered yes; not offered on self-edit (out of scope for now — an already-submitted event can't retroactively add featuring through the UI yet).

**Step 3 — visual split + rotation.** Of whichever bookings are *currently active* (today falls within their window — up to 4, per the trigger above), only some are actually displayed at once, rotating hourly for even exposure: **2** in the Anuncios ▸ Eventos section, **1** on Inicio (same starting index — hour mod count-of-active — so Inicio's one slot always matches the first of the Eventos section's two). Purely client-side (`activeFeaturedEventIds(count)`), nothing scheduled server-side. Featured events get the pre-existing full `.evt-card` treatment (plus a small "Destacado" badge); every other event renders in a compact list (`.evt-list-item`, small thumbnail) grouped under a date header (`.evt-group-hdr`), in chronological order.

**Eventos — other changes this session:**
- **Pasados (past events) filter** added to the date-filter chip row. `MC.fetchEventos()` widened its lower bound from "today onward" to "7 days back onward" specifically so this filter has something to show — matching the same 7-day grace window `cleanup-expired-eventos` already uses before deleting a finished event outright. Every *other* date filter (Todas las fechas / Hoy / Esta semana / Próximamente) explicitly excludes anything finished (`evtFinished()`), so the widened fetch window doesn't leak into them.
- **"Mis publicaciones" Finalizado tab** (see below) uses the identical finished-event boundary logic, independently implemented but conceptually the same rule.

### Multi-business profiles (shipped this session, 3 steps)

A profile can now own **up to 5 businesses**. The first is free and becomes `is_primary=true` automatically (`businesses.is_primary`, backfilled `true` on every pre-existing row when this shipped; the old `UNIQUE(profile_id)` constraint is gone, replaced by a partial unique index enforcing at most one primary per profile). Creating a 2nd–5th business requires the **primary** business to be Premium (gated by a `BEFORE INSERT` trigger, `enforce_additional_business_rules`, which also force-computes `is_primary` regardless of what the client sends, and bypasses both the premium-gate and the 5-cap for admin/service-role sessions) and costs **$99 MXN one-time**, self-service (pay→redirect→create, same trusted pattern as Ofertas/Eventos-featuring). An additional business starts at the 2-product cap.

**Per-business Premium upgrade — $499 MXN/month, per additional business, independent of the primary's own $749/mo relationship.** Deliberately tracked in a *separate* table, `business_premium_upgrades` (business_id unique, business_name + profile_id snapshotted server-side at insert time), rather than reusing `businesses.is_premium` directly — `prevent_self_premium_update` already (correctly) blocks any resident session from touching `is_premium` themselves, and that protection for the primary's $749 relationship stays untouched. `enforce_producto_cap` now grants the 10-product cap from **either** source (`is_premium` OR a row in this new table) — a small, surgical change, verified live (2 products → blocked → upgrade inserted → 3rd succeeds). Residents can self-service **both directions** here — start it after payment, and cancel it anytime themselves (month-to-month, no minimum term, per the founder's explicit choice — see Killed Ideas). "Premium+N," where the founder described billing conceptually, is realized as N *independent* subscriptions, not one dynamic-quantity subscription (see Killed Ideas for why).

**Admin cancellation worklist.** Deleting a business, downgrading its `is_premium`, or removing a `business_premium_upgrades` row (whichever of the three happens, whoever triggers it — resident self-service or admin) automatically writes a row to `business_cancellation_reminders` (admin-only RLS). This is a persistent "go cancel this in Stripe by hand" checklist, deliberately mirroring the Pendiente-queue pattern rather than any kind of push/email notification (no such infrastructure exists in this project) — reachable from "Tu cuenta" as "Cancelaciones pendientes," with its own badge count. **Real gotcha found and fixed live:** the reminder-on-upgrade-removal trigger initially failed for a *resident's own* self-service cancel, because writing to the admin-only reminders table was blocked by that table's own RLS when the acting session wasn't an admin — fixed by making that one trigger function `SECURITY DEFINER` (the other two reminder triggers, on `businesses` itself, only ever fire in an admin-driven context already, so they didn't need this).

**"Mis negocios" list** (new account-view screen, `openMyBusinesses()`/`renderMyBusinesses()`) replaces the old single-business assumption once an account has 2+ businesses — a single business still goes straight to its own profile unchanged. Each non-primary, published business gets an inline "Subir a Premium" / "Cancelar Premium" action depending on whether it currently has an upgrade row.

**Business picker for Tienda/Ofertas.** Submitting a producto or oferta now asks *which* business it's for (`postBusinessOptions`/`selectedPostBusinessId`) once an account has more than one eligible (published) business; with only one, behavior is unchanged. Delivery-capability and contact-phone hints on the producto form now follow whichever business is actually selected, re-applying live if the picker selection changes (`applyProductoBusinessHints`), rather than being frozen to the account's primary business as before.

**Real bug caught before shipping:** `MC.currentAccount()` and `MC.myBusiness()` both used `.maybeSingle()` filtered only by `profile_id` — which throws a real error the instant any profile has 2+ businesses. Fixed (added `.eq('is_primary',true)` to `myBusiness()`; `currentAccount()` now fetches the full array and picks the primary) *before* multi-business shipped, not after.

### Automated Content Pipelines — status update

All pipelines from v4.0 (`sync-eventos-proeventos`, `cleanup-expired-eventos`, `sync-alertas-seproci`, `sync-alertas-smapac`) remain unchanged. **Two more were found this session, already live, built outside the visible chat history** (another instance of the standing pattern below): `sync-noticias-tribuna` and `sync-noticias-central`, the exact pipelines v4.0 described as "not yet built." Both now additionally **skip inserting any new item that has no thumbnail image** — a text-only scrape never reaches Pendiente at all (a real edit deployed live this session, not yet exercised by a real cron run at time of writing).

### Pendiente — reject-reason requirement, corrected

The reason-required-before-rejecting rule is now **per-row, not per-table**: a pending item skips the "write a reason" requirement whenever it genuinely has no submitter to notify (`raw.submitted_by` null or absent), computed from the actual row rather than a hardcoded `table==='noticias'` check. This matters because `eventos` (and `noticias`) can be *either* automated or resident-submitted on a row-by-row basis, and `alertas` has no `submitted_by` column at all (always automated) — the old table-name check got eventos and alertas wrong. The admin long-press "Quitar" flow (`openAdminRemoveConfirm`) was already reason-optional for every table before this session and needed no change.

### Mis Publicaciones — status tabs + universal discard

Three tabs — **Pendiente** (includes rejected items too, not a separate 4th tab — both are "not currently live, need the submitter's attention"), **Activo**, **Finalizado** (currently only reachable by eventos, once the event's last day has passed — same boundary as Eventos' own Pasados filter). Every card, regardless of status, now has a trash-icon discard action (widened from an earlier rejected-only "Descartar" button) — backed by a widened owner-DELETE RLS policy (was rejected-only, now any status) on all seven self-editable content tables. Confirming a discard on a currently-published item warns that it's live right now.

### Empleos & Avisos — display gaps fixed

- **Empleos:** the description a resident types in the submission form was being captured and stored but never fetched or shown anywhere. Fixed: `MC.fetchEmpleos()` now includes it, and a new modal detail view (`openEmpleo(id)`, mirroring the existing Tienda product-view pattern) shows the full description, pay, company, tags, and contact options — job cards are now tappable.
- **Avisos:** never had image support at all (no `image_url` column, no form field). Added: `avisos.image_url` column, a `photo` field in the submission form, a thumbnail in the card, and prefill support in the self-edit flow.

### Rejection counting — undercounting fixed

`MC.fetchMyRejections()` used to filter out any rejected row whose `rejection_reason` was null — meaning an admin who rejected something via long-press "Quitar" *without* typing the optional message never counted toward that user's "N no aprobadas" badge, even though it was a real rejection. Fixed: the filter is gone; a null reason just means the reason line shows nothing.

### Pull-to-refresh — snap-down jump

The touchend handler used to snap the pulled screen (and the FAB riding along with it, since the FAB is a `position:fixed` child of the active `.scr`) to exactly `PULL_THRESHOLD` on release, regardless of how far past it someone had actually pulled — a visible backward jump on the very common case of overpulling. Fixed by just leaving the transform wherever the last touchmove put it through the refresh, instead of resetting it. Best-effort — flagged as needing an actual on-device confirmation, same as any touch-gesture fix; not independently re-verified this session beyond the code-level reasoning.

## Legal — Aviso de Privacidad / Términos y Condiciones (new this session)

Both are live as of this session — in-app screens (`scr-privacidad`, `scr-terminos`), a hamburger menu entry, and a consent line on the signup form specifically. **Published in a deliberately interim form**, at the founder's explicit request, so something real could go live immediately: the responsible entity is named simply as "MiCampeche" (no specific legal person/company name), the domicilio is given only as "Campeche, México" (no street address), and the ToS's governing-law section defaults to Mexican federal law and the courts of San Francisco de Campeche.

**This still needs a real lawyer's review before it can be considered properly compliant** — LFPDPPP (Mexico's federal data protection law) genuinely requires identifying the responsible party and its address, and the interim version deliberately omits both. The founder is separately organizing legal help to formalize the entity/address/jurisdiction details; until that happens, treat this as "something real is live" rather than "this is finished." Worth revisiting explicitly once that legal structure exists — the Stripe account's UK registration vs. the entirely-Mexican user base and data subjects is a real structuring question a lawyer needs to resolve, not something to guess at in code.

## Push Notifications — considered, deferred

Explored this session: technically buildable (service worker + PWA-install flow already exist; iOS needs 16.4+ *and* home-screen install, which the app's own install-gate already steers people toward; Android/Chrome works without installing). Nothing exists in the codebase for this yet — no VAPID keys, no subscription table, no send mechanism (would need a new Supabase Edge Function speaking the Web Push protocol). **Decision: not building this now** — the existing profile-icon badge (Mis publicaciones rejection count, admin Pendiente/Cancelaciones pendientes counts) covers "something needs your attention" well enough for this stage. If revisited, the two highest-value, lowest-annoyance candidates identified were: **Alertas** (civic, time-sensitive, rare enough not to feel like spam) and **personal moderation-status changes** (your submission was approved/rejected) — both ranked well above anything Ofertas/Eventos-marketing-adjacent.

## Monetization (live)

**Target:** $100,000 MXN/month (sustain 1–2 people, not venture-scale). Rule of thumb: charge businesses who already understand paying for visibility; stay free for residents.

- **Ofertas:** $99 MXN/slot via live Stripe Payment Link, paid *before* booking. 1 slot/day platform-wide, bookable up to 2 weeks ahead. Concurrent-slot cap: Negocio free = 1 held slot at a time, Premium = up to 3. **Still scoped to a resident's primary business only** — the multi-business work this session deliberately did not extend Ofertas' business-scoping to additional businesses (open question below).
- **Negocio Premium:** $749 MXN/mo live Stripe subscription, for the account's primary business. 10 products (vs 2 free), up to 3 concurrent Oferta slots (vs 1). Never self-granted — a DB trigger blocks any path but a founder action. Being Premium is also what gates creating additional businesses at all (see below).
- **Negocio adicional (new this session):** once the primary is Premium, up to 4 more businesses can be added, $99 MXN one-time each, self-service. Starts at the 2-product cap.
- **Negocio adicional Premium (new this session):** $499 MXN/month, per additional business, independently self-service to start and to cancel (month-to-month). Bumps that one business to the 10-product cap.
- **Evento Destacado (new this session):** $99 MXN one-time, self-service, a 3-day featured display window (Eventos section + a rotating Inicio slot). Capacity-capped at 4 concurrent bookings platform-wide; only 2 (Eventos)/1 (Inicio) actually shown at a time, rotating hourly among whatever's active.
- **Free forever:** Noticias, Eventos browsing, Clasificados (1 free item), Perdidos, Avisos (1/day), Reportes, Alertas, Pagar servicios shortcuts, Empleos for job-seekers.
- **Open question:** whether to charge employers for Empleos listings (unchanged from v4.0).

## Known Real Bugs — Don't Re-diagnose From Scratch

*(v4.0's entries below remain valid precedent — new entries from this session follow.)*

- **Stale JWT after anonymous→real conversion:** `updateUser()` succeeds server-side immediately but the session token still carries `is_anonymous:true` until `refreshSession()` is called explicitly.
- **Two privilege-escalation vulnerabilities, same root cause:** an "owner can update their own row" RLS policy with no column restriction let any signed-in user set protected fields via a raw API call. Fix pattern: a trigger that reverts protected fields unless the acting session is genuinely admin or is direct service-role/DB access with no JWT context. This exact pattern has now been reused deliberately at least three more times (self-edit, the additional-business creation gate, the producto cap check).
- **PL/pgSQL `raise exception` rolls back earlier writes in the same function call.**
- **pgcrypto lives in `extensions` schema, not `public`, on this project** — qualify explicitly as `extensions.crypt(...)`.
- **Ambiguous foreign key broke a PostgREST embed:** `password_reset_requests` has two FKs to `profiles` — name the relationship explicitly, `profiles!profile_id(...)`.
- **FAB used `position:absolute`** instead of `fixed`, scrolled away with content.
- **Hero photo relative path bug:** CSS lives in `css/`, root-relative path needed.
- **`.nojekyll` missing its leading dot.**
- **Samsung Internet / Chromium mobile auto-repaints in system dark mode** — fixed with `color-scheme: light`.
- **Viewport-unit drift** — fixed by pinning `html`/`body` with `position:fixed; inset:0` so only inner `.scr` containers scroll.
- **Pull-to-refresh hijacking `position:fixed` elements during horizontal scroll gestures** — fixed by comparing `dx` vs `dy` from `touchstart`. A second, related pull-to-refresh bug (the release-time snap-down jump) was found and fixed this session — see above.
- **A WordPress site's default RSS feed can be stale even when the site itself is visibly active** — always check `pubDate`/`lastBuildDate` directly before trusting a discovered feed. (This exact caution paid off again this session when confirming the Noticias sync feeds' real freshness behavior.)
- **`.maybeSingle()` filtered only by an owner column, with no other uniqueness guarantee, is a latent crash** — found in `MC.currentAccount()`/`MC.myBusiness()` before multi-business profiles shipped (dropping `businesses`' unique-per-profile constraint would have made both throw for any account with 2+ businesses). Fixed before it ever hit production. **Audit any other `.maybeSingle()` call whose uniqueness assumption might no longer hold as the schema evolves.**
- **A trigger whose side effect needs to write to a table the *acting session* doesn't have RLS access to needs `SECURITY DEFINER`.** Found live: a resident's self-service cancellation of their own business-premium-upgrade correctly deleted their own row, but the accompanying reminder-insert (into the admin-only `business_cancellation_reminders`) was silently blocked by that table's own RLS, because the trigger ran as the resident's session, not the table owner's. Fixed by marking that one trigger function `SECURITY DEFINER` with an explicit `search_path`. The other two reminder triggers (on `businesses` itself) didn't need this, since they only ever fire in an admin-driven context already.
- **`BEGIN`/`ROLLBACK` via the chat's own SQL execution tool is not reliably safe for adversarial testing** — see Core Working Rule 2a.
- **Standing pattern, reconfirmed twice this session:** features have more than once been found already partially (or fully) built from outside the visible session — this time, the entire Noticias automated-sync pipeline (both sources), which v4.0 explicitly described as "not yet built." Audit what actually exists before assuming either that nothing's there, or that what's there is finished — in *both* directions.
- **A generic admin long-press "Editar" action, described in an earlier codex snapshot as shipped, was checked for directly this session and does not exist in the code** — only "Quitar" (reject) is wired into the admin long-press modal. Not built this session either (out of scope for what was being worked on); flagged here so it isn't assumed done again.

## Open Questions (not yet decided — flag before deciding unilaterally)

- Outreach plan for the first 10–20 citizen journalists (unchanged from v4.0) — though Noticias itself is no longer waiting on this the way v4.0 assumed, since the Tribuna/Central pipelines are already live.
- Does Perdidos need a verification step for high-stakes posts (missing person vs. missing cat)? (unchanged)
- Should Empleos charge employers for listings? (unchanged)
- **Is client-side Stripe payment-redirect trust still right, now that FOUR flows depend on it** (Ofertas, Evento Destacado, negocio adicional setup, negocio adicional Premium upgrade) **— two of which are recurring subscriptions, not one-time fees?** This was an open question in v4.0 with one flow riding on it; the surface area and the stakes (real recurring revenue, not just one-time small amounts) have both grown since.
- Should Ofertas' business-scoping ever extend to additional (non-primary) businesses, or stay primary-only permanently? Deliberately left untouched this session — Producto submissions got a business-picker, Oferta submissions did not get the same treatment beyond accepting an explicit business id if passed.
- Is the Reportes auto-resolve threshold (currently 2 votes) right, or does it need tuning once there's real usage? (unchanged)
- Should Alertas' relevance-filter keyword lists be tightened as real volume accumulates? (unchanged)
- Is a CFE (power) alert source worth building eventually, given none exists today? (unchanged)
- **Real push notifications** — explored, not built; see the dedicated section above for the considered candidates and technical shape if revisited.
- **Aviso de Privacidad / Términos y Condiciones** — published in interim form; needs a real lawyer's review to finalize the legal entity, registered address, and governing jurisdiction (the UK-registered Stripe account vs. an entirely-Mexican user/data base is the specific structuring question to resolve).
- **JAPAY→SMAPAC correction** — still not actioned (unchanged from v4.0, still bundled with the pending Pagar Servicios revamp).

## Immediate Priorities

**Toward real users & revenue:**
- Confirm the two missing hero photos (`MiCampeche-Hero-2.jpg`, `MiCampeche-Hero-3.jpg`) actually exist in `assets/images/` — wired up in code this session but never supplied.
- Get a lawyer's review of the Aviso de Privacidad / Términos y Condiciones and finalize the legal entity/address/jurisdiction details currently left generic.
- First real in-person conversations for the first Ofertas cohort (unchanged from v4.0).
- Automate WhatsApp verification once signup volume justifies the setup (unchanged).
- Watch real usage of the four self-service payment flows added this session (Evento Destacado, negocio adicional setup, negocio adicional Premium) for any sign the client-trusted-redirect model needs to become webhook-backed.

**Compounding infrastructure:**
- Execute the Pagar Servicios revamp (still flagged, still holding mock info) — fold in the JAPAY→SMAPAC correction while doing it.
- Consider whether a CFE (power) alert source is worth pursuing (unchanged).
- Defensive domain registration (micampeche.com / .com.mx) — cheap, still pending action.
- Revisit Empleos employer monetization once there's usage data (unchanged).
- If/when push notifications become worth building: start with Alertas and personal moderation-status changes, per the dedicated section above.
