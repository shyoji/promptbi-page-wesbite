/*
  # Create campus ambassadors table

  1. New Tables
    - `campus_ambassadors`
      - `id` (uuid, primary key)
      - `email` (text, unique, not null)
      - `name` (text, not null)
      - `phone` (text)
      - `campus_name` (text, not null) - University/College name
      - `country` (text, not null) - Country where campus is located
      - `why_interested` (text) - Why they want to be an ambassador
      - `accepted` (boolean, default false) - Accepted into program
      - `onboarded` (boolean, default false) - Completed onboarding
      - `status` (text) - active, inactive, pending
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on campus_ambassadors table
    - Allow public insert (for applications)
    - Authenticated read only (admin dashboard)

  3. Notes
    - Campus ambassadors help spread PromptBI in universities
    - Tracks ambassador program applications and status
*/

-- Create campus ambassadors table
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

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_campus_ambassadors_email ON campus_ambassadors(email);
CREATE INDEX IF NOT EXISTS idx_campus_ambassadors_status ON campus_ambassadors(status);
CREATE INDEX IF NOT EXISTS idx_campus_ambassadors_created_at ON campus_ambassadors(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_campus_ambassadors_country ON campus_ambassadors(country);

-- Enable RLS
ALTER TABLE campus_ambassadors ENABLE ROW LEVEL SECURITY;

-- Anyone can apply to be a campus ambassador
CREATE POLICY "Anyone can apply as campus ambassador"
  ON campus_ambassadors
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Authenticated users can read campus ambassadors (admin dashboard)
CREATE POLICY "Authenticated users can read campus ambassadors"
  ON campus_ambassadors
  FOR SELECT
  TO authenticated
  USING (true);

-- Authenticated users can update campus ambassadors (for acceptance, status changes)
CREATE POLICY "Authenticated users can update campus ambassadors"
  ON campus_ambassadors
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
