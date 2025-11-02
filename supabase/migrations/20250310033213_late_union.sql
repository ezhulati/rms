/*
  # Initial Database Schema

  1. New Tables
    - `users` - User profiles and preferences
      - `id` (uuid, primary key) - Links to auth.users
      - `email` (text) - User's email
      - `full_name` (text) - User's full name
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
      - `preferences` (jsonb) - User preferences for notifications, etc.

    - `platforms` - Therapy platforms
      - `id` (uuid, primary key)
      - `name` (text) - Platform name
      - `slug` (text) - URL-friendly name
      - `description` (text) - Full description
      - `short_description` (text) - Brief description
      - `website_url` (text) - Official website
      - `price_range_min` (integer) - Minimum price in cents
      - `price_range_max` (integer) - Maximum price in cents
      - `billing_frequency` (text) - weekly/monthly/etc
      - `accepts_insurance` (boolean)
      - `offers_medication` (boolean)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
      - `features` (jsonb) - Platform features
      - `communication_methods` (text[]) - Available communication methods
      - `status` (text) - active/inactive/deprecated

    - `platform_reviews` - Editorial reviews of platforms
      - `id` (uuid, primary key)
      - `platform_id` (uuid) - Reference to platforms
      - `author_id` (uuid) - Reference to users (admin)
      - `content` (text) - Full review content
      - `rating` (decimal) - Overall rating
      - `pros` (text[]) - List of pros
      - `cons` (text[]) - List of cons
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
      - `published_at` (timestamp)
      - `status` (text) - draft/published/archived

    - `platform_ratings` - Detailed rating categories for platforms
      - `id` (uuid, primary key)
      - `platform_id` (uuid) - Reference to platforms
      - `category` (text) - Rating category
      - `score` (decimal) - Score for category
      - `description` (text) - Explanation of rating
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `conditions` - Mental health conditions
      - `id` (uuid, primary key)
      - `name` (text) - Condition name
      - `slug` (text) - URL-friendly name
      - `description` (text) - Full description
      - `symptoms` (text[]) - Common symptoms
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `platform_conditions` - Platform specialization in conditions
      - `id` (uuid, primary key)
      - `platform_id` (uuid) - Reference to platforms
      - `condition_id` (uuid) - Reference to conditions
      - `effectiveness_score` (decimal) - How effective for condition
      - `description` (text) - Details about treatment approach
      - `created_at` (timestamp)

    - `comparisons` - Platform comparisons
      - `id` (uuid, primary key)
      - `platform_a_id` (uuid) - First platform
      - `platform_b_id` (uuid) - Second platform
      - `content` (text) - Comparison content
      - `author_id` (uuid) - Reference to users (admin)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
      - `published_at` (timestamp)
      - `status` (text) - draft/published/archived

    - `user_reviews` - User reviews and ratings
      - `id` (uuid, primary key)
      - `user_id` (uuid) - Reference to users
      - `platform_id` (uuid) - Reference to platforms
      - `rating` (decimal) - Overall rating
      - `content` (text) - Review content
      - `pros` (text[]) - List of pros
      - `cons` (text[]) - List of cons
      - `created_at` (timestamp)
      - `status` (text) - pending/approved/rejected

  2. Security
    - Enable RLS on all tables
    - Add policies for appropriate access control
    - Ensure admin-only access for editorial content

  3. Indices
    - Add indices for frequently queried columns
    - Add unique constraints where appropriate
*/

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  full_name text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  preferences jsonb DEFAULT '{}'::jsonb,
  
  CONSTRAINT users_email_check CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

-- Platforms table
CREATE TABLE IF NOT EXISTS platforms (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  short_description text,
  website_url text,
  price_range_min integer,
  price_range_max integer,
  billing_frequency text CHECK (billing_frequency IN ('weekly', 'monthly', 'yearly')),
  accepts_insurance boolean DEFAULT false,
  offers_medication boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  features jsonb DEFAULT '{}'::jsonb,
  communication_methods text[] DEFAULT '{}',
  status text DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'deprecated')),
  
  CONSTRAINT platforms_price_range_check CHECK (price_range_max >= price_range_min)
);

-- Platform reviews table
CREATE TABLE IF NOT EXISTS platform_reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  platform_id uuid REFERENCES platforms(id) ON DELETE CASCADE,
  author_id uuid REFERENCES users(id) ON DELETE SET NULL,
  content text NOT NULL,
  rating decimal CHECK (rating >= 0 AND rating <= 5),
  pros text[] DEFAULT '{}',
  cons text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  published_at timestamptz,
  status text DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived'))
);

-- Platform ratings table
CREATE TABLE IF NOT EXISTS platform_ratings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  platform_id uuid REFERENCES platforms(id) ON DELETE CASCADE,
  category text NOT NULL,
  score decimal CHECK (score >= 0 AND score <= 5),
  description text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Conditions table
CREATE TABLE IF NOT EXISTS conditions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  symptoms text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Platform conditions table
CREATE TABLE IF NOT EXISTS platform_conditions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  platform_id uuid REFERENCES platforms(id) ON DELETE CASCADE,
  condition_id uuid REFERENCES conditions(id) ON DELETE CASCADE,
  effectiveness_score decimal CHECK (effectiveness_score >= 0 AND effectiveness_score <= 5),
  description text,
  created_at timestamptz DEFAULT now(),
  
  UNIQUE(platform_id, condition_id)
);

-- Comparisons table
CREATE TABLE IF NOT EXISTS comparisons (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  platform_a_id uuid REFERENCES platforms(id) ON DELETE CASCADE,
  platform_b_id uuid REFERENCES platforms(id) ON DELETE CASCADE,
  content text NOT NULL,
  author_id uuid REFERENCES users(id) ON DELETE SET NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  published_at timestamptz,
  status text DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  
  CONSTRAINT different_platforms CHECK (platform_a_id != platform_b_id),
  UNIQUE(platform_a_id, platform_b_id)
);

-- User reviews table
CREATE TABLE IF NOT EXISTS user_reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE SET NULL,
  platform_id uuid REFERENCES platforms(id) ON DELETE CASCADE,
  rating decimal CHECK (rating >= 0 AND rating <= 5),
  content text,
  pros text[] DEFAULT '{}',
  cons text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  
  UNIQUE(user_id, platform_id)
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE platforms ENABLE ROW LEVEL SECURITY;
ALTER TABLE platform_reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE platform_ratings ENABLE ROW LEVEL SECURITY;
ALTER TABLE conditions ENABLE ROW LEVEL SECURITY;
ALTER TABLE platform_conditions ENABLE ROW LEVEL SECURITY;
ALTER TABLE comparisons ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_reviews ENABLE ROW LEVEL SECURITY;

-- Create indices
CREATE INDEX IF NOT EXISTS platforms_slug_idx ON platforms(slug);
CREATE INDEX IF NOT EXISTS conditions_slug_idx ON conditions(slug);
CREATE INDEX IF NOT EXISTS platform_reviews_platform_id_idx ON platform_reviews(platform_id);
CREATE INDEX IF NOT EXISTS platform_reviews_status_idx ON platform_reviews(status);
CREATE INDEX IF NOT EXISTS platform_conditions_platform_id_idx ON platform_conditions(platform_id);
CREATE INDEX IF NOT EXISTS platform_conditions_condition_id_idx ON platform_conditions(condition_id);
CREATE INDEX IF NOT EXISTS comparisons_platforms_idx ON comparisons(platform_a_id, platform_b_id);
CREATE INDEX IF NOT EXISTS user_reviews_platform_id_idx ON user_reviews(platform_id);
CREATE INDEX IF NOT EXISTS user_reviews_status_idx ON user_reviews(status);

-- Create updated_at triggers
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_users_updated_at
    BEFORE UPDATE ON users
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_platforms_updated_at
    BEFORE UPDATE ON platforms
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_platform_reviews_updated_at
    BEFORE UPDATE ON platform_reviews
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_platform_ratings_updated_at
    BEFORE UPDATE ON platform_ratings
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_conditions_updated_at
    BEFORE UPDATE ON conditions
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_comparisons_updated_at
    BEFORE UPDATE ON comparisons
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();