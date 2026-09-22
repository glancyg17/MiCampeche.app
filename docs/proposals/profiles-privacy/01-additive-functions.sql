-- APPLIED 2026-09-21 as migration "profiles_privacy_step1_display_names_and_phone_check" (Supabase project fszvefihkjrqkxysencc).
-- Step 1 of 2: purely additive; safe to run at any time, changes no existing behaviour.
--
-- Why: public.profiles is readable by everyone (policy "profiles are viewable
-- by everyone", qual `true`), so anyone holding the public anon key can read
-- every account's phone, is_admin, banned and phone_verification_* fields.
-- Once profiles is locked down (step 2), guests and regular accounts can no
-- longer read OTHER accounts' rows, so the two things the app legitimately
-- needed from them move into narrow SECURITY DEFINER functions:
--   * display_names(uuid[])       -> id + display_name ONLY (author names on
--                                    the public Avisos feed)
--   * phone_already_verified(text) -> a yes/no (signup / edit-phone duplicate check)
-- Ship the matching app change (branch profiles-privacy-proposal) BEFORE step 2.

begin;

create or replace function public.display_names(p_ids uuid[])
returns table(id uuid, display_name text)
language sql stable security definer
set search_path = ''
as $$
  select p.id, p.display_name
  from public.profiles p
  where p.id = any(p_ids[1:200])   -- capped: this is a lookup, not a table dump
$$;
revoke all on function public.display_names(uuid[]) from public;
grant execute on function public.display_names(uuid[]) to anon, authenticated;

create or replace function public.phone_already_verified(p_phone text)
returns boolean
language sql stable security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.profiles
    where phone = p_phone and phone_verification_status = 'verified'
  )
$$;
-- Supabase grants EXECUTE to anon/authenticated by default privileges, so anon
-- must be revoked explicitly. Signup runs on an (anonymous) authenticated session.
revoke all on function public.phone_already_verified(text) from public, anon;
grant execute on function public.phone_already_verified(text) to authenticated;

commit;
