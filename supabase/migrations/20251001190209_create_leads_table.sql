/*
  # Create leads and waitlist tables for PromptBI

  1. New Tables
    - `leads`
      - `id` (uuid, primary key)
      - `email` (text, unique, not null)
      - `name` (text)
      - `source` (text) - where they signed up from (hero, exit-popup, etc)
      - `user_type` (text) - beginner, professional, student, etc
      - `created_at` (timestamptz)
    
    - `quiz_responses`
      - `id` (uuid, primary key)
      - `email` (text, not null)
      - `role` (text)
      - `learning_goal` (text)
      - `experience_level` (text)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on both tables
    - Add policies for public insert access (for lead capture)
    - Add policies for authenticated read access (for admin dashboard)

  3. Notes
    - These tables support lead generation and conversion optimization
    - Email is unique in leads table to prevent duplicates
    - Quiz responses help with personalization and segmentation
*/

-- Create leads table
CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  name text,
  source text DEFAULT 'unknown',
  user_type text,
  created_at timestamptz DEFAULT now()
);

-- Create quiz responses table
CREATE TABLE IF NOT EXISTS quiz_responses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  role text,
  learning_goal text,
  experience_level text,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_responses ENABLE ROW LEVEL SECURITY;

-- Public can insert leads (for signup forms)
CREATE POLICY "Anyone can submit leads"
  ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Public can insert quiz responses
CREATE POLICY "Anyone can submit quiz responses"
  ON quiz_responses
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Authenticated users can read all leads
CREATE POLICY "Authenticated users can read leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (true);

-- Authenticated users can read all quiz responses
CREATE POLICY "Authenticated users can read quiz responses"
  ON quiz_responses
  FOR SELECT
  TO authenticated
  USING (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS leads_email_idx ON leads(email);
CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS quiz_responses_email_idx ON quiz_responses(email);
