/*
  # Initial Data Seeding

  1. Purpose
    - Seed initial platform data
    - Add common mental health conditions
    - Create sample comparisons
    - Set up basic ratings

  2. Notes
    - Only includes essential starter data
    - Focuses on major platforms and conditions
    - Provides foundation for content team
*/

-- Seed initial platforms
INSERT INTO platforms (name, slug, description, short_description, website_url, price_range_min, price_range_max, billing_frequency, accepts_insurance, offers_medication, communication_methods, features) 
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
  );

-- Seed initial conditions
INSERT INTO conditions (name, slug, description, symptoms)
VALUES
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
  );

-- Seed platform conditions
INSERT INTO platform_conditions (platform_id, condition_id, effectiveness_score, description)
SELECT 
  p.id,
  c.id,
  4.5,
  'Offers specialized treatment programs and experienced therapists for this condition.'
FROM platforms p
CROSS JOIN conditions c
WHERE p.slug = 'betterhelp' AND c.slug IN ('anxiety', 'depression');

INSERT INTO platform_conditions (platform_id, condition_id, effectiveness_score, description)
SELECT 
  p.id,
  c.id,
  4.7,
  'Comprehensive treatment approach combining therapy and medication management when needed.'
FROM platforms p
CROSS JOIN conditions c
WHERE p.slug = 'talkspace' AND c.slug IN ('anxiety', 'depression', 'ptsd');

-- Seed initial platform ratings
INSERT INTO platform_ratings (platform_id, category, score, description)
SELECT 
  p.id,
  r.category,
  r.score,
  r.rating_description
FROM platforms p
CROSS JOIN (
  VALUES 
    ('Therapist Qualifications', 4.5, 'High standards for therapist credentials and experience'),
    ('Platform Usability', 4.5, 'Intuitive interface with excellent mobile app'),
    ('Communication Options', 4.0, 'Multiple communication methods available'),
    ('Privacy & Security', 4.5, 'Strong encryption and HIPAA compliance'),
    ('Value & Affordability', 3.5, 'Reasonable pricing with financial aid available'),
    ('Client Satisfaction', 4.0, 'Generally positive user feedback')
) AS r(category, score, rating_description)
WHERE p.slug = 'betterhelp';

INSERT INTO platform_ratings (platform_id, category, score, description)
SELECT 
  p.id,
  r.category,
  r.score,
  r.rating_description
FROM platforms p
CROSS JOIN (
  VALUES 
    ('Therapist Qualifications', 4.5, 'Licensed professionals with specialized training'),
    ('Platform Usability', 4.5, 'Well-designed platform with good user experience'),
    ('Communication Options', 4.0, 'Flexible communication options'),
    ('Privacy & Security', 4.5, 'HIPAA-compliant with strong security measures'),
    ('Value & Affordability', 4.0, 'Insurance coverage makes therapy more accessible'),
    ('Client Satisfaction', 4.5, 'High user satisfaction rates')
) AS r(category, score, rating_description)
WHERE p.slug = 'talkspace';