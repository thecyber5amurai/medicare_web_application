create type public.is_verified as enum (
    'pending',
    'approved',
    'rejected'
);

alter table public.specialists
    add column is_verified public.is_verified not null default 'pending',
    add column is_verified_at timestamptz,
    add column is_verified_by uuid references public.profiles(id);
