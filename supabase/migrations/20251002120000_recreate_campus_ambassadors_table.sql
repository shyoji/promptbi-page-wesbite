/*
  # Recreate Campus Ambassadors Table

  1. Tables
    - Drop existing `campus_ambassadors` table
    - Create new `campus_ambassadors` table with complete structure:
      - `id` (uuid, primary key)
      - `email` (text, unique, required)
      - `name` (text, required)
      - `phone` (text)
      - `campus_name` (text, required)
      - `country` (text, required)
      - `why_interested` (text)
      - `accepted` (boolean, default false)
      - `status` (text, default 'pending')
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `campus_ambassadors` table
    - Add policy for anonymous/authenticated users to submit applications
    - Add policy for authenticated users to read ambassadors
    - Add policy for authenticated users to update ambassadors

  3. Indexes
    - Index on email for lookups
    - Index on status for filtering
    - Index on country for filtering
    - Index on created_at for sorting
*/

-- Drop existing table if it exists
DROP TABLE IF EXISTS campus_ambassadors CASCADE;

-- Create campus ambassadors table with complete structure
CREATE TABLE campus_ambassadors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  name text NOT NULL,
  phone text,
  campus_name text NOT NULL,
  country text NOT NULL,
  why_interested text,
  accepted boolean DEFAULT false,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Create indexes for performance
CREATE INDEX idx_campus_ambassadors_email ON campus_ambassadors(email);
CREATE INDEX idx_campus_ambassadors_status ON campus_ambassadors(status);
CREATE INDEX idx_campus_ambassadors_country ON campus_ambassadors(country);
CREATE INDEX idx_campus_ambassadors_created_at ON campus_ambassadors(created_at DESC);

-- Enable RLS
ALTER TABLE campus_ambassadors ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can apply as campus ambassador"
  ON campus_ambassadors
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read campus ambassadors"
  ON campus_ambassadors
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update campus ambassadors"
  ON campus_ambassadors
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
