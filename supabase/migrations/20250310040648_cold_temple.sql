/*
  # Platform Schema Update

  1. New Tables
    - platforms: Main platform information including pricing and features
    - conditions: Mental health conditions
    - platform_conditions: Links platforms to conditions with effectiveness scores
    - platform_ratings: Platform ratings across different categories

  2. Security
    - RLS enabled on all tables
    - Policies for public read access and admin management
    - Appropriate constraints and checks

  3. Changes
    - Added updated_at triggers
    - Included initial seed data with conditional inserts
*/

-- Drop existing triggers if they exist
DROP TRIGGER IF EXISTS update_platforms_updated_at ON platforms;
DROP TRIGGER IF EXISTS update_conditions_updated_at ON conditions;

-- Create or replace updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create platforms table if it doesn't exist
CREATE TABLE IF NOT EXISTS platforms (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text NOT NULL UNIQUE,
  description text,
  short_description text,
  website_url text,
  price_range_min integer,
  price_range_max integer,
  billing_frequency text CHECK (billing_frequency = ANY (ARRAY['weekly', 'monthly', 'yearly'])),
  accepts_insurance boolean DEFAULT false,
  offers_medication boolean DEFAULT false,
  communication_methods text[] DEFAULT '{}',
  features jsonb DEFAULT '{}'::jsonb,
  status text DEFAULT 'active' CHECK (status = ANY (ARRAY['active', 'inactive', 'deprecated'])),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create conditions table if it doesn't exist
CREATE TABLE IF NOT EXISTS conditions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text NOT NULL UNIQUE,
  description text,
  symptoms text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create platform_conditions table if it doesn't exist
CREATE TABLE IF NOT EXISTS platform_conditions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  platform_id uuid REFERENCES platforms(id) ON DELETE CASCADE,
  condition_id uuid REFERENCES conditions(id) ON DELETE CASCADE,
  effectiveness_score numeric CHECK (effectiveness_score >= 0 AND effectiveness_score <= 5),
  description text,
  created_at timestamptz DEFAULT now(),
  UNIQUE(platform_id, condition_id)
);

-- Create platform_ratings table if it doesn't exist
CREATE TABLE IF NOT EXISTS platform_ratings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  platform_id uuid REFERENCES platforms(id) ON DELETE CASCADE,
  category text NOT NULL,
  score numeric CHECK (score >= 0 AND score <= 5),
  description text,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE platforms ENABLE ROW LEVEL SECURITY;
ALTER TABLE conditions ENABLE ROW LEVEL SECURITY;
ALTER TABLE platform_conditions ENABLE ROW LEVEL SECURITY;
ALTER TABLE platform_ratings ENABLE ROW LEVEL SECURITY;

-- Add updated_at triggers
CREATE TRIGGER update_platforms_updated_at
  BEFORE UPDATE ON platforms
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_conditions_updated_at
  BEFORE UPDATE ON conditions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Drop existing policies if they exist
DROP POLICY IF EXISTS anyone_can_read_active_platforms ON platforms;
DROP POLICY IF EXISTS admins_can_manage_platforms ON platforms;
DROP POLICY IF EXISTS anyone_can_read_conditions ON conditions;
DROP POLICY IF EXISTS admins_can_manage_conditions ON conditions;
DROP POLICY IF EXISTS anyone_can_read_platform_conditions ON platform_conditions;
DROP POLICY IF EXISTS admins_can_manage_platform_conditions ON platform_conditions;
DROP POLICY IF EXISTS anyone_can_read_platform_ratings ON platform_ratings;
DROP POLICY IF EXISTS admins_can_manage_platform_ratings ON platform_ratings;

-- Create RLS Policies
CREATE POLICY "anyone_can_read_active_platforms"
  ON platforms
  FOR SELECT
  TO anon, authenticated
  USING (status = 'active');

CREATE POLICY "admins_can_manage_platforms"
  ON platforms
  FOR ALL
  TO admin
  USING (true)
  WITH CHECK (true);

CREATE POLICY "anyone_can_read_conditions"
  ON conditions
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "admins_can_manage_conditions"
  ON conditions
  FOR ALL
  TO admin
  USING (true)
  WITH CHECK (true);

CREATE POLICY "anyone_can_read_platform_conditions"
  ON platform_conditions
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "admins_can_manage_platform_conditions"
  ON platform_conditions
  FOR ALL
  TO admin
  USING (true)
  WITH CHECK (true);

CREATE POLICY "anyone_can_read_platform_ratings"
  ON platform_ratings
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "admins_can_manage_platform_ratings"
  ON platform_ratings
  FOR ALL
  TO admin
  USING (true)
  WITH CHECK (true);

-- Seed initial data with conditional inserts
DO $$
DECLARE
  betterhelp_id uuid;
  talkspace_id uuid;
  cerebral_id uuid;
  anxiety_id uuid;
  depression_id uuid;
  ptsd_id uuid;
  ocd_id uuid;
BEGIN
  -- Insert platforms if they don't exist
  INSERT INTO platforms (
    name, slug, description, short_description, website_url,
    price_range_min, price_range_max, billing_frequency,
    accepts_insurance, offers_medication, communication_methods, features
  )
  VALUES 
    (
      'BetterHelp',
      'betterhelp',
      'The world''s largest online therapy platform, offering messaging, phone, and video sessions on a subscription model.',
      'Large online therapy platform with multiple communication options',
      'https://www.betterhelp.com',
      6000,
      9000,
      'weekly',
      false,
      false,
      ARRAY['messaging', 'video', 'phone'],
      '{"therapist_count": 25000, "financial_aid": true, "group_sessions": true}'::jsonb
    )
  ON CONFLICT (slug) DO NOTHING
  RETURNING id INTO betterhelp_id;

  INSERT INTO platforms (
    name, slug, description, short_description, website_url,
    price_range_min, price_range_max, billing_frequency,
    accepts_insurance, offers_medication, communication_methods, features
  )
  VALUES 
    (
      'Talkspace',
      'talkspace',
      'Online therapy and psychiatry via text, audio, and video sessions, with medication options and insurance coverage.',
      'Online therapy with insurance coverage and medication management',
      'https://www.talkspace.com',
      6500,
      9900,
      'weekly',
      true,
      true,
      ARRAY['messaging', 'video', 'phone'],
      '{"therapist_count": 5000, "insurance_accepted": true, "psychiatry_available": true}'::jsonb
    )
  ON CONFLICT (slug) DO NOTHING
  RETURNING id INTO talkspace_id;

  INSERT INTO platforms (
    name, slug, description, short_description, website_url,
    price_range_min, price_range_max, billing_frequency,
    accepts_insurance, offers_medication, communication_methods, features
  )
  VALUES 
    (
      'Cerebral',
      'cerebral',
      'Subscription-based therapy and medication management for anxiety, depression, ADHD, and insomnia.',
      'Combined therapy and medication management platform',
      'https://www.cerebral.com',
      8500,
      32500,
      'monthly',
      true,
      true,
      ARRAY['messaging', 'video', 'phone'],
      '{"medication_management": true, "insurance_accepted": true, "care_counseling": true}'::jsonb
    )
  ON CONFLICT (slug) DO NOTHING
  RETURNING id INTO cerebral_id;

  -- Get existing platform IDs if they weren't just inserted
  IF betterhelp_id IS NULL THEN
    SELECT id INTO betterhelp_id FROM platforms WHERE slug = 'betterhelp';
  END IF;
  
  IF talkspace_id IS NULL THEN
    SELECT id INTO talkspace_id FROM platforms WHERE slug = 'talkspace';
  END IF;

  -- Insert conditions if they don't exist
  INSERT INTO conditions (name, slug, description, symptoms)
  VALUES
    (
      'Anxiety',
      'anxiety',
      'Anxiety disorders are characterized by persistent and excessive worry about various aspects of life.',
      ARRAY['Excessive worry', 'Restlessness', 'Difficulty concentrating', 'Sleep problems']
    )
  ON CONFLICT (slug) DO NOTHING
  RETURNING id INTO anxiety_id;

  INSERT INTO conditions (name, slug, description, symptoms)
  VALUES
    (
      'Depression',
      'depression',
      'Depression is a mood disorder causing persistent feelings of sadness and loss of interest.',
      ARRAY['Persistent sadness', 'Loss of interest', 'Changes in sleep', 'Fatigue']
    )
  ON CONFLICT (slug) DO NOTHING
  RETURNING id INTO depression_id;

  INSERT INTO conditions (name, slug, description, symptoms)
  VALUES
    (
      'PTSD',
      'ptsd',
      'Post-traumatic stress disorder develops after exposure to a traumatic event.',
      ARRAY['Flashbacks', 'Nightmares', 'Avoidance', 'Hypervigilance']
    )
  ON CONFLICT (slug) DO NOTHING
  RETURNING id INTO ptsd_id;

  INSERT INTO conditions (name, slug, description, symptoms)
  VALUES
    (
      'OCD',
      'ocd',
      'Obsessive-compulsive disorder involves recurring thoughts and repetitive behaviors.',
      ARRAY['Intrusive thoughts', 'Compulsive behaviors', 'Anxiety', 'Need for order']
    )
  ON CONFLICT (slug) DO NOTHING
  RETURNING id INTO ocd_id;

  -- Get existing condition IDs if they weren't just inserted
  IF anxiety_id IS NULL THEN
    SELECT id INTO anxiety_id FROM conditions WHERE slug = 'anxiety';
  END IF;
  
  IF depression_id IS NULL THEN
    SELECT id INTO depression_id FROM conditions WHERE slug = 'depression';
  END IF;
  
  IF ptsd_id IS NULL THEN
    SELECT id INTO ptsd_id FROM conditions WHERE slug = 'ptsd';
  END IF;

  -- Link platforms with conditions
  INSERT INTO platform_conditions (platform_id, condition_id, effectiveness_score, description)
  VALUES
    (
      betterhelp_id,
      anxiety_id,
      4.5,
      'Offers specialized treatment programs and experienced therapists for this condition.'
    )
  ON CONFLICT (platform_id, condition_id) DO NOTHING;

  INSERT INTO platform_conditions (platform_id, condition_id, effectiveness_score, description)
  VALUES
    (
      betterhelp_id,
      depression_id,
      4.5,
      'Offers specialized treatment programs and experienced therapists for this condition.'
    )
  ON CONFLICT (platform_id, condition_id) DO NOTHING;

  INSERT INTO platform_conditions (platform_id, condition_id, effectiveness_score, description)
  VALUES
    (
      talkspace_id,
      anxiety_id,
      4.7,
      'Comprehensive treatment approach combining therapy and medication management when needed.'
    )
  ON CONFLICT (platform_id, condition_id) DO NOTHING;

  INSERT INTO platform_conditions (platform_id, condition_id, effectiveness_score, description)
  VALUES
    (
      talkspace_id,
      depression_id,
      4.7,
      'Comprehensive treatment approach combining therapy and medication management when needed.'
    )
  ON CONFLICT (platform_id, condition_id) DO NOTHING;

  INSERT INTO platform_conditions (platform_id, condition_id, effectiveness_score, description)
  VALUES
    (
      talkspace_id,
      ptsd_id,
      4.7,
      'Comprehensive treatment approach combining therapy and medication management when needed.'
    )
  ON CONFLICT (platform_id, condition_id) DO NOTHING;

  -- Add platform ratings
  INSERT INTO platform_ratings (platform_id, category, score, description)
  SELECT 
    betterhelp_id,
    r.category,
    r.score,
    r.description
  FROM (VALUES 
    ('Therapist Qualifications', 4.5, 'High standards for therapist credentials and experience'),
    ('Platform Usability', 4.5, 'Intuitive interface with excellent mobile app'),
    ('Communication Options', 4.0, 'Multiple communication methods available'),
    ('Privacy & Security', 4.5, 'Strong encryption and HIPAA compliance'),
    ('Value & Affordability', 3.5, 'Reasonable pricing with financial aid available'),
    ('Client Satisfaction', 4.0, 'Generally positive user feedback')
  ) AS r(category, score, description)
  ON CONFLICT DO NOTHING;

  INSERT INTO platform_ratings (platform_id, category, score, description)
  SELECT 
    talkspace_id,
    r.category,
    r.score,
    r.description
  FROM (VALUES 
    ('Therapist Qualifications', 4.5, 'Licensed professionals with specialized training'),
    ('Platform Usability', 4.5, 'Well-designed platform with good user experience'),
    ('Communication Options', 4.0, 'Flexible communication options'),
    ('Privacy & Security', 4.5, 'HIPAA-compliant with strong security measures'),
    ('Value & Affordability', 4.0, 'Insurance coverage makes therapy more accessible'),
    ('Client Satisfaction', 4.5, 'High user satisfaction rates')
  ) AS r(category, score, description)
  ON CONFLICT DO NOTHING;
END $$;