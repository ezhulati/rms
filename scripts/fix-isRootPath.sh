#!/bin/bash

cd "/Users/ez/Desktop/AI Library/Apps/RMS/src/pages"

# Function to add isRootPath definition after imports in frontmatter
add_isRootPath() {
  local file=$1
  local path=$2

  # Check if file already has isRootPath defined
  if grep -q "const isRootPath" "$file"; then
    echo "⏭ $file already has isRootPath"
    return
  fi

  # Add isRootPath definition before the --- closing tag
  sed -i '' "/^---$/i\\
\\
const isRootPath = Astro.url.pathname === '$path' || Astro.url.pathname === '$path/';
" "$file"

  echo "✓ Added isRootPath to $file"
}

# Fix each file
add_isRootPath "reviews.astro" "/reviews"
add_isRootPath "resources.astro" "/resources"
add_isRootPath "learn.astro" "/learn"
add_isRootPath "case-studies.astro" "/case-studies"
add_isRootPath "best.astro" "/best"
add_isRootPath "blog/index.astro" "/blog"
add_isRootPath "tools/index.astro" "/tools"

echo ""
echo "Done fixing isRootPath in all files!"
