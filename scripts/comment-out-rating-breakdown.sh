#!/bin/bash

# Comment out RatingBreakdown component usage in all .astro files

files=(
  "src/pages/best-online-therapy-platforms.astro"
  "src/pages/better-help-review.astro"
  "src/pages/cerebral-review.astro"
  "src/pages/online-therapy-review.astro"
  "src/pages/reviews/platforms/amwell-review.astro"
  "src/pages/reviews/platforms/brightside-review.astro"
  "src/pages/reviews/platforms/calmerry-review.astro"
  "src/pages/reviews/platforms/online-therapy-review.astro"
  "src/pages/talkspace-review.astro"
)

for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    # Check if RatingBreakdown is already commented
    if grep -q "^[[:space:]]*<RatingBreakdown" "$file"; then
      echo "Commenting out RatingBreakdown in $file"

      # Use perl for multi-line replacement
      perl -i -0pe 's/(\s*)<RatingBreakdown\s+([^>]*\n)*[^>]*\/>/\1{/* TODO: Add RatingBreakdown component with proper data\n\1<RatingBreakdown $2*\/}/gs' "$file"

      # Alternatively, try simpler approach - comment out lines containing RatingBreakdown
      sed -i '' '/^[[:space:]]*<RatingBreakdown/,/\/>/s/^/\/\* /' "$file"
      sed -i '' '/^\/\* .*<RatingBreakdown/a\
*\/
' "$file"

    else
      echo "Skipped $file (no active RatingBreakdown found)"
    fi
  else
    echo "File not found: $file"
  fi
done

echo "Done!"
