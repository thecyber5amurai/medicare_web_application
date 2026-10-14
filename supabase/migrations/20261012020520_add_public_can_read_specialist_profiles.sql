CREATE POLICY "Public can read specialist profiles"
ON public.profiles
FOR SELECT
TO anon, authenticated
USING (role = 'specialist');