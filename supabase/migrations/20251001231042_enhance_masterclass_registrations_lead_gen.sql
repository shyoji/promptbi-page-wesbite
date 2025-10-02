/*
  # Enhanced Masterclass Registrations for Lead Generation

  1. Schema Changes
    - Add `role_type` (student, professional, career_changer)
    - Add `technical_level` (non_technical, beginner, intermediate, advanced)
    - Add `current_tools` (array of tools they currently use)
    - Add `tools_other` (text field for other tools)
    - Add `biggest_challenge` (text field for open-ended response)
    - Add `company_size` (solo, small, medium, large, enterprise)
    - Add `job_title` (text field)
    - Add `years_experience` (integer)
    - Add `learning_goal` (text field)
    - Add `lead_score` (calculated qualification score)
    - Add `form_completion_time` (how long they took to fill the form)

  2. Security
    - Maintain existing RLS policies
    - Allow anonymous inserts for registration
    - Authenticated users can view/update

  3. Important Notes
    - Uses IF NOT EXISTS to safely add new columns
    - Preserves existing data
    - All new fields are nullable for backwards compatibility
*/

-- Add new columns for enhanced lead qualification
DO $$ 
BEGIN
  -- Basic info
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'masterclass_registrations' AND column_name = 'role_type'
  ) THEN
    ALTER TABLE masterclass_registrations 
    ADD COLUMN role_type text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'masterclass_registrations' AND column_name = 'technical_level'
  ) THEN
    ALTER TABLE masterclass_registrations 
    ADD COLUMN technical_level text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'masterclass_registrations' AND column_name = 'current_tools'
  ) THEN
    ALTER TABLE masterclass_registrations 
    ADD COLUMN current_tools text[];
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'masterclass_registrations' AND column_name = 'tools_other'
  ) THEN
    ALTER TABLE masterclass_registrations 
    ADD COLUMN tools_other text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'masterclass_registrations' AND column_name = 'biggest_challenge'
  ) THEN
    ALTER TABLE masterclass_registrations 
    ADD COLUMN biggest_challenge text;
  END IF;

  -- Professional info
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'masterclass_registrations' AND column_name = 'company_size'
  ) THEN
    ALTER TABLE masterclass_registrations 
    ADD COLUMN company_size text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'masterclass_registrations' AND column_name = 'job_title'
  ) THEN
    ALTER TABLE masterclass_registrations 
    ADD COLUMN job_title text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'masterclass_registrations' AND column_name = 'years_experience'
  ) THEN
    ALTER TABLE masterclass_registrations 
    ADD COLUMN years_experience integer;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'masterclass_registrations' AND column_name = 'learning_goal'
  ) THEN
    ALTER TABLE masterclass_registrations 
    ADD COLUMN learning_goal text;
  END IF;

  -- Metrics
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'masterclass_registrations' AND column_name = 'lead_score'
  ) THEN
    ALTER TABLE masterclass_registrations 
    ADD COLUMN lead_score integer DEFAULT 0;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'masterclass_registrations' AND column_name = 'form_completion_time'
  ) THEN
    ALTER TABLE masterclass_registrations 
    ADD COLUMN form_completion_time integer;
  END IF;
END $$;

-- Create index for lead scoring queries
CREATE INDEX IF NOT EXISTS idx_masterclass_lead_score 
ON masterclass_registrations(lead_score DESC);

-- Create index for role type filtering
CREATE INDEX IF NOT EXISTS idx_masterclass_role_type 
ON masterclass_registrations(role_type);

-- Create index for technical level filtering
CREATE INDEX IF NOT EXISTS idx_masterclass_technical_level 
ON masterclass_registrations(technical_level);
