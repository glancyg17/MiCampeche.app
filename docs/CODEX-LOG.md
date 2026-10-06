# MiCampeche — Codex Log. Append-only. One short entry per change, newest at the BOTTOM, added in the same commit as the change. Consolidate into docs/HISTORY.md monthly. Entry format: `## YYYY-MM-DD — title (short hash)` then bullets: **What/why**, **Gotchas**, **DB dependency** (exact RPC names/signatures, or 'none').

## 2026-09-30 — Oferta card polish (164d4e9)
- **What/why**: price moved into the white bottom block (bigger, ink colour; "was" price red); 10 s auto-revert after flipping (timer restarts on touch/scroll inside a flipped card); modal header z-index fix (sticky .modal-hdr was painted over by .chip z-index:6).
- **Gotchas**: none.
- **DB dependency**: none.

## 2026-09-30 — Ofertas lifecycle screen (e84bf26)
- **What/why**: "Ofertas activas" screen with Activas / Pendientes / Finalizadas tabs + business filter chips; ofertas removed from Mis publicaciones; rejected-oferta "Editar y reenviar" lives in Pendientes; Mis publicaciones got a business filter.
- **Gotchas**: late "+1 pago confirmado" is allowed on expired-unsold ofertas because increment_oferta_sold has no expiry check.
- **DB dependency**: none.

## 2026-09-30 — Admin block toggle + broadcast (f1a838d)
- **What/why**: Usuarios page Activo/Bloqueado chips with confirm sheet + optional message; admin broadcast "Mensaje a usuarios" (all or selected); weekly "Tu opinión cuenta" popup removed (maybeShowWeeklySuggestionPrompt deleted; Sugerencias menu item and maybeShowMandaditoReviewNudge untouched); blocked users see "Acceso restringido" in runWriteGate/Contacto.
- **Gotchas**: the Premium control in renderAdminBusinessView is two chip buttons (no "switch" component exists); the block control follows that pattern. banned was already enforced by RLS via is_verified_writer(); client reads it via MC.currentAccount.
- **DB dependency**: migration admin_block_toggle_and_broadcast — `admin_set_user_blocked(p_target uuid, p_blocked boolean, p_message text default null) returns void` (flips profiles.banned only; refuses self / other admin / unknown user / message >1000; optional message inserted into admin_messages); `admin_broadcast_message(p_message text, p_profile_ids uuid[] default null) returns integer` (one admin_messages row per recipient; NULL = every account with a phone except sender; max 500 ids; message 1-1000 chars). Both authenticated-executable with internal is_admin check; execute revoked from public/anon.

## 2026-09-30 — Remove 7-day oferta lifespan (04a9581)
- **What/why**: ofertas public until sold out or admin-removed. OFERTA_LIFESPAN_DAYS/ofertaAgeDays removed; ofertaPublicVisible(o) helper (sold-out REAL ofertas hidden from public lists; examples keep Agotado ribbon); Finalizadas = sold out only; fetchOfertas limit 30 -> 100; latestBookingDs(r) replaces ofertas_bookings[0] in fetchOfertas / fetchMyArrivedOfertas / fetchMyPendingOfertas (latest booking date wins).
- **Gotchas**: an oferta resubmitted after rejection can have two bookings (stale + new); [0] picked the stale one and hid it. No cron/DB function ever expired ofertas — the 7-day rule was client-only; server notify_oferta_del_dia_if_new keys on booked_date = today and is unaffected.
- **DB dependency**: none.

## 2026-09-30 — Findings (no code change)
- Oferta 51ec3ca9-66e6-4520-abe9-75510fd35d5b has two bookings (a stale 2026-09-17 one, and a 2026-09-27 one from MC.updateOferta). Stale row deliberately NOT deleted (payment record).
- Owners cannot delete/end their own ofertas (no owner DELETE policy; only REJECTED ofertas are editable; admin long-press "Quitar" works).

## 2026-10-06 — Docs restructure + CI + stamp hook (this commit)
- **What/why**: split CLAUDE.md (lean) / HISTORY.md / CODEX-LOG.md; GitHub Action runs npm test on push; pre-commit stamp check.
- **Gotchas**: none.
- **DB dependency**: none.

## 2026-10-06 — CI Node version (follow-up)
- **What/why**: first CI run failed at `npm ci` on Node 20 (logs not readable without admin rights); lockfile was generated on Node 24 / npm 11, so workflow now uses Node 24.
- **Gotchas**: if CI still fails at `npm ci`, read the job log in the GitHub UI (canvas native install is the other suspect).
- **DB dependency**: none.

## 2026-10-06 — CI native deps for canvas (follow-up)
- **What/why**: `npm ci` still failed on Node 24; canvas (native) is the suspect, so the workflow installs cairo/pango dev libs first so a source build can succeed.
- **Gotchas**: job logs need admin rights via API; if still red, read the `npm ci` step log in the GitHub Actions UI.
- **DB dependency**: none.

## 2026-10-06 — Fix CI: commit package-lock.json; enforce LF (follow-up)
- **What/why**: root cause of the red Action: package-lock.json was in .gitignore, so it was never in the repo and `npm ci` failed with EUSAGE (Node/canvas/apt guesses were wrong). Removed the ignore rule and committed the lockfile (generated on Windows; no Docker/WSL available to regenerate on Linux, so CI is the Linux proof). Dropped the apt "Native deps for canvas" step. Added `.gitattributes` (`* text=auto eol=lf`) so stamp hashes can't depend on a machine's CRLF setting.
- **Gotchas**: if `npm ci` still fails on Linux, the Windows-generated lockfile is the suspect; regenerate it on Linux. `.nojekyll` was renormalized (line endings only).
- **DB dependency**: none.

## 2026-10-06 — docs: restored Hard Never + working rules from history; scrubbed sensitive data; history not rewritten
- **What/why**: repo and /docs are public, so CLAUDE.md now has the Hard "Never" list and working rules 12–21 (restored from earlier codex versions, plus a Known traps section); HISTORY.md / CODEX-LOG.md scrubbed of account ids, personal contact details, business metrics and open-security specifics (replaced by one generic line).
- **Gotchas**: git history was NOT rewritten, so earlier commits still contain the removed values; the Stripe account id and phone number should be treated as already public. Rule 12's force_pending_on_insert is a DB trigger (not greppable in this repo).
- **DB dependency**: none.

## 2026-10-06 — Comercio wheel: newest release first, starts on today's oferta
- **What/why**: new ofertaWheelList() orders real ofertas by postedDs descending (stable; missing = oldest), capped at OFERTA_WHEEL_MAX = 30, examples after all real ones in existing order (not counted toward the cap). centerOfertaWheel now starts on index 0 of that list (today's oferta, else newest real, else first example) instead of Home's pickHomeOferta pick; nav()'s re-center call uses the same list. Home's pick logic untouched.
- **Gotchas**: nav() previously passed its own unsorted filter to centerOfertaWheel, so it must use ofertaWheelList() or the order diverges. jsdom has no layout, so scroll start position/feel is not covered; the wheel now always re-centers on index 0 after background refreshes.
- **DB dependency**: none.

## 2026-10-06 — Comercio wheel: today's first, rest random (replaces newest-first)
- **What/why**: ofertaWheelList() now puts today's real oferta(s) first, then all other real ofertas in random order, then slices to OFERTA_WHEEL_MAX (today's can't be cut); examples stay last, uncounted. Reason: with chronological order a lone oferta would hold first position for days. The shuffle is memoized per page load (ofertaRandKeys: one random key per oferta id) so refreshes don't reorder.
- **Gotchas**: ofertaWheelList() has three callers (renderOfertas, nav(), tests) that must agree, hence the memoized keys. ofertaRandKeys is `var` (not const) so tests can reach it via window. Supersedes the previous entry's ordering rule.
- **DB dependency**: none.

## 2026-10-06 — Oferta form: rules callout
- **What/why**: "Publicar una Oferta" now opens with a callout (at least 50% off, MiCampeche-exclusive, not offered elsewhere; Premium "Descuento" on Tienda products for smaller discounts). Informational only: no price validation, submission not blocked; moderation enforces.
- **Gotchas**: the callout is a `type:'note'` field (`rules`, `cls:'callout'`, styled `.field-note.callout`), not the form-level `note`, because that one renders in #post-submit-note and applyOfertaBusinessHints overwrites it. The note branch of the form renderer now accepts an optional `cls`. Consumers of `.fields` checked: renderer, imgupload init, applyConditionalRows (showIf only), submitPost value collection (skips note) and colonia check (type-specific); the rejected-oferta edit flow reuses POST_FORMS.oferta via openPost so it shows the callout too, and its prefill is key-based.
- **DB dependency**: none.
