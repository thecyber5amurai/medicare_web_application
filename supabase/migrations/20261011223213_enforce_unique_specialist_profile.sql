ALTER TABLE public.specialists
ADD CONSTRAINT specialists_profile_id_key
UNIQUE (profile_id);