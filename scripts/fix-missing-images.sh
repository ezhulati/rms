#!/bin/bash

# Script to convert .webp references to .jpg where files exist as .jpg
# This fixes the broken image references across the site

echo "Fixing broken image references..."

# Convert blog image references from .webp to .jpg
echo "Converting blog images..."
find src/pages -type f -name "*.astro" -exec sed -i '' 's|/images/blog/\([^"]*\)\.webp|/images/blog/\1.jpg|g' {} \;

# Convert concepts images from .webp to .jpg where jpg exists
echo "Converting concepts images..."
for file in public/images/concepts/*.jpg; do
    basename=$(basename "$file" .jpg)
    # Replace .webp references with .jpg for files that exist
    find src/pages -type f -name "*.astro" -exec sed -i '' "s|/images/concepts/${basename}\.webp|/images/concepts/${basename}.jpg|g" {} \;
done

echo "Done! Image references updated."
echo "Run 'npm run dev' to see the changes."
