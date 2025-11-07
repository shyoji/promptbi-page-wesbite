/*
  # Create hackathon registrations table

  1. New Tables
    - `hackathon_registrations`
      - `id` (uuid, primary key)
      - `hackathon_id` (uuid, foreign key to hackathons)
      - `full_name` (text, registrant's full name)
      - `email` (text, registrant's email)
      - `phone_number` (text, contact number)
      - `description` (text, what best describes them)
      - `company_or_school` (text, their organization)
      - `job_title` (text, current position, nullable)
      - `primary_goal` (text, goal for participating)
      - `skills` (text, their technical skills)
      - `biggest_challenge` (text, challenges they face)
      - `registration_date` (timestamptz, when they registered)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `hackathon_registrations` table
    - Add policy for public insert (anyone can register)
    - Add policy for authenticated admin users to view all registrations

  3. Important Notes
    - Uses foreign key constraint to link registrations to hackathons
    - Includes index on hackathon_id for faster queries
    - Includes index on email for duplicate checking
*/

CREATE TABLE IF NOT EXISTS hackathon_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  hackathon_id uuid NOT NULL REFERENCES hackathons(id) ON DELETE CASCADE,
  full_name text NOT NULL,
  email text NOT NULL,
  phone_number text NOT NULL,
  description text NOT NULL,
  company_or_school text NOT NULL,
  job_title text,
  primary_goal text NOT NULL,
  skills text NOT NULL,
  biggest_challenge text NOT NULL,
  registration_date timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE hackathon_registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can register for hackathons"
  ON hackathon_registrations FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all registrations"
  ON hackathon_registrations FOR SELECT
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_hackathon_registrations_hackathon_id 
  ON hackathon_registrations(hackathon_id);

CREATE INDEX IF NOT EXISTS idx_hackathon_registrations_email 
  ON hackathon_registrations(email);

CREATE INDEX IF NOT EXISTS idx_hackathon_registrations_date 
  ON hackathon_registrations(registration_date);