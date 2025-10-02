/*
  # Create beta testers table with comprehensive lead data

  1. New Tables
    - `beta_testers`
      - `id` (uuid, primary key)
      - `email` (text, unique, not null) - Primary contact
      - `full_name` (text, not null) - For personalization and outreach
      - `phone` (text) - Optional for high-value follow-up
      - `role_status` (text) - Student, employed, unemployed, career switcher
      - `company_or_school` (text) - For B2B opportunities and case studies
      - `job_title` (text) - Current position, helps with segmentation
      - `primary_goal` (text) - Get first job, upskill, career change, etc.
      - `experience_level` (text) - Beginner, intermediate, advanced
      - `biggest_challenge` (text) - Pain points for product development
      - `timeline` (text) - How soon they want to start/get results
      - `linkedin_url` (text) - For success tracking and testimonials
      - `portfolio_url` (text) - Current work, helps assess level
      - `referral_source` (text) - How they heard about us (attribution)
      - `why_interested` (text) - Motivation and intent
      - `beta_perks_interest` (text[]) - What perks they're most interested in
      - `accepted` (boolean, default false) - Accepted into beta
      - `onboarded` (boolean, default false) - Completed onboarding
      - `beta_group` (text) - For A/B testing and cohort tracking
      - `source` (text) - Signup source (hero, quiz, exit-intent, etc.)
      - `created_at` (timestamptz)
      - `last_activity_at` (timestamptz) - For engagement tracking
      
  2. Security
    - Enable RLS on beta_testers table
    - Allow public insert (for signups)
    - Authenticated read only (admin dashboard)

  3. Notes
    - Comprehensive data collection for segmentation
    - Attribution tracking for marketing ROI
    - Pain point collection for product development
    - Contact info for case studies and testimonials
    - Timeline data for nurture campaigns
    - Referral tracking for growth loops
*/

-- Create beta testers table
CREATE TABLE IF NOT EXISTS beta_testers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  full_name text NOT NULL,
  phone text,
  role_status text,
  company_or_school text,
  job_title text,
  primary_goal text,
  experience_level text,
  biggest_challenge text,
  timeline text,
  linkedin_url text,
  portfolio_url text,
  referral_source text,
  why_interested text,
  beta_perks_interest text[],
  accepted boolean DEFAULT false,
  onboarded boolean DEFAULT false,
  beta_group text,
  source text DEFAULT 'unknown',
  created_at timestamptz DEFAULT now(),
  last_activity_at timestamptz DEFAULT now()
);

-- Create index for beta program tracking
CREATE INDEX IF NOT EXISTS beta_testers_email_idx ON beta_testers(email);
CREATE INDEX IF NOT EXISTS beta_testers_created_at_idx ON beta_testers(created_at DESC);
CREATE INDEX IF NOT EXISTS beta_testers_accepted_idx ON beta_testers(accepted);
CREATE INDEX IF NOT EXISTS beta_testers_source_idx ON beta_testers(source);
CREATE INDEX IF NOT EXISTS beta_testers_role_status_idx ON beta_testers(role_status);

-- Enable RLS
ALTER TABLE beta_testers ENABLE ROW LEVEL SECURITY;

-- Anyone can submit beta applications
CREATE POLICY "Anyone can submit beta applications"
  ON beta_testers
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Authenticated users can read beta testers (admin dashboard)
CREATE POLICY "Authenticated users can read beta testers"
  ON beta_testers
  FOR SELECT
  TO authenticated
  USING (true);

-- Authenticated users can update beta testers (for acceptance, onboarding status)
CREATE POLICY "Authenticated users can update beta testers"
  ON beta_testers
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
