# MICAMPECHE — Project Ground Truth

*Derived from Master Codex v6.0 — 6 sep 2026. This version (v7.0) incorporates everything built and decided in the chat session of 7 sep 2026: a burger-menu flattening (down to Mi cuenta / Preferencias / Noticias / Transporte / Contacto / Aviso de privacidad y Términos — Comercio/Anuncios/Vecinos dropped since they duplicate the bottom nav, and "Cómo funciona" retired as a standalone page and reborn as a first-open tip-gate hint card), an account-menu consolidation (mandadito registration moved off the account menu onto the Mandaditos tab as a persistent, status-aware CTA; the standalone "Ofertas activas" row folded into the business-profile screen — internally titled "Mi negocio" — alongside two new sections for that business's own Tienda products and the account's Empleos posts), a form-field pass across Producto/Clasificado/Oferta (a new auto-"$" money field type, an image-guide note plus a required photo on Ofertas, and expanded category lists across five forms), and a multi-image upload feature (up to 3 photos) for Productos and Clasificados backed by a real Supabase migration. Also fixed in passing: Clasificados listings no longer show the poster's personal name (privacy), the Empleos "Negocio (opcional)" placeholder got a clearer example, and the Comercio "Oferta del día" card now matches the Home version's hero-banner shape. All of the above is confirmed live against the real repo as of this writing (`micampeche-shell-v97`) — verified by cloning the actual GitHub repo directly (not the zip this session started from, which would have gone stale the moment the first commit landed) and grepping for the expected code in each of the four commits, then running the real test suite (`npm test` → ALL PASSED). This file supersedes any earlier assumptions from prior sessions. If this file conflicts with your memory of this project, this file wins.*

**Business:** MiCampeche · **Tagline:** "Tu ciudad, un solo lugar." · **Founder:** Glancy
**Base:** San Francisco de Campeche, Campeche, México
**Domain:** micampeche.app — GitHub Pages, repo `glancyg17/MiCampeche.app`, branch `main`. Defensive registration of micampeche.com / micampeche.com.mx recommended (redirect to the `.app`) — cheap brand protection, not yet actioned, not urgent.
**Supabase:** `fszvefihkjrqkxysencc` (us-east-1, LIVE) · **Stripe:** live account (`acct_1U9Vf8L2qDEinATY`), UK-registered
**Contact:** WhatsApp +52 981 126 9854 — real number, used sparingly as a fallback only. Support email `hola@micampeche.app` is also live and referenced in the Aviso de Privacidad / Términos.

## Mission

One daily-use place for noticias, eventos, la tienda local, avisos vecinales, reportes de infraestructura, alertas oficiales, and dónde encontrar un mandadito de confianza. This is a **consolidation product, not an invention** — nothing needs to be the best source of anything, it needs to be the one place people check.

## Status: This Is Production

Real accounts, real businesses, real payments — **five** self-service Stripe Payment Link flows (Ofertas, Evento Destacado, negocio adicional setup, negocio adicional Premium upgrade, Mandadito boost), plus Negocio Premium, which remains the one flow that's manually activated by the founder, not self-service, and deliberately stays that way even for admins (see Admin Payment Bypass below). Mistakes affect real people, not mock data. No new monetization shipped this session — the work here was UI/UX and data-model polish (menus, forms, images), not pricing.

## Core Working Rules

1. **Always work from the actual current repo.** Never assume a prior working copy (local, from memory, or from an earlier chat session) is accurate — confirm against the real, current files before any non-trivial change.
1a. **(New this session) An uploaded repo zip is only a starting point, not a source of truth once any changes are expected to have landed.** This session's four passes were shipped as sequential Claude Code prompts chat has no visibility into once handed off — chat cannot see whether or when they were actually run. Before writing anything (like this file) that claims to reflect current state, verify the *real, live* repo directly — `git clone` from GitHub, not the original upload — and grep for the expected code in each commit. Confirmed working this session: all four passes landed exactly as specified, in order, and `npm test` passed clean against the final state.
2. **Verify database/RLS/schema state directly against Supabase before assuming anything.** Reused again this session for the multi-image migration: row counts on `productos`/`clasificados` were checked directly (exactly one real row each) before backfilling, and the new `image_urls` cap was enforced with a DB-level CHECK constraint, not just client-side JS.
2a. **When testing destructively against live Supabase, don't trust `BEGIN`/`ROLLBACK` alone** — disposable test rows, a real test, an explicit `SELECT`-verified cleanup. Not needed this session (the multi-image migration was additive/backfill-only, not destructive), but unchanged as standing practice.
3. **Every change touching `index.html`, `css/styles.css`, `js/app.js`, `js/supabase-client.js`, or `manifest.json` MUST bump `CACHE_NAME` in `sw.js` in the same commit.** Non-negotiable. `CACHE_NAME` moved from `v93` to `v97` over the course of this session — one bump per shipped pass, four passes. Treat whatever the real current value is as the only trustworthy number, never a number quoted in chat history.
4. **Real account actions require a signed-in account whose phone is verified.** Unchanged — enforced both by `is_verified_writer()` at the DB layer and `runWriteGate` in the UI.
5. **Validate against the real system before calling anything done.** Reinforced hard at the very end of this session, same as the session before it — rather than trusting the conversation record, chat re-cloned the real repo, grepped for every expected marker across all four passes, and ran the actual test suite before writing this file. That's the standard to hold every time.
6. **Voice/tone:** plain, warm, concrete. Spanish-first for anything user-facing. Never invent statistics or business numbers not stated by the founder.
7. **Flag before reopening a previously-killed idea** — including when a new request looks similar to a killed one but is meaningfully different. Also applies to recently-made structural decisions, not just killed ideas: this session's burger-menu flattening explicitly reversed the two-collapsible-section split built just one session earlier, and was flagged as such before being built (see Burger Menu below) — the founder confirmed it was the right call once the item count dropped low enough that the sections no longer earned their keep.
8. **Solo-founder constraint:** every solution must be executable and reviewable by one person.
9. **Big builds get broken into small, sequential, independently-shippable steps.** This session's four passes (menus/quick-fixes → account-menu consolidation → form-field polish → multi-image upload) are the newest example, each its own self-contained Claude Code prompt, run and verified in order.
10. **Chat delivers repo-file changes as a single, self-contained Claude Code prompt — never as inline edits chat applies itself.** Chat has no push access; Claude Code does. Chat's job on any repo-touching request is to read the real repo for context, then package a complete, precise prompt (exact diffs where the surrounding code is known, clear search-and-locate instructions with strong rationale where it isn't) including the CACHE_NAME bump reminder, a commit message, and a push+report-back instruction. Followed exactly across all four passes this session, plus this file's own update to CLAUDE.md. **Exception:** Supabase schema/RLS/Edge-Function work and live Stripe account changes are live infrastructure chat has real, direct tool access to — chat keeps doing those directly, with the founder's explicit real-time permission for anything financial, and does not route them through Claude Code. Used this way this session for the `image_urls` migration.
11. **When a proposed feature resembles gig-economy work-matching, check Mexico's digital-platform labor law before designing anything.** Not triggered this session (no new gig/courier-shaped feature proposed) — standing rule, unchanged, see prior versions for the full labor-law finding.

## Hard "Never" Constraints

*(Unchanged this session — no boundary-testing or new killed proposals came up, just execution of already-agreed-upon polish work. Full list carried forward as-is from v6.0:)*

- **NEVER** make MiCampeche a party to someone else's transaction. Merchant-payment-facilitation was deliberately killed and stays killed. What IS live: Stripe Payment Links charging MiCampeche's *own* users for MiCampeche's *own* fees (five such flows — see Monetization). MiCampeche never touches card data. **No cut, no deposit, no percentage, ever** — the Ofertas model (business self-confirms a sale after being paid directly, in person) and the Mandaditos model (WhatsApp-connect only) are both deliberately, fully outside this line.
- **NEVER** build in-app task-matching, acceptance, or completion-status tracking for gig/courier work. A directory — browse a profile, contact directly, deal and payment entirely outside the app — is fine; anything that has the app itself post a task, let a worker accept it, or track whether it's "in progress" or "done" is not, regardless of how small or informal it feels.
- **NEVER** build a public rating/review system for individuals (as opposed to businesses or content). Private-only feedback (a report that only the founder ever sees) is the correct shape instead — see Mandaditos.
- **NEVER** assume mock data represents real user behaviour.
- **NEVER** reproduce copyrighted news content. Noticias is aggregator-only: thumbnail, headline, honest short paraphrase, link out.
- **NEVER** add a feature that increases moderation burden without discussing capacity first.
- **NEVER** ship a change without validating it against the real system it touches.
- **NEVER** let a database policy or trigger grant a privilege it doesn't explicitly, narrowly intend to. The multi-image cap this session followed the same discipline: a DB-level CHECK constraint (`array_length(image_urls,1) <= 3`), not a trust-the-client-only limit.
- **NEVER** hardcode a specific route, schedule, or fare for Ko'ox (the city bus system) as static in-app content.

## Killed Ideas — Do Not Silently Re-propose

*(Unchanged this session — carried forward as-is from v6.0. No new proposals were floated and rejected; this was an execution session, not a design-debate one.)*

| Idea | Why killed |
|---|---|
| Hyperlocal Uber Eats / Rappi competitor | DiDi Food already active in Campeche since 2021, 200+ local restaurants, low commission — not a blue ocean |
| Standalone payments business for merchants | Clip/SumUp/Mercado Pago already solve this cheaply; founder is not a licensed financial authority in Mexico |
| Groupon-style deals platform as the whole business | Downgraded to one feature (Ofertas) sized to real traffic |
| Featured Eventos for a flat fee | *Superseded, not simply killed* — a real "feature an event" mechanic ($99, 3-day window, capacity-capped, rotating) shipped once the founder revisited it with a concrete design. |
| Automated WhatsApp/SMS verification (Twilio/Meta API) | Not yet built; interim is inline fast-approve + admin nudge. Unofficial-library route stays killed (ToS/ban risk). |
| Security questions for password reset | Weak generally, weaker in a small close-knit community |
| Phone number as entire account identity (no password) | Password remains the real, portable login credential |
| Single, dynamic-quantity Stripe subscription for multi-business Premium billing | Modeled instead as N independent $499/mo subscriptions; "Premium+N" is a computed display label, not a literal Stripe object. |
| A 6-month minimum commitment for Premium / business-premium-upgrade subscriptions | Founder explicitly chose monthly-rolling instead. |
| Fully automated (webhook-driven) Stripe subscription cancellation | Founder chose manual cancellation with an automatic admin reminder instead. |
| Ofertas customer-side claim/reservation with a MiCampeche-issued redemption code | *Superseded, not simply killed* — built, tested, then replaced by the business-self-confirms-sale model once the founder identified the real no-show problem. `ofertas_redemptions` and its supporting RPC were dropped from the database once the replacement shipped. |
| A MiCampeche-collected deposit or percentage fee on Ofertas purchases, to fight no-shows | Explored in real depth before the founder chose the simpler, safer business-self-confirms route instead. Revisit only if real no-show data ever shows the WhatsApp-connect model isn't enough — see Open Questions. |
| In-app job-matching / task acceptance / status tracking for Mandaditos | Mexico's digital-platform labor-law reform makes this a real, current legal-employer risk. Mandaditos is a directory, full stop. |
| Public ratings for Mandaditos | Unverifiable against a real transaction, and edges toward the same labor-law fact pattern. Replaced with a private-only report/nudge channel the mandadito never sees. |
| Building MiCampeche's own maintained Ko'ox route/schedule database | The system has changed routes and transfer rules repeatedly since launch; two independent apps already track it live well. Not worth the constant re-verification burden. |

## Architecture

**Frontend:** Plain HTML/CSS/JS, no framework, no build step. `index.html` · `css/styles.css` · `js/app.js` · `js/supabase-client.js` · `manifest.json` · `sw.js` · `.nojekyll` · `assets/icons/` · `assets/images/`

*Service worker:* unchanged mechanism (auto-updates silently, `skipWaiting()`/`clients.claim()`). `swMaybeReload()` sets a `mc_just_updated` sessionStorage flag right before the actual reload, read once by `init()` afterward — see Install Nudge below.

### Pendiente — three tabs

Unchanged this session. The admin "Pendiente" modal has three tabs — **Aprobaciones** (original moderation queue), **Cancelaciones** (business-cancellation worklist), **Reportes** (private Mandaditos feedback inbox) — same `PENDING_TABS` array, same `chip`-button tab bar, same per-tab fetch-on-open pattern.

### Ofertas — redemption model + this session's form/display polish

**Redemption model (unchanged this session):** a customer taps "Contactar" on an Oferta, which opens WhatsApp straight to the business (prefilled message, no code, no app-side state at all). The business handles payment and pickup entirely outside the app, then confirms the sale themselves from their "Ofertas activas" section (now inside Mi negocio — see Account Menu below) behind a deliberate two-step confirmation. `ofertas.quantity_sold` is the only source of truth for "N de M vendidos" — there is no customer-side claim state of any kind. `ofertas.seller_phone` is snapshotted from the business at submission time, not live-joined.

**This session's additions:**
- `priceWas`/`priceNow` now use the new "money" field type (see Form Fields below) — the person types just a number, "$" is added automatically.
- The image-upload field gained a guide note: *"Usa buena luz y muestra bien lo que ofreces — no podrás editar esta oferta ni pedir un reembolso después de enviarla, así que revisa todo con cuidado antes de continuar."* Directly reinforces the existing no-edit reality of an Oferta (there is still no edit path — that stays a deliberate feature, not a gap).
- The photo is now **required** at submit (`if(kind==='oferta'&&!data.photo)` blocks submission with a toast) — Oferta is the one place the old single-image `imgupload` type gained a required check; Producto/Clasificado's required-photo logic lives in their new multi-image field instead (see below), so it was never built twice.
- In Comercio, the first/featured card in the Ofertas list now renders as a full-width hero banner (`.of-featured`, image + dark-gradient text overlay) matching Home's "Oferta del día" card shape, instead of the small 64×64 square-thumbnail layout every other Ofertas card still uses. Purely cosmetic, no data model change.

### Mandaditos — three shipped steps, registration entry point moved this session

Core feature unchanged: a directory of individual courier profiles, deliberately not a marketplace or job board (see Hard "Never" Constraints). Registration → private-only feedback → paid boost, same three steps as before, same tables, same WhatsApp-only identity verification.

**Changed this session:** the "Quiero ser mandadito" entry was removed from the account menu entirely and replaced by a persistent, status-aware CTA card at the top of the Mandaditos tab itself (`mandaditos-cta` div, filled by `renderMandaditoTabCta()`/`refreshMandaditoTabCta()`, refreshed via `MC.myMandadito()` every time the tab is opened). Unlike the once-per-device tip-gate (`SECTION_TIPS.mandaditos`, unchanged, still fires the first time), this card stays visible on every visit until the account's mandadito status is `'published'` — so someone who dismisses the tip-gate on their first visit can still find their way to registering later without having to know it's buried in the account menu. The card's copy mirrors what the old account-menu row used to say (pending/rejected/not-yet-registered states each get their own sub-text), so no information was lost in the move — only its location changed.

### Onboarding & Preferencias — "Cómo funciona" retired as a page, reborn as a hint card this session

The blocking `#tip-gate`/`SECTION_TIPS` overlay mechanism (once per device per section, toggled by the existing "Consejos al entrar a una sección" preference) is unchanged in how it works. **New this session:** a `SECTION_TIPS.inicio` entry, fired once near the end of `init()` (guarded so it never stacks on top of the full-screen install-gate, mirroring the same guard `maybeShowMandaditoReviewNudge` already used) — this fully replaces the standalone "Cómo funciona" screen, whose four separate content blocks were condensed into one short lead paragraph: *"Noticias, ofertas, la tienda local, avisos y reportes de tu comunidad — todo junto, revisado a mano antes de publicarse. Hecho en Campeche, para Campeche."* The old `scr-info` screen, `goToInfo()`, and its burger-menu entry were all deleted outright, not just hidden — there's no page to navigate back to anymore, the hint card *is* the explanation now. No changes were needed to the Preferencias screen itself: the existing tips-toggle and "Ver los consejos de nuevo" reset both already cover every key in `SECTION_TIPS` generically, so the new `inicio` entry was automatically included for free.

### Install Nudge, Transporte (Ko'ox), Admin Payment Bypass

Unchanged this session — see v6.0's Architecture section for full detail.

### Burger Menu — flattened this session (was reorganized into two sections just one session earlier)

**Current, final state:** a single flat list, no collapsible sections — Mi cuenta, Preferencias, Noticias, Transporte (Ko'ox), Contacto, Aviso de privacidad y Términos. Comercio, Anuncios, and Vecinos were dropped outright (all three duplicate the bottom-nav tabs, which was already true in the prior session's design but only became worth acting on once the menu needed thinning again); "Cómo funciona" was dropped as a menu entry entirely (see Onboarding above — it's a hint card now, not a destination). "Pagar servicios" stays commented out, untouched, pending its own revamp.

**Worth flagging per Core Working Rule 7:** this directly reverses the two-collapsible-section ("Explorar"/"Más") structure built in the immediately prior session — that structure was deliberately built to avoid a "wall of buttons." With the list down to six flat items, `toggleMenuSection()` and its supporting CSS (`.menu-section-hdr`, `.menu-section-chev`, `.menu-section-body`) had nothing left to collapse and were deleted outright rather than left as dead code. Flagged explicitly before building, and confirmed as the right call.

### Renames

Unchanged this session — Tienda→Comercio (label only), the inner Tienda sub-tab→Mercado (label only). See v6.0 for full detail.

### Account Menu ("Tu cuenta") — consolidated this session

**What moved out:** "Quiero ser mandadito" (see Mandaditos above) and the standalone "Ofertas activas" row are both gone from the top-level account menu.

**Where "Ofertas activas" went instead:** folded into the business-profile screen, which was already internally titled "Mi negocio" in the code (`renderBusinessProfile` sets the modal title to exactly that, even before this session — the consolidation leans into a name that was already accurate). Opening a business's profile now also fetches and shows, once loaded:
- **"Mis productos en Tienda (N)"** — this specific business's own Producto listings, correctly scoped by `business_id` (Productos already snapshot `business_id` at submission time, so a multi-business account sees the right products under the right business).
- **"Ofertas activas (N)"** — same "+1 pago confirmado" confirm-sale flow as before, unchanged in behaviour, just relocated here; `MC.fetchMyActiveOfertas()` gained an optional `businessId` filter so this is now correctly scoped per business too, not account-wide.
- **"Mis vacantes (N)"** — the account's Empleos posts. **Not** business-scoped, unlike the two rows above: Empleos has no `business_id` column at all (the "Negocio" field on a job post is free-text and optional by original design, since anyone — verified business or not — can post a vacancy). For the common single-business account this is invisible; for a multi-business account, the same vacantes list currently shows from either business's profile. Known, accepted simplification — see Open Questions for whether it's ever worth a schema change.

All three reuse the exact same fetch/edit/discard pipeline "Mis publicaciones" already had (`MC.fetchMyPosts()`, `MY_POST_EDIT`, `postStatusBadge`, the Pendiente/Activo/Finalizado tabs) — `openMyPosts()`/`renderMyPosts()` were generalized to accept an optional table filter, a custom title, and a custom back-target (`openMyPosts(tables, title, backKey)`), rather than building a second, parallel screen from scratch. Called with no arguments, the original top-level "Mis publicaciones" account-menu button behaves exactly as it did before this session.

**Nothing lost:** the active-ofertas count that used to badge the standalone "Ofertas activas" row now badges the negocio row itself (either "Mis negocios (N)" or the single-business button, whichever applies) — reusing data the account view was already fetching, at no extra query cost.

### Form Fields — money type, image guidance, expanded categories, this session

A new **"money" field type** auto-prefixes "$" so people no longer have to type it themselves — the visible "$" is pure CSS (`.fi-money-wrap`/`.fi-money-prefix`), the underlying input holds just digits, and "$" is prepended once, at submit time, before the value is sent to Supabase (so stored values look exactly like the "$150"-style strings the app already had). Applied to **Producto price, Clasificado price, and Oferta priceWas/priceNow only** — Eventos' "Precio de entrada" and Empleos' "Pago" deliberately stayed plain freeform text, since both explicitly allow things a bare number field can't ("Gratis," "$150–$300," "$350/día + propinas"). Self-editing a money field correctly strips a stored leading "$" back out before re-filling the input, detected generically via the input's own CSS class rather than needing per-field logic.

**Categories expanded** across five `<select>` fields: Eventos gained Gastronomía/Religioso/Familiar/Educativo; Producto, Clasificado, and Negocio (verificar) now all share one consistent list with Electrónica/Mascotas/Deportes/Vehículos/Servicios added; Avisos gained Mascotas/Eventos vecinales. Reportes' category list was deliberately left untouched — it's infrastructure-specific and already reads complete.

### Multi-Image Upload (Producto/Clasificado) — this session

`productos` and `clasificados` each gained a new `image_urls text[] NOT NULL DEFAULT '{}'` column, CHECK-constrained to at most 3 elements at the DB layer (not just trusted client-side, same discipline as the Mandadito boost/Evento-featured capacity triggers). The one existing real row in each table (confirmed via a direct count before migrating) was backfilled from its old `image_url` into a one-element `image_urls` array. The legacy `image_url` column on both tables **still exists but is no longer read or written anywhere in the app** as of this session — a deliberate, non-destructive cutover; dropping the column outright is a safe follow-up once the new one's been stable in production for a while, not done yet (see Open Questions).

A new **`imgupload-multi`** form-field type (distinct from the single-image `imgupload` every other form still uses) powers the actual upload widget: existing thumbnails in a row, each individually removable, plus an "add" tile that disappears once the field's `max` (3, for both Producto and Clasificado) is reached. State lives in `uploadedImageUrlsMulti`/`uploadedImageUrlsMultiMax`, parallel to but separate from the existing single-image `uploadedImageUrls`, so neither type of form had to change how the other works. **At least one photo is now required** to publish a Producto or Clasificado — the same validation block that already checked for a name and contact methods gained one more line.

Display-side: the Mercado/Clasificados grid cards are unaffected (they only ever showed one thumbnail, and still do — `img` is computed as the first element of `imgs`). The listing detail view (`openProdView`) now shows a real swipeable gallery (`.pv-gallery`, full-width, scroll-snap) when a listing has more than one photo, falling back to the exact same single `.pv-hero` treatment as before when it only has one. The Pendiente moderation detail view renders `image_urls` as a row of thumbnails instead of the old single `<img>`, so an admin reviewing a submission sees every photo, not just the first.

### Home Page, Eventos monetization, Multi-business profiles, Automated content pipelines, Pendiente reject-reason logic, Empleos/Avisos display fixes, Rejection counting, Pull-to-refresh

All unchanged since v5.0/v6.0 — see those versions' Architecture sections for full detail. Nothing in this session touched any of these. (Mis Publicaciones's underlying Pendiente/Activo/Finalizado bucketing is also unchanged — what's new this session is the optional table-filter layered on top of it, described under Account Menu above.)

## Legal — Aviso de Privacidad / Términos y Condiciones

Unchanged this session — still published in a deliberately interim form, still needs a real lawyer's review to finalize the legal entity, registered address, and governing jurisdiction.

## Push Notifications — considered, still deferred

Unchanged this session — see v6.0 for context.

## Monetization (live)

**Target:** $100,000 MXN/month (sustain 1–2 people, not venture-scale) — unchanged.

No new fees or flows shipped this session — see v6.0 for the full current list (Ofertas, Negocio Premium, Negocio adicional, Negocio adicional Premium, Evento Destacado, Mandadito Boost, and what's free forever). This session's work (money-field formatting, required photos, multi-image upload) is UI/data-quality polish with no pricing implication.

## Known Real Bugs — Don't Re-diagnose From Scratch

*(All v5.0/v6.0 entries below remain valid precedent — new entries from this session follow.)*

- Stale JWT after anonymous→real conversion (`refreshSession()` needed explicitly).
- Owner-update RLS policies with no column restriction are a recurring privilege-escalation shape — fix pattern is a trigger or a `SECURITY DEFINER` RPC that does its own ownership check instead of a raw policy.
- PL/pgSQL `raise exception` rolls back earlier writes in the same function call.
- `pgcrypto` lives in `extensions`, not `public`, on this project.
- `password_reset_requests` needs an explicit relationship name in PostgREST embeds (two FKs to `profiles`).
- FAB used `position:absolute` instead of `fixed` (long since fixed).
- Hero photo relative-path bug (long since fixed) — both `MiCampeche-Hero-2.jpg` and `MiCampeche-Hero-3.jpg` confirmed present in `assets/images/`.
- `.nojekyll` missing its leading dot (long since fixed).
- Samsung Internet / Chromium mobile dark-mode auto-repaint — fixed with `color-scheme: light`.
- Viewport-unit drift — fixed with `position:fixed; inset:0` on `html`/`body`.
- Pull-to-refresh hijacking during horizontal scroll, and the release-time snap-down jump — both fixed.
- A WordPress site's default RSS feed can be stale even when the site is visibly active — always check `pubDate`/`lastBuildDate` directly.
- `.maybeSingle()` filtered only by an owner column, with no other uniqueness guarantee, is a latent crash — audit any other call whose uniqueness assumption might no longer hold as the schema evolves.
- A trigger whose side effect needs to write to a table the *acting session* doesn't have RLS access to needs `SECURITY DEFINER`.
- `BEGIN`/`ROLLBACK` via the chat's own SQL execution tool is not reliably safe for adversarial testing.
- A generic admin long-press "Editar" action does not exist in the code (only "Quitar"/reject) — still true.
- `businesses` has no public SELECT RLS policy at all — only "owner reads own" and admin. Any feature wanting to show a business's public-facing detail to a non-owner must snapshot the value onto the public-facing content row at write time (as `productos.seller_phone`, `ofertas.seller_phone`, and `mandaditos.phone`/`display_name` all do) — never assume a live join will work for a non-owner reader.
- Google Play now requires apps to target Android 16 (API level 36) as of 31 August 2026 (already passed as of this writing). Verify the packaging tool's current state before attempting a Play Store submission.
- **(New)** `productos`/`clasificados` now have an `image_urls text[]` column (≤3, CHECK-constrained) as of this session. The old single `image_url` column on both tables still exists but is no longer read or written anywhere in the app — don't resurrect reads/writes to it. It's a candidate for a future cleanup migration to drop entirely once `image_urls` has been stable in production for a while (see Open Questions) — not done now.

## Open Questions (not yet decided — flag before deciding unilaterally)

*(Unchanged from v5.0/v6.0 unless noted: outreach plan for citizen journalists; Perdidos high-stakes verification; Empleos employer monetization; Ofertas business-scoping beyond primary; Reportes auto-resolve threshold; Alertas keyword tuning; CFE alert source; Aviso de Privacidad lawyer review; JAPAY→SMAPAC correction; client-side Stripe payment-redirect trust now that five flows depend on it; a customer-side Ofertas deposit mechanism if no-show data ever shows it's needed; App Store / Play Store submission sequencing.)*

- **(New)** Should Empleos ever gain a `business_id` link, so the new Mi negocio → "Mis vacantes" section can be scoped per-business the way Productos and Ofertas already are, instead of account-wide? Only matters for the (currently rare) multi-business account — not worth the schema/form change until it's an actual pain point for someone.
- **(New)** Is it worth a follow-up migration to drop the now-unused `image_url` column on `productos`/`clasificados` outright, or fine to leave it indefinitely as a harmless deprecated column? Leaning toward "drop it once `image_urls` has run clean in production for a while," per the note in Known Real Bugs — not urgent either way.
- **(New)** Is a 3-image cap on Producto/Clasificado the right number long-term, or will real sellers want more once listing volume actually picks up? No signal yet either way — revisit once there's real usage to look at.

## Immediate Priorities

**Toward real users & revenue:**
- Get a lawyer's review of the Aviso de Privacidad / Términos y Condiciones (unchanged, still the single most important legal loose end).
- Watch real Ofertas usage under the business-confirms-sale model — does the no-show problem stay solved, or does it need the deposit option sitting ready in Open Questions?
- Watch Mandaditos adoption toward the 5-mandadito threshold that unlocks the boost.
- **(New)** Watch how sellers respond to the new required-photo rule and the 3-image cap on Producto/Clasificado at publish time — friction vs. visibly better listing quality — and whether the money-field auto-"$" is actually reducing malformed price entries.

**Compounding infrastructure:**
- Execute the Pagar Servicios revamp (still flagged, still holding mock info).
- Defensive domain registration (micampeche.com / .com.mx) — cheap, still pending action.
- Attempt the Android Play Store submission (PWABuilder/Bubblewrap) once ready.
