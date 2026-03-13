-- Enable pgcrypto for UUID generation if you prefer using gen_random_uuid().
create extension if not exists pgcrypto;

create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  service text not null,
  event_date date not null,
  event_time text,
  guests integer not null default 1,
  message text,
  status text not null default 'received',
  admin_note text,
  created_at timestamptz not null default now(),
  updated_at timestamptz,
  client_ip_hash text
);

create index if not exists bookings_event_date_idx on public.bookings (event_date);
create index if not exists bookings_status_idx on public.bookings (status);
create index if not exists bookings_event_date_time_idx on public.bookings (event_date, event_time);

create table if not exists public.booking_rate_limits (
  id bigserial primary key,
  ip_hash text not null,
  email text,
  created_at timestamptz not null default now()
);

create index if not exists booking_rate_limits_ip_idx on public.booking_rate_limits (ip_hash);
create index if not exists booking_rate_limits_created_idx on public.booking_rate_limits (created_at);

alter table public.bookings
  add constraint if not exists bookings_status_check
  check (status in ('received', 'confirmed', 'cancelled', 'completed', 'no-show', 'pending'));
