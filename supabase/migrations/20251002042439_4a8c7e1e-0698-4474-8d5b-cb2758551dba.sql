-- Drop the overly permissive SELECT policy
DROP POLICY IF EXISTS "Anyone can count registrations" ON public.registrations;

-- Create a secure function that returns only the count
CREATE OR REPLACE FUNCTION public.get_registrations_count()
RETURNS bigint
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT COUNT(*) FROM public.registrations;
$$;

-- Grant execute permission to anonymous users for the count function
GRANT EXECUTE ON FUNCTION public.get_registrations_count() TO anon;