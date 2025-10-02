/*
  # Add missing columns to campus_ambassadors table

  1. Changes
    - Add name column (text, required)
    - Add phone column (text, optional)
    - Add campus_name column (text, required)
    - Add country column (text, required)
    - Add why_interested column (text, optional)
    - Add accepted column (boolean, default false)
    - Add onboarded column (boolean, default false)
    - Add status column (text, default 'pending')
    - Add created_at column (timestamptz, default now())

  2. Indexes
    - Add indexes for better query performance

  3. Security
    - Ensure RLS policies are in place for public insertions
*/

-- Add missing columns to campus_ambassadors table
ALTER TABLE campus_ambassadors
  ADD COLUMN IF NOT EXISTS name text,
  ADD COLUMN IF NOT EXISTS phone text,
  ADD COLUMN IF NOT EXISTS campus_name text,
  ADD COLUMN IF NOT EXISTS country text,
  ADD COLUMN IF NOT EXISTS why_interested text,
  ADD COLUMN IF NOT EXISTS accepted boolean DEFAULT false,
  ADD COLUMN IF NOT EXISTS onboarded boolean DEFAULT false,
  ADD COLUMN IF NOT EXISTS status text DEFAULT 'pending',
  ADD COLUMN IF NOT EXISTS created_at timestamptz DEFAULT now();

-- Create indexes if they don't exist
CREATE INDEX IF NOT EXISTS idx_campus_ambassadors_status ON campus_ambassadors(status);
CREATE INDEX IF NOT EXISTS idx_campus_ambassadors_created_at ON campus_ambassadors(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_campus_ambassadors_country ON campus_ambassadors(country);

-- Ensure RLS is enabled
ALTER TABLE campus_ambassadors ENABLE ROW LEVEL SECURITY;

-- Create policies if they don't exist
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
