-- Create enum for job types
CREATE TYPE public.job_type AS ENUM ('full_time', 'internship');

-- Create enum for job status
CREATE TYPE public.job_status AS ENUM ('open', 'closed');

-- Create job_postings table
CREATE TABLE public.job_postings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  title TEXT NOT NULL,
  job_type public.job_type NOT NULL,
  role TEXT NOT NULL,
  region TEXT NOT NULL,
  country TEXT NOT NULL,
  description TEXT NOT NULL,
  commitment_period TEXT NOT NULL,
  compensation TEXT NOT NULL,
  location_type TEXT NOT NULL,
  requirements TEXT NOT NULL,
  status public.job_status NOT NULL DEFAULT 'open',
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Create job_applications table
CREATE TABLE public.job_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  job_id UUID REFERENCES public.job_postings(id) ON DELETE CASCADE NOT NULL,
  full_name TEXT NOT NULL,
  age INTEGER NOT NULL,
  gender TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  country TEXT NOT NULL,
  state TEXT NOT NULL,
  city TEXT NOT NULL,
  education_level TEXT NOT NULL,
  college_name TEXT,
  gpa_percentage NUMERIC,
  github_url TEXT,
  resume_url TEXT NOT NULL,
  projects_description TEXT,
  technical_achievement TEXT NOT NULL,
  additional_info TEXT,
  status TEXT NOT NULL DEFAULT 'pending'
);

-- Enable RLS on job_postings
ALTER TABLE public.job_postings ENABLE ROW LEVEL SECURITY;

-- Enable RLS on job_applications
ALTER TABLE public.job_applications ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can view open job postings
CREATE POLICY "Anyone can view open jobs"
ON public.job_postings
FOR SELECT
USING (status = 'open');

-- Policy: Anyone can submit job applications
CREATE POLICY "Anyone can submit applications"
ON public.job_applications
FOR INSERT
WITH CHECK (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_job_posting_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for job_postings
CREATE TRIGGER update_job_postings_updated_at
BEFORE UPDATE ON public.job_postings
FOR EACH ROW
EXECUTE FUNCTION public.update_job_posting_updated_at();