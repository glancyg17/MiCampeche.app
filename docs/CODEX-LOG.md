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
- Oferta 51ec3ca9-66e6-4520-abe9-75510fd35d5b has two bookings (stale 2026-09-17 $99, and 2026-09-27 $0 from MC.updateOferta). Stale row deliberately NOT deleted (payment record).
- Owners cannot delete/end their own ofertas (no owner DELETE policy; only REJECTED ofertas are editable; admin long-press "Quitar" works).

## 2026-10-06 — Docs restructure + CI + stamp hook (this commit)
- **What/why**: split CLAUDE.md (lean) / HISTORY.md / CODEX-LOG.md; GitHub Action runs npm test on push; pre-commit stamp check.
- **Gotchas**: none.
- **DB dependency**: none.

## 2026-10-06 — CI Node version (follow-up)
- **What/why**: first CI run failed at `npm ci` on Node 20 (logs not readable without admin rights); lockfile was generated on Node 24 / npm 11, so workflow now uses Node 24.
- **Gotchas**: if CI still fails at `npm ci`, read the job log in the GitHub UI (canvas native install is the other suspect).
- **DB dependency**: none.
