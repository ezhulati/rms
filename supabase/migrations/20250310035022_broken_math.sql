/*
  # Initial Schema Setup

  1. New Tables
    - `platforms`: Online therapy platforms
      - Basic info (name, description, etc.)
      - Pricing and billing details
      - Features and communication methods
    - `conditions`: Mental health conditions
      - Basic info and symptoms
    - `platform_conditions`: Platform effectiveness for conditions
      - Links platforms to conditions with effectiveness scores
    - `platform_ratings`: Platform ratings by category
      - Detailed ratings across different aspects

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access
    - Add admin-only write access

  3. Data
    - Initial seed data for platforms
    - Initial seed data for conditions
    - Initial platform ratings and condition relationships
*/

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
DO $$ 
BEGIN
  ALTER TABLE platforms ENABLE ROW LEVEL SECURITY;
  ALTER TABLE conditions ENABLE ROW LEVEL SECURITY;
  ALTER TABLE platform_conditions ENABLE ROW LEVEL SECURITY;
  ALTER TABLE platform_ratings ENABLE ROW LEVEL SECURITY;
EXCEPTION
  WHEN others THEN NULL;
END $$;

-- Create policies if they don't exist
DO $$ 
BEGIN
  -- Platforms policies
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'platforms' AND policyname = 'Anyone can read active platforms'
  ) THEN
    CREATE POLICY "Anyone can read active platforms"
      ON platforms
      FOR SELECT
      TO anon, authenticated
      USING (status = 'active');
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'platforms' AND policyname = 'Admins can manage platforms'
  ) THEN
    CREATE POLICY "Admins can manage platforms"
      ON platforms
      FOR ALL
      TO admin
      USING (true)
      WITH CHECK (true);
  END IF;

  -- Conditions policies
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'conditions' AND policyname = 'Anyone can read conditions'
  ) THEN
    CREATE POLICY "Anyone can read conditions"
      ON conditions
      FOR SELECT
      TO anon, authenticated
      USING (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'conditions' AND policyname = 'Admins can manage conditions'
  ) THEN
    CREATE POLICY "Admins can manage conditions"
      ON conditions
      FOR ALL
      TO admin
      USING (true)
      WITH CHECK (true);
  END IF;

  -- Platform conditions policies
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'platform_conditions' AND policyname = 'Anyone can read platform conditions'
  ) THEN
    CREATE POLICY "Anyone can read platform conditions"
      ON platform_conditions
      FOR SELECT
      TO anon, authenticated
      USING (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'platform_conditions' AND policyname = 'Admins can manage platform conditions'
  ) THEN
    CREATE POLICY "Admins can manage platform conditions"
      ON platform_conditions
      FOR ALL
      TO admin
      USING (true)
      WITH CHECK (true);
  END IF;

  -- Platform ratings policies
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'platform_ratings' AND policyname = 'Anyone can read platform ratings'
  ) THEN
    CREATE POLICY "Anyone can read platform ratings"
      ON platform_ratings
      FOR SELECT
      TO anon, authenticated
      USING (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'platform_ratings' AND policyname = 'Admins can manage platform ratings'
  ) THEN
    CREATE POLICY "Admins can manage platform ratings"
      ON platform_ratings
      FOR ALL
      TO admin
      USING (true)
      WITH CHECK (true);
  END IF;
END $$;

-- Create updated_at trigger function if it doesn't exist
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Add updated_at triggers if they don't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger 
    WHERE tgname = 'update_platforms_updated_at'
  ) THEN
    CREATE TRIGGER update_platforms_updated_at
      BEFORE UPDATE ON platforms
      FOR EACH ROW
      EXECUTE FUNCTION update_updated_at_column();
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger 
    WHERE tgname = 'update_conditions_updated_at'
  ) THEN
    CREATE TRIGGER update_conditions_updated_at
      BEFORE UPDATE ON conditions
      FOR EACH ROW
      EXECUTE FUNCTION update_updated_at_column();
  END IF;
END $$;

-- Seed initial data
INSERT INTO platforms (
  name,
  slug,
  description,
  short_description,
  website_url,
  price_range_min,
  price_range_max,
  billing_frequency,
  accepts_insurance,
  offers_medication,
  communication_methods,
  features
) VALUES 
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
  ),
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
  ),
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
ON CONFLICT (slug) DO NOTHING;

INSERT INTO conditions (
  name,
  slug,
  description,
  symptoms
) VALUES
  (
    'Anxiety',
    'anxiety',
    'Anxiety disorders are characterized by persistent and excessive worry about various aspects of life.',
    ARRAY['Excessive worry', 'Restlessness', 'Difficulty concentrating', 'Sleep problems']
  ),
  (
    'Depression',
    'depression',
    'Depression is a mood disorder causing persistent feelings of sadness and loss of interest.',
    ARRAY['Persistent sadness', 'Loss of interest', 'Changes in sleep', 'Fatigue']
  ),
  (
    'PTSD',
    'ptsd',
    'Post-traumatic stress disorder develops after exposure to a traumatic event.',
    ARRAY['Flashbacks', 'Nightmares', 'Avoidance', 'Hypervigilance']
  ),
  (
    'OCD',
    'ocd',
    'Obsessive-compulsive disorder involves recurring thoughts and repetitive behaviors.',
    ARRAY['Intrusive thoughts', 'Compulsive behaviors', 'Anxiety', 'Need for order']
  )
ON CONFLICT (slug) DO NOTHING;

-- Link platforms with conditions
INSERT INTO platform_conditions (
  platform_id,
  condition_id,
  effectiveness_score,
  description
)
SELECT 
  p.id,
  c.id,
  4.5,
  'Offers specialized treatment programs and experienced therapists for this condition.'
FROM platforms p
CROSS JOIN conditions c
WHERE p.slug = 'betterhelp' AND c.slug IN ('anxiety', 'depression')
ON CONFLICT (platform_id, condition_id) DO NOTHING;

INSERT INTO platform_conditions (
  platform_id,
  condition_id,
  effectiveness_score,
  description
)
SELECT 
  p.id,
  c.id,
  4.7,
  'Comprehensive treatment approach combining therapy and medication management when needed.'
FROM platforms p
CROSS JOIN conditions c
WHERE p.slug = 'talkspace' AND c.slug IN ('anxiety', 'depression', 'ptsd')
ON CONFLICT (platform_id, condition_id) DO NOTHING;

-- Add platform ratings
INSERT INTO platform_ratings (
  platform_id,
  category,
  score,
  description
)
SELECT 
  p.id,
  r.category,
  r.score,
  r.description
FROM platforms p
CROSS JOIN (
  VALUES 
    ('Therapist Qualifications', 4.5, 'High standards for therapist credentials and experience'),
    ('Platform Usability', 4.5, 'Intuitive interface with excellent mobile app'),
    ('Communication Options', 4.0, 'Multiple communication methods available'),
    ('Privacy & Security', 4.5, 'Strong encryption and HIPAA compliance'),
    ('Value & Affordability', 3.5, 'Reasonable pricing with financial aid available'),
    ('Client Satisfaction', 4.0, 'Generally positive user feedback')
) AS r(category, score, description)
WHERE p.slug = 'betterhelp';

INSERT INTO platform_ratings (
  platform_id,
  category,
  score,
  description
)
SELECT 
  p.id,
  r.category,
  r.score,
  r.description
FROM platforms p
CROSS JOIN (
  VALUES 
    ('Therapist Qualifications', 4.5, 'Licensed professionals with specialized training'),
    ('Platform Usability', 4.5, 'Well-designed platform with good user experience'),
    ('Communication Options', 4.0, 'Flexible communication options'),
    ('Privacy & Security', 4.5, 'HIPAA-compliant with strong security measures'),
    ('Value & Affordability', 4.0, 'Insurance coverage makes therapy more accessible'),
    ('Client Satisfaction', 4.5, 'High user satisfaction rates')
) AS r(category, score, description)
WHERE p.slug = 'talkspace';