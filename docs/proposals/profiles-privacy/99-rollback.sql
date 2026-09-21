-- ROLLBACK for 02-lock-profiles.sql — restores the exact policies that exist
-- today (captured from pg_policies on 2026-09-21). Instant; changes no data.
-- The step-1 functions can stay; they are harmless without step 2.

begin;

drop policy if exists "profiles owner read own"   on public.profiles;
drop policy if exists "profiles admin read all"   on public.profiles;
drop policy if exists "profiles admin update all" on public.profiles;

create policy "profiles are viewable by everyone" on public.profiles
  for select using (true);

create policy "profiles admin update all" on public.profiles
  for update using (
    exists (select 1 from public.profiles p2 where p2.id = auth.uid() and p2.is_admin)
  );

commit;
