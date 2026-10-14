CREATE POLICY "Public can read departments"
ON public.departments
FOR SELECT
TO anon, authenticated
USING (true);

CREATE POLICY "Public can read specialist departments"
ON public.specialist_departments
FOR SELECT
TO anon, authenticated
USING (true);