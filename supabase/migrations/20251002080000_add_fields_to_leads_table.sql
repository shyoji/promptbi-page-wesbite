/*
  # Add comprehensive fields to leads table

  1. Changes
    - Add `phone` field for contact
    - Add `role_status` field (Student, Employed, Career Switcher, etc.)
    - Add `company_or_school` field
    - Add `job_title` field
    - Add `primary_goal` field
    - Add `experience_level` field
    - Add `biggest_challenge` field (text)
    - Add `timeline` field
    - Add `why_interested` field (text)
    - Add `message` field for backward compatibility

  2. Notes
    - All new fields are nullable to allow both simple and detailed forms
    - This aligns leads table with beta_testers structure
*/

-- Add fields to leads table if they don't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'leads' AND column_name = 'phone'
  ) THEN
    ALTER TABLE leads ADD COLUMN phone text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'leads' AND column_name = 'role_status'
  ) THEN
    ALTER TABLE leads ADD COLUMN role_status text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'leads' AND column_name = 'company_or_school'
  ) THEN
    ALTER TABLE leads ADD COLUMN company_or_school text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'leads' AND column_name = 'job_title'
  ) THEN
    ALTER TABLE leads ADD COLUMN job_title text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'leads' AND column_name = 'primary_goal'
  ) THEN
    ALTER TABLE leads ADD COLUMN primary_goal text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'leads' AND column_name = 'experience_level'
  ) THEN
    ALTER TABLE leads ADD COLUMN experience_level text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'leads' AND column_name = 'biggest_challenge'
  ) THEN
    ALTER TABLE leads ADD COLUMN biggest_challenge text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'leads' AND column_name = 'timeline'
  ) THEN
    ALTER TABLE leads ADD COLUMN timeline text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'leads' AND column_name = 'why_interested'
  ) THEN
    ALTER TABLE leads ADD COLUMN why_interested text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'leads' AND column_name = 'message'
  ) THEN
    ALTER TABLE leads ADD COLUMN message text;
  END IF;
END $$;
