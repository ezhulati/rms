/*
  # Row Level Security Policies

  1. Security Policies
    - Users can read their own data
    - Admins can read and write all data
    - Public can read published content
    - Users can create and manage their own reviews

  2. Changes
    - Add RLS policies for all tables
    - Create admin role and permissions
    - Set up public access for published content

  3. Notes
    - Ensures data security and privacy
    - Maintains content control for editorial team
    - Allows appropriate public access
*/

-- Create admin role
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT FROM pg_catalog.pg_roles WHERE rolname = 'admin'
  ) THEN
    CREATE ROLE admin;
  END IF;
END
$$;

-- Users policies
CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own data"
  ON users
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- Platforms policies
CREATE POLICY "Anyone can read active platforms"
  ON platforms
  FOR SELECT
  TO anon, authenticated
  USING (status = 'active');

CREATE POLICY "Admins can manage platforms"
  ON platforms
  TO admin
  USING (true)
  WITH CHECK (true);

-- Platform reviews policies
CREATE POLICY "Anyone can read published reviews"
  ON platform_reviews
  FOR SELECT
  TO anon, authenticated
  USING (status = 'published');

CREATE POLICY "Admins can manage platform reviews"
  ON platform_reviews
  TO admin
  USING (true)
  WITH CHECK (true);

-- Platform ratings policies
CREATE POLICY "Anyone can read platform ratings"
  ON platform_ratings
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Admins can manage platform ratings"
  ON platform_ratings
  TO admin
  USING (true)
  WITH CHECK (true);

-- Conditions policies
CREATE POLICY "Anyone can read conditions"
  ON conditions
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Admins can manage conditions"
  ON conditions
  TO admin
  USING (true)
  WITH CHECK (true);

-- Platform conditions policies
CREATE POLICY "Anyone can read platform conditions"
  ON platform_conditions
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Admins can manage platform conditions"
  ON platform_conditions
  TO admin
  USING (true)
  WITH CHECK (true);

-- Comparisons policies
CREATE POLICY "Anyone can read published comparisons"
  ON comparisons
  FOR SELECT
  TO anon, authenticated
  USING (status = 'published');

CREATE POLICY "Admins can manage comparisons"
  ON comparisons
  TO admin
  USING (true)
  WITH CHECK (true);

-- User reviews policies
CREATE POLICY "Anyone can read approved reviews"
  ON user_reviews
  FOR SELECT
  TO anon, authenticated
  USING (status = 'approved');

CREATE POLICY "Users can create reviews"
  ON user_reviews
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own reviews"
  ON user_reviews
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Admins can manage user reviews"
  ON user_reviews
  TO admin
  USING (true)
  WITH CHECK (true);