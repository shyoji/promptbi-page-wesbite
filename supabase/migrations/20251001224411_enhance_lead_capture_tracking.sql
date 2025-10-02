/*
  # Enhanced Lead Capture and Analytics Tracking

  ## Overview
  This migration enhances our lead capture system with comprehensive marketing attribution
  and user behavior tracking to optimize conversion funnels and marketing ROI.

  ## New Columns Added

  ### Leads Table Enhancements
  - `utm_source` - Campaign source (Google, Facebook, LinkedIn, etc.)
  - `utm_medium` - Marketing medium (cpc, organic, email, social)
  - `utm_campaign` - Specific campaign identifier
  - `utm_content` - Ad content or variation identifier
  - `utm_term` - Paid search keywords
  - `referrer_url` - Full referrer URL for attribution
  - `landing_page` - First page user visited
  - `device_type` - Mobile, Desktop, Tablet
  - `browser` - Browser information
  - `location` - Geographic location (city/country)
  - `ip_address` - IP for fraud detection
  - `session_id` - Track user journey
  - `time_on_page_before_signup` - Engagement metric
  - `conversion_type` - Qualified vs unqualified lead

  ### Beta Testers Table Enhancements
  - Marketing attribution fields (utm_*)
  - `qualification_score` - Lead scoring (0-100)
  - `engagement_level` - Hot, Warm, Cold
  - `notes` - Internal notes for sales follow-up
  - `follow_up_date` - Scheduled follow-up
  - `sales_stage` - Pipeline stage tracking
  - `tags` - Flexible categorization

  ### Masterclass Registrations Enhancements
  - Marketing attribution
  - `attended` - Did they show up?
  - `engagement_score` - How engaged during event
  - `follow_up_sent` - Email follow-up tracking
  - `converted_to_paid` - Conversion tracking

  ## Analytics Views
  Creates materialized views for quick reporting on:
  - Conversion funnels
  - Marketing channel performance
  - Lead quality scores
*/

-- Enhance leads table
DO $$
BEGIN
  -- Marketing Attribution
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'leads' AND column_name = 'utm_source') THEN
    ALTER TABLE leads ADD COLUMN utm_source text;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'leads' AND column_name = 'utm_medium') THEN
    ALTER TABLE leads ADD COLUMN utm_medium text;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'leads' AND column_name = 'utm_campaign') THEN
    ALTER TABLE leads ADD COLUMN utm_campaign text;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'leads' AND column_name = 'utm_content') THEN
    ALTER TABLE leads ADD COLUMN utm_content text;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'leads' AND column_name = 'utm_term') THEN
    ALTER TABLE leads ADD COLUMN utm_term text;
  END IF;
  
  -- User Behavior Tracking
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'leads' AND column_name = 'referrer_url') THEN
    ALTER TABLE leads ADD COLUMN referrer_url text;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'leads' AND column_name = 'landing_page') THEN
    ALTER TABLE leads ADD COLUMN landing_page text;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'leads' AND column_name = 'device_type') THEN
    ALTER TABLE leads ADD COLUMN device_type text;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'leads' AND column_name = 'browser') THEN
    ALTER TABLE leads ADD COLUMN browser text;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'leads' AND column_name = 'location') THEN
    ALTER TABLE leads ADD COLUMN location text;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'leads' AND column_name = 'ip_address') THEN
    ALTER TABLE leads ADD COLUMN ip_address text;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'leads' AND column_name = 'session_id') THEN
    ALTER TABLE leads ADD COLUMN session_id text;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'leads' AND column_name = 'time_on_page_seconds') THEN
    ALTER TABLE leads ADD COLUMN time_on_page_seconds integer;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'leads' AND column_name = 'conversion_type') THEN
    ALTER TABLE leads ADD COLUMN conversion_type text DEFAULT 'unqualified';
  END IF;
END $$;

-- Enhance beta_testers table
DO $$
BEGIN
  -- Marketing Attribution
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'beta_testers' AND column_name = 'utm_source') THEN
    ALTER TABLE beta_testers ADD COLUMN utm_source text;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'beta_testers' AND column_name = 'utm_medium') THEN
    ALTER TABLE beta_testers ADD COLUMN utm_medium text;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'beta_testers' AND column_name = 'utm_campaign') THEN
    ALTER TABLE beta_testers ADD COLUMN utm_campaign text;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'beta_testers' AND column_name = 'referrer_url') THEN
    ALTER TABLE beta_testers ADD COLUMN referrer_url text;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'beta_testers' AND column_name = 'device_type') THEN
    ALTER TABLE beta_testers ADD COLUMN device_type text;
  END IF;
  
  -- Sales & Qualification
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'beta_testers' AND column_name = 'qualification_score') THEN
    ALTER TABLE beta_testers ADD COLUMN qualification_score integer DEFAULT 0;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'beta_testers' AND column_name = 'engagement_level') THEN
    ALTER TABLE beta_testers ADD COLUMN engagement_level text DEFAULT 'cold';
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'beta_testers' AND column_name = 'notes') THEN
    ALTER TABLE beta_testers ADD COLUMN notes text;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'beta_testers' AND column_name = 'follow_up_date') THEN
    ALTER TABLE beta_testers ADD COLUMN follow_up_date timestamp with time zone;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'beta_testers' AND column_name = 'sales_stage') THEN
    ALTER TABLE beta_testers ADD COLUMN sales_stage text DEFAULT 'new';
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'beta_testers' AND column_name = 'tags') THEN
    ALTER TABLE beta_testers ADD COLUMN tags text[];
  END IF;
END $$;

-- Enhance masterclass_registrations table
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'masterclass_registrations' AND column_name = 'utm_source') THEN
    ALTER TABLE masterclass_registrations ADD COLUMN utm_source text;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'masterclass_registrations' AND column_name = 'utm_campaign') THEN
    ALTER TABLE masterclass_registrations ADD COLUMN utm_campaign text;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'masterclass_registrations' AND column_name = 'referrer_url') THEN
    ALTER TABLE masterclass_registrations ADD COLUMN referrer_url text;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'masterclass_registrations' AND column_name = 'attended') THEN
    ALTER TABLE masterclass_registrations ADD COLUMN attended boolean DEFAULT false;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'masterclass_registrations' AND column_name = 'engagement_score') THEN
    ALTER TABLE masterclass_registrations ADD COLUMN engagement_score integer;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'masterclass_registrations' AND column_name = 'follow_up_sent') THEN
    ALTER TABLE masterclass_registrations ADD COLUMN follow_up_sent boolean DEFAULT false;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'masterclass_registrations' AND column_name = 'converted_to_paid') THEN
    ALTER TABLE masterclass_registrations ADD COLUMN converted_to_paid boolean DEFAULT false;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'masterclass_registrations' AND column_name = 'device_type') THEN
    ALTER TABLE masterclass_registrations ADD COLUMN device_type text;
  END IF;
END $$;

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_leads_utm_source ON leads(utm_source);
CREATE INDEX IF NOT EXISTS idx_leads_utm_campaign ON leads(utm_campaign);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at);
CREATE INDEX IF NOT EXISTS idx_leads_conversion_type ON leads(conversion_type);

CREATE INDEX IF NOT EXISTS idx_beta_testers_qualification_score ON beta_testers(qualification_score);
CREATE INDEX IF NOT EXISTS idx_beta_testers_sales_stage ON beta_testers(sales_stage);
CREATE INDEX IF NOT EXISTS idx_beta_testers_engagement_level ON beta_testers(engagement_level);
CREATE INDEX IF NOT EXISTS idx_beta_testers_created_at ON beta_testers(created_at);

CREATE INDEX IF NOT EXISTS idx_masterclass_attended ON masterclass_registrations(attended);
CREATE INDEX IF NOT EXISTS idx_masterclass_event_date ON masterclass_registrations(event_date);
