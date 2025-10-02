-- ============================================
-- COMBINED MIGRATIONS FOR PROMPTBI DATABASE
-- Run this entire file in your Supabase SQL Editor
-- ============================================

-- Migration 1: Create leads table
-- ============================================
CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  name text,
  source text DEFAULT 'unknown',
  user_type text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS quiz_responses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  role text,
  learning_goal text,
  experience_level text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_responses ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'leads' AND policyname = 'Anyone can submit leads'
  ) THEN
    CREATE POLICY "Anyone can submit leads"
      ON leads FOR INSERT TO anon WITH CHECK (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'quiz_responses' AND policyname = 'Anyone can submit quiz responses'
  ) THEN
    CREATE POLICY "Anyone can submit quiz responses"
      ON quiz_responses FOR INSERT TO anon WITH CHECK (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'leads' AND policyname = 'Authenticated users can read leads'
  ) THEN
    CREATE POLICY "Authenticated users can read leads"
      ON leads FOR SELECT TO authenticated USING (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'quiz_responses' AND policyname = 'Authenticated users can read quiz responses'
  ) THEN
    CREATE POLICY "Authenticated users can read quiz responses"
      ON quiz_responses FOR SELECT TO authenticated USING (true);
  END IF;
END $$;

CREATE INDEX IF NOT EXISTS leads_email_idx ON leads(email);
CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS quiz_responses_email_idx ON quiz_responses(email);

-- Migration 2: Create beta testers table
-- ============================================
CREATE TABLE IF NOT EXISTS beta_testers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  full_name text NOT NULL,
  phone text,
  role_status text,
  company_or_school text,
  job_title text,
  primary_goal text,
  bi_experience_level text,
  bi_tools_used text[],
  biggest_challenge text,
  feature_priority text,
  discovery_source text,
  newsletter_opt_in boolean DEFAULT true,
  accepted boolean DEFAULT false,
  onboarded boolean DEFAULT false,
  feedback_provided boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE beta_testers ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'beta_testers' AND policyname = 'Anyone can submit beta applications'
  ) THEN
    CREATE POLICY "Anyone can submit beta applications"
      ON beta_testers FOR INSERT TO anon WITH CHECK (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'beta_testers' AND policyname = 'Authenticated users can read beta testers'
  ) THEN
    CREATE POLICY "Authenticated users can read beta testers"
      ON beta_testers FOR SELECT TO authenticated USING (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'beta_testers' AND policyname = 'Authenticated users can update beta testers'
  ) THEN
    CREATE POLICY "Authenticated users can update beta testers"
      ON beta_testers FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
  END IF;
END $$;

CREATE INDEX IF NOT EXISTS beta_testers_email_idx ON beta_testers(email);
CREATE INDEX IF NOT EXISTS beta_testers_created_at_idx ON beta_testers(created_at DESC);
CREATE INDEX IF NOT EXISTS beta_testers_accepted_idx ON beta_testers(accepted);
CREATE INDEX IF NOT EXISTS beta_testers_role_status_idx ON beta_testers(role_status);

-- Migration 3: Create masterclass registrations table
-- ============================================
CREATE TABLE IF NOT EXISTS masterclass_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  full_name text NOT NULL,
  phone text,
  role_status text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE masterclass_registrations ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'masterclass_registrations' AND policyname = 'Anyone can register for masterclass'
  ) THEN
    CREATE POLICY "Anyone can register for masterclass"
      ON masterclass_registrations FOR INSERT TO anon, authenticated WITH CHECK (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'masterclass_registrations' AND policyname = 'Authenticated users can read registrations'
  ) THEN
    CREATE POLICY "Authenticated users can read registrations"
      ON masterclass_registrations FOR SELECT TO authenticated USING (true);
  END IF;
END $$;

CREATE INDEX IF NOT EXISTS masterclass_registrations_email_idx ON masterclass_registrations(email);
CREATE INDEX IF NOT EXISTS masterclass_registrations_created_at_idx ON masterclass_registrations(created_at DESC);

-- Migration 4: Add fields to leads table
-- ============================================
ALTER TABLE leads
  ADD COLUMN IF NOT EXISTS phone text,
  ADD COLUMN IF NOT EXISTS role_status text,
  ADD COLUMN IF NOT EXISTS company_or_school text,
  ADD COLUMN IF NOT EXISTS primary_goal text,
  ADD COLUMN IF NOT EXISTS referral_source text,
  ADD COLUMN IF NOT EXISTS consent_marketing boolean DEFAULT true,
  ADD COLUMN IF NOT EXISTS consent_data_processing boolean DEFAULT true;

-- Migration 5: Create campus ambassadors table
-- ============================================
CREATE TABLE IF NOT EXISTS campus_ambassadors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  name text NOT NULL,
  phone text,
  campus_name text NOT NULL,
  country text NOT NULL,
  why_interested text,
  accepted boolean DEFAULT false,
  onboarded boolean DEFAULT false,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_campus_ambassadors_email ON campus_ambassadors(email);
CREATE INDEX IF NOT EXISTS idx_campus_ambassadors_status ON campus_ambassadors(status);
CREATE INDEX IF NOT EXISTS idx_campus_ambassadors_created_at ON campus_ambassadors(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_campus_ambassadors_country ON campus_ambassadors(country);

ALTER TABLE campus_ambassadors ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'campus_ambassadors' AND policyname = 'Anyone can apply as campus ambassador'
  ) THEN
    CREATE POLICY "Anyone can apply as campus ambassador"
      ON campus_ambassadors FOR INSERT TO anon, authenticated WITH CHECK (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'campus_ambassadors' AND policyname = 'Authenticated users can read campus ambassadors'
  ) THEN
    CREATE POLICY "Authenticated users can read campus ambassadors"
      ON campus_ambassadors FOR SELECT TO authenticated USING (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'campus_ambassadors' AND policyname = 'Authenticated users can update campus ambassadors'
  ) THEN
    CREATE POLICY "Authenticated users can update campus ambassadors"
      ON campus_ambassadors FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
  END IF;
END $$;

-- ============================================
-- ALL MIGRATIONS COMPLETED
-- ============================================
