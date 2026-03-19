-- Create templates bucket (public, for template cover images)
insert into storage.buckets (id, name, public)
values ('templates', 'templates', true)
on conflict do nothing;

-- Allow public read access to templates bucket
create policy "Public read templates" on storage.objects
  for select using (bucket_id = 'templates');

-- Allow authenticated upload to templates bucket  
create policy "Auth upload templates" on storage.objects
  for insert with check (bucket_id = 'templates');
