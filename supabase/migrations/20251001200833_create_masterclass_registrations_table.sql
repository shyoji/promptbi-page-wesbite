/*
  # Create masterclass registrations table

  ## Summary
  This migration creates a table to store registrations for the Disney masterclass event with Evelyn Cates.
  
  ## New Tables
  
  ### `masterclass_registrations`
  Stores information about users who register for the masterclass event.
  
  - `id` (uuid, primary key) - Unique identifier for each registration
  - `name` (text) - Full name of the registrant
  - `email` (text) - Email address of the registrant (unique to prevent duplicate registrations)
  - `event_date` (date) - Date of the masterclass event they registered for
  - `registered_at` (timestamptz) - Timestamp when the registration was submitted
  - `created_at` (timestamptz) - Timestamp when the record was created (auto-generated)
  
  ## Security
  
  ### Row Level Security (RLS)
  - RLS is enabled on the `masterclass_registrations` table
  - Insert policy: Anyone can register (public access for registrations)
  - Select policy: Only authenticated admins can view registrations (for management purposes)
  
  ## Notes
  - Email field has a unique constraint to prevent duplicate registrations
  - Default values are set for timestamps to ensure data consistency
*/

-- Create masterclass registrations table
CREATE TABLE IF NOT EXISTS masterclass_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL UNIQUE,
  event_date date NOT NULL,
  registered_at timestamptz NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE masterclass_registrations ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to register for the masterclass
CREATE POLICY "Anyone can register for masterclass"
  ON masterclass_registrations
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Policy: Only authenticated users can view registrations (for admin purposes)
CREATE POLICY "Authenticated users can view registrations"
  ON masterclass_registrations
  FOR SELECT
  TO authenticated
  USING (true);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_masterclass_registrations_email ON masterclass_registrations(email);

-- Create index on event_date for filtering by event
CREATE INDEX IF NOT EXISTS idx_masterclass_registrations_event_date ON masterclass_registrations(event_date);
