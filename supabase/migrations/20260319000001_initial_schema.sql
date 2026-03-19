-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Presentations table
create table public.presentations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  title text not null default 'Untitled Presentation',
  slides jsonb not null default '[]'::jsonb,
  theme jsonb not null default '{}'::jsonb,
  settings jsonb default '{}'::jsonb,
  is_public boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Templates table (for our curated templates)
create table public.templates (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  category text not null default 'General',
  description text,
  thumbnail_url text,
  preview_slides jsonb default '[]'::jsonb,
  theme jsonb not null default '{}'::jsonb,
  layouts jsonb default '[]'::jsonb,
  fonts jsonb default '[]'::jsonb,
  colors jsonb default '{}'::jsonb,
  is_premium boolean default false,
  is_active boolean default true,
  sort_order int default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- AI generation logs
create table public.ai_generations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  presentation_id uuid references public.presentations(id) on delete set null,
  prompt text not null,
  model text not null default 'claude-sonnet-4-20250514',
  tokens_used int,
  duration_ms int,
  status text not null default 'completed',
  created_at timestamptz default now()
);

-- Indexes
create index idx_presentations_user_id on public.presentations(user_id);
create index idx_presentations_updated_at on public.presentations(updated_at desc);
create index idx_templates_category on public.templates(category);
create index idx_templates_is_active on public.templates(is_active) where is_active = true;
create index idx_ai_generations_user_id on public.ai_generations(user_id);

-- RLS policies
alter table public.presentations enable row level security;
alter table public.templates enable row level security;
alter table public.ai_generations enable row level security;

-- Presentations: users can CRUD their own, read public ones
create policy "Users can read own presentations"
  on public.presentations for select
  using (auth.uid() = user_id or is_public = true);

create policy "Users can insert own presentations"
  on public.presentations for insert
  with check (auth.uid() = user_id);

create policy "Users can update own presentations"
  on public.presentations for update
  using (auth.uid() = user_id);

create policy "Users can delete own presentations"
  on public.presentations for delete
  using (auth.uid() = user_id);

-- Anonymous users can also create presentations (no auth required for MVP)
create policy "Anonymous can insert presentations"
  on public.presentations for insert
  with check (user_id is null);

create policy "Anonymous can read their presentations"
  on public.presentations for select
  using (user_id is null and is_public = false);

-- Templates: everyone can read active templates
create policy "Anyone can read active templates"
  on public.templates for select
  using (is_active = true);

-- AI generations: users can read their own
create policy "Users can read own generations"
  on public.ai_generations for select
  using (auth.uid() = user_id);

create policy "Users can insert own generations"
  on public.ai_generations for insert
  with check (auth.uid() = user_id);

-- Updated at trigger
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger presentations_updated_at
  before update on public.presentations
  for each row execute function public.handle_updated_at();

create trigger templates_updated_at
  before update on public.templates
  for each row execute function public.handle_updated_at();
