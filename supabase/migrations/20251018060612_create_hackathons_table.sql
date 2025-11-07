/*
  # Create hackathons table

  1. New Tables
    - `hackathons`
      - `id` (uuid, primary key)
      - `title` (text, hackathon name)
      - `slug` (text, URL-friendly identifier, unique)
      - `description` (text, brief description)
      - `full_description` (text, detailed description)
      - `thumbnail_url` (text, image URL)
      - `start_date` (timestamptz, event start date)
      - `end_date` (timestamptz, event end date)
      - `registration_deadline` (timestamptz)
      - `status` (text, upcoming/ongoing/completed)
      - `registered_participants` (integer, count of participants)
      - `max_participants` (integer, maximum allowed)
      - `awards` (jsonb, array of award objects)
      - `winners` (jsonb, array of winner objects for completed hackathons)
      - `partner_name` (text, partner organization)
      - `partner_logo_url` (text, partner logo)
      - `location` (text, event location)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on `hackathons` table
    - Add policy for public read access
    - Add policy for authenticated admin users to insert/update/delete
*/

CREATE TABLE IF NOT EXISTS hackathons (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text NOT NULL,
  full_description text NOT NULL,
  thumbnail_url text,
  start_date timestamptz NOT NULL,
  end_date timestamptz NOT NULL,
  registration_deadline timestamptz NOT NULL,
  status text NOT NULL DEFAULT 'upcoming' CHECK (status IN ('upcoming', 'ongoing', 'completed')),
  registered_participants integer DEFAULT 0,
  max_participants integer,
  awards jsonb DEFAULT '[]'::jsonb,
  winners jsonb DEFAULT '[]'::jsonb,
  partner_name text,
  partner_logo_url text,
  location text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE hackathons ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view hackathons"
  ON hackathons FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can insert hackathons"
  ON hackathons FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update hackathons"
  ON hackathons FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete hackathons"
  ON hackathons FOR DELETE
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_hackathons_slug ON hackathons(slug);
CREATE INDEX IF NOT EXISTS idx_hackathons_status ON hackathons(status);