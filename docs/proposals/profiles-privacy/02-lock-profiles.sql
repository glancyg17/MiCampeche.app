-- PROPOSAL — NOT APPLIED. Supabase project fszvefihkjrqkxysencc.
-- Step 2 of 2: the actual lock. Apply ONLY after:
--   (a) 01-additive-functions.sql has been applied, and
--   (b) the app change from branch profiles-privacy-proposal (cache v124) is
--       live on main, and old cached app shells have had time to update.
-- Until (a)+(b), running this makes guests see every Aviso author as "Vecino"
-- and silently disables the duplicate-phone check (both fail open, nothing breaks).
--
-- Result (tested in a rolled-back transaction against the live data):
--   guest            profiles visible 61 -> 0   (phones 8 -> 0)
--   regular account  profiles visible 61 -> 1   (only their own row)
--   admin            profiles visible 61 -> 61  (unchanged)
--   every other table, for all three identities: identical row counts.

begin;

-- 1) Stop the world-readable SELECT; replace with own-row + admin.
drop policy "profiles are viewable by everyone" on public.profiles;

create policy "profiles owner read own" on public.profiles
  for select to authenticated
  using ((select auth.uid()) = id);

-- is_current_user_admin() is SECURITY DEFINER, so this cannot recurse.
create policy "profiles admin read all" on public.profiles
  for select to authenticated
  using ((select public.is_current_user_admin()));

-- 2) REQUIRED companion change. The existing admin UPDATE policy contains a
--    subquery on profiles itself. While the SELECT policy was a constant
--    `true` that was harmless; once SELECT is restricted, Postgres rejects it
--    at UPDATE time with "infinite recursion detected in policy for relation
--    profiles" (reproduced in testing). Same meaning, no self-reference:
drop policy "profiles admin update all" on public.profiles;
create policy "profiles admin update all" on public.profiles
  for update
  using ((select public.is_current_user_admin()));

-- NOTE: deliberately NOT revoking anon's table-level SELECT on profiles. About
-- 45 policies on other tables contain `EXISTS (select 1 from profiles where
-- id = auth.uid() and is_admin)`; those subqueries run as the caller, so
-- revoking the privilege would make every guest read of avisos/eventos/etc.
-- fail with "permission denied for table profiles". With RLS on and no policy
-- for anon, the privilege alone exposes nothing (0 rows).

commit;

-- ── Post-apply checks (read-only) ─────────────────────────────────────────
-- 1. As anon over HTTP (should now return 0 rows / Content-Range */0):
--      curl -I "$SUPABASE_URL/rest/v1/profiles?select=id&phone=not.is.null" \
--        -H "apikey: $ANON_KEY" -H "Authorization: Bearer $ANON_KEY" -H "Prefer: count=exact"
-- 2. In the app as a guest: Avisos still show author names; Mercado/Eventos load.
-- 3. As the admin: Usuarios list, Pendiente > Verificación de teléfono, and the
--    password-reset queue all still list everyone.
-- 4. Sign up a fresh test account with a number already verified elsewhere:
--    still blocked with "Ese número ya está verificado en otra cuenta".
