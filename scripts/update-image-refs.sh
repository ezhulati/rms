#!/bin/bash
# Script to update image references from JPG/PNG to WebP in .astro files

set -e

PROJECT_ROOT="/Users/ez/Desktop/AI Library/Apps/RMS"
cd "$PROJECT_ROOT"

echo "=== Updating Image References to WebP ==="
echo ""

# Function to update image references in a file
update_file_images() {
    local file="$1"
    local temp_file="${file}.tmp"
    local changes_made=false

    # Replace .jpg with .webp
    if grep -q '\.jpg"' "$file" 2>/dev/null; then
        sed 's/\.jpg"/.webp"/g' "$file" > "$temp_file"
        mv "$temp_file" "$file"
        changes_made=true
    fi

    # Replace .jpeg with .webp
    if grep -q '\.jpeg"' "$file" 2>/dev/null; then
        sed 's/\.jpeg"/.webp"/g' "$file" > "$temp_file"
        mv "$temp_file" "$file"
        changes_made=true
    fi

    # Replace .png" with .webp" (be careful not to replace logo PNGs)
    if grep -q 'reviewers/.*\.png"' "$file" 2>/dev/null || \
       grep -q 'concepts/.*\.png"' "$file" 2>/dev/null || \
       grep -q 'platforms/.*review.*\.png"' "$file" 2>/dev/null; then
        sed 's/\(reviewers\/[^"]*\)\.png"/\1.webp"/g; s/\(concepts\/[^"]*\)\.png"/\1.webp"/g; s/\(platforms\/[^"]*review[^"]*\)\.png"/\1.webp"/g' "$file" > "$temp_file"
        mv "$temp_file" "$file"
        changes_made=true
    fi

    if [ "$changes_made" = true ]; then
        echo "✓ Updated: $file"
    fi
}

# Find all .astro files and update them
echo "Updating .astro files..."
find src/pages -name "*.astro" -type f | while read file; do
    update_file_images "$file"
done

find src/components -name "*.astro" -type f 2>/dev/null | while read file; do
    update_file_images "$file"
done

find src/layouts -name "*.astro" -type f 2>/dev/null | while read file; do
    update_file_images "$file"
done

echo ""
echo "✓ Image references updated!"
echo ""
echo "Next steps:"
echo "1. Test the site locally: npm run dev"
echo "2. Check for any broken images"
echo "3. Build and verify size: npm run build"
echo ""
