-- Create registrations table for early access signups
CREATE TABLE public.registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT,
  wallet_address TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  CONSTRAINT email_or_wallet_check CHECK (
    (email IS NOT NULL AND wallet_address IS NULL) OR 
    (email IS NULL AND wallet_address IS NOT NULL)
  ),
  CONSTRAINT unique_email UNIQUE (email),
  CONSTRAINT unique_wallet UNIQUE (wallet_address)
);

-- Enable Row Level Security
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (for registration)
CREATE POLICY "Anyone can register" 
ON public.registrations 
FOR INSERT 
TO anon
WITH CHECK (true);

-- Allow anyone to count registrations (for displaying total)
CREATE POLICY "Anyone can count registrations" 
ON public.registrations 
FOR SELECT 
TO anon
USING (true);

-- Create index for faster counting
CREATE INDEX idx_registrations_created_at ON public.registrations(created_at DESC);