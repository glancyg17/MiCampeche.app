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
12. TODO: original Core Working Rules 4–11 were never written out in the v13 codex ("carry forward unchanged"); founder to restore if they should be here.

## Hard "Never" constraints
TODO: list not found in repo, founder to restore. (v13 codex only said "Unchanged at the constraint level"; the list lived in an earlier version.)

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

Carry-forward: Supabase Auth Site URL still http://localhost:3000 (founder, dashboard); today's-oferta push decision (stale, ask); lawyer review of Aviso/Términos (list in HISTORY.md); push subscribers very low (1 of 11). Known: wheel re-centers on every background refresh.
