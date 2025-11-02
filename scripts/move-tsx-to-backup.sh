#!/bin/bash

cd "/Users/ez/Desktop/AI Library/Apps/RMS"

# Create backup directory
mkdir -p "src/_backup_tsx"

# Find and move all .tsx files
find src/pages -name "*.tsx" -type f | while read file; do
  # Get the target path by replacing 'pages' with '_backup_tsx'
  target="${file/pages/_backup_tsx}"
  # Create target directory
  mkdir -p "$(dirname "$target")"
  # Move the file
  mv "$file" "$target"
  echo "Moved: $file -> $target"
done

echo ""
echo "Done! Moved all .tsx files to src/_backup_tsx/"
count=$(find src/_backup_tsx -name "*.tsx" -type f | wc -l | tr -d ' ')
echo "Total files moved: $count"
