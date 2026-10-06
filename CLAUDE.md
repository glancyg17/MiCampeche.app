# MiCampeche — working rules
Ground truth for every Claude Code session. Rationale/history: docs/HISTORY.md (read only when the task touches that area). Change log: docs/CODEX-LOG.md. Never trust these docs for schema/RLS/trigger state — query live Supabase.

## Project
- MiCampeche ("Tu ciudad, un solo lugar."), founder Glancy, San Francisco de Campeche, MX. PRODUCTION: real users, real Stripe payments.
- Plain HTML/CSS/JS, no framework, no build step. GitHub Pages behind Cloudflare; repo glancyg17/MiCampeche.app; pushing to main deploys.
- Supabase project fszvefihkjrqkxysencc (live). DB migrations / Edge Functions / live SQL are done from the founder's chat session, NOT here. If your task needs a DB change, STOP and state exactly what is needed (table/column/RPC signature) instead of working around it.

## Finish checklist (EVERY change)
1. Append an entry to docs/CODEX-LOG.md (same commit): date, what/why, gotchas, DB dependency (RPC names/signatures).
2. `npm run stamp`. Never hand-edit BUILD/CACHE_NAME/version.json; any older "bump CACHE_NAME" instruction is superseded.
3. `npm test` — every step must pass and output must say ALL PASSED, zero failures. If the stamp check fails, run `npm run stamp` and re-run. Never skip or weaken a test to get green.
4. Commit with a clear message; `git push origin main`.
5. Line endings: .gitattributes enforces LF (stamp.js hashes raw bytes); if the stamp check fails from a fresh clone, re-run `npm run stamp`.
6. Report the short hash and `cat version.json`.

One-time per clone: `npm run hooks` (pre-commit blocks stale stamps). CI (.github/workflows/test.yml) runs npm test on every push; it flags red but does not block the Pages deploy.

## Working rules
1. Work from the ACTUAL current repo. Re-verify (grep/read the real current code) before every change, even the third in a row on one feature; confidence from having written something is not evidence it matches what's deployed.
2. Don't open all of js/app.js. Use the file map below and grep.
3. When a feature "doesn't save", check the actual network payload (e.g. CONTENT_PAYLOAD), not just the form and DB in isolation.
4. For any multi-branch flow, make sure EVERY function that displays or gates it knows all branches (e.g. pickSlotDay vs submitPost). When a second way to satisfy a condition is added, grep every existing check of the original condition.
5. JS that measures-then-sets a container property can feedback-loop; render/centering code run by background refresh can measure display:none elements (re-run on nav() when the tab becomes visible, as startDestacadosRotation does).
6. DB-side text normalization / invariants are enforced in the database, not only the client (e.g. example products can never carry Destacado/Descuento, enforced in enforce_producto_promo_cap).
7. Feel-dependent interactions (gestures, animation, carousels): flag to the founder that they need an interactive prototype validated BEFORE porting; text review can't validate feel.
8. jsdom passing is not real-browser proof; say so plainly when a bug can't be reproduced.
9. A reported "ALL PASSED" from one session is not proof of build integrity; the stamp has gone stale unnoticed twice (v12, v13). Re-run `npm test` against the final content.
10. Contacto is the one exception to phone verification (Rule 12 in HISTORY.md).
11. SEARCH_PAGES must be maintained when a screen's content/shape changes (Comercio's entry is due a review: its top section changed shape).
12. Real account actions require a signed-in account with a verified phone (Contacto is the one exception, rule 10). Server side too: content inserts are forced to `pending` by the force_pending_on_insert trigger; any NEW content table must be checked for forged status/is_example on insert.
13. Validate against the real system before calling anything done. For a UI/rendering bug, reproduce it in a real browser first and confirm the fix live after deploy (extends rule 8).
14. Voice/tone: plain, warm, concrete; Spanish-first for anything user-facing; never invent statistics or business numbers the founder hasn't stated.
15. Flag before reopening a killed idea, including a new request that merely resembles one, or a recent structural decision.
16. Solo-founder constraint: every solution must be executable and reviewable by one person; no new build for something an existing feature already does (Mascotas' "Negocios" chip reuses Mercado).
17. Big builds become small, sequential, independently shippable steps (DB layer tested first, client after; redesigns as separate commits).
18. If a proposed feature resembles gig-economy work-matching, check Mexico's digital-platform labor law before designing anything (see Hard "Never").
19. Design decisions with the founder: prototype live and screenshot at real phone widths; don't guess.
20. If a live-reported bug can't be reproduced, say so plainly (ruled out X/Y, found A, couldn't determine C) instead of forcing a diagnosis.
21. PRIVACY: docs are public. Never write secrets, Stripe/account ids, revenue or user/subscriber counts, real people's names/phones/emails, or unfixed security weaknesses into any doc, log or commit message; use generic wording.

## Known traps
- Tests: identify DOM elements by exact attribute (`data-adm-rm="table|id"`), never title-substring; activeFeaturedEventIds() rotates off the real wall-clock hour, so substring lookups pass or fail depending on when you run.
- A `display:flex` container (e.g. `.submit-note`) turns every direct child, bare text and inline tags included, into its own flex item: wrap the whole text payload in ONE element.
- Gesture/scroll handlers must check overlays first (pullScrollTarget in js/app.js: search panel before `.scr.on`) and raise related UI above the overlay's z-index.
- Multi-step operations that can fail at different layers must say which layer failed (see handleSignupError).

## Hard "Never" constraints
- **NEVER** make MiCampeche a party to someone else's transaction. Merchant-payment-facilitation is killed. Only Stripe Payment Links charging MiCampeche's own users for its own fees; MiCampeche never touches card data. No cut, no deposit, no percentage, ever (Ofertas: the business self-confirms a sale after being paid directly in person; Mandaditos: WhatsApp-connect only).
- **NEVER** build in-app task-matching, acceptance, or completion-status tracking for gig/courier work. A directory is fine; the app posting a task, a worker accepting it, or tracking progress is not.
- **NEVER** build a public rating/review system for individuals. Private-only feedback (visible only to the founder) is the correct shape.
- **NEVER** assume mock data represents real user behaviour.
- **NEVER** reproduce copyrighted news content. Noticias/Eventos/Alertas ingestion is aggregator-only: headline + thumbnail + link out, no paraphrase layer.
- **NEVER** add a feature that increases moderation burden without discussing capacity first (removing a review gate isn't free either, e.g. the admin "Quitar" safety net).
- **NEVER** ship a change without validating it against the real system it touches.
- **NEVER** let a DB policy or trigger grant a privilege it doesn't explicitly, narrowly intend to. Enforce limits in the database (CHECK constraints, triggers, SECURITY DEFINER RPCs with their own ownership checks), not trust-the-client; avoid "owner can UPDATE own row with no column restriction" policies.
- **NEVER** hardcode a Ko'ox (city bus) route, schedule or fare as static in-app content; link to live trackers instead.

## Killed ideas — don't re-propose without a specific new reason
- A separate enlarged "featured" oferta card: every oferta gets identical treatment; only start position + small "Hoy" ribbon distinguish today's.
- A linear oferta carousel with hard start/end stops: it must loop infinitely (triple-render + silent re-center).
- Admin-gated confirmation for Premium slot purchases: all slot purchases are self-service client-trusted by design.
- Reversible "pause" for excess products on Premium→Básico: owner picks 2 to keep, rest permanently discarded.

## File map (anchors verified by grep)
index.html — shell/markup · css/styles.css — all styles · js/app.js — UI/logic · js/supabase-client.js — MC.* data layer · sw.js — service worker (BUILD/CACHE_NAME derived by stamp) · scripts/stamp.js — build stamp (+ --check) · version.json — stamped build id · test-smoke.js / test-sw.js / test-selfheal.js — tests · docs/ — HISTORY, CODEX-LOG, proposals/

js/app.js:
- nav — tab switching; re-runs tab-specific setup when a tab becomes visible
- startDestacadosRotation / eligibleDestacados / mercadoTopPromoCount — shared 7s Destacados rotation, eligible pool, top-slot count for Mercado
- renderMercado / openProdView / dashColHdr — Mercado grid, product detail, Home section header
- renderOfertas / ofertaCardHtml / centerOfertaWheel — Comercio oferta wheel (3x render, silent re-center), shared flip-card markup, wheel positioning
- ofertaPublicVisible — sold-out real ofertas hidden from public lists (examples kept)
- pickSlotDay — day-picker confirmation text/button (free vs paid vs edit-reprogram)
- submitPost — post submission for all kinds, incl. oferta payment branch
- openMyPostEdit / MY_POST_EDIT — owner self-edit of own posts (ofertas editable only when rejected)
- renderMyBusinesses / renderPremiumToggleAction — Mis negocios + per-business Premium slot action
- openAdminBusinessView / renderAdminBusinessView — admin business detail
- renderModerationDetailFields — shared detail-fields renderer (moderation, admin, owner views)
- openAccount — account menu
- runWriteGate — gate for writes (verification, blocked "Acceso restringido")
- guardedContact / openWhatsAppSmart / navigateWhatsAppPackage — contact buttons, Android WhatsApp vs Business chooser
- SEARCH_PAGES — global search page index

js/supabase-client.js:
- CONTENT_PAYLOAD — per-table payload builders for create/edit (check here first for "doesn't save")
- MC.fetchTienda — products list (carries businessId)
- MC.fetchOfertas / MC.fetchMyArrivedOfertas / MC.fetchMyPendingOfertas — oferta reads
- latestBookingDs — picks an oferta's latest booking date (a resubmitted oferta can have two bookings)
- MC.updateOferta — edit + resubmit a rejected oferta, books a fresh day at $0
- MC.deleteMyPost — permanent discard of own post

## Current priorities / open decisions (founder decides; don't build without a go-ahead)
a) "Terminar oferta": owner ends a live oferta early. Proposed: `ended_at timestamptz` + owner RPC (DB side via chat), client filters ended_at is null, shows in Finalizadas as "Terminada por ti"; do NOT delete the row and do NOT use status='rejected'.
b) Stale 2026-09-17 booking on oferta 51ec3ca9… (payment record; not deleted) and/or a DB rule that a resubmission replaces the old booking.
c) Whether the Comercio wheel needs a sort order or cap now that ofertas never expire.

Carry-forward: today's-oferta push decision (stale, ask); lawyer review of Aviso/Términos (list in HISTORY.md); push adoption is low. Open security items: kept privately by the founder, not in this repo; ask before assuming there are none. Known: wheel re-centers on every background refresh.
