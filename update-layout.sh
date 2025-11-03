#!/bin/bash

# Script to update .astro files with new premium layout pattern
# This script will be run from the project root

FILES=(
# Tools - matchers
"/Users/ez/Desktop/AI Library/Apps/RMS/src/pages/tools/matchers/therapy-type-finder.astro"
"/Users/ez/Desktop/AI Library/Apps/RMS/src/pages/tools/matchers/budget-friendly-finder.astro"
"/Users/ez/Desktop/AI Library/Apps/RMS/src/pages/tools/matchers/therapy-platform-matcher.astro"
"/Users/ez/Desktop/AI Library/Apps/RMS/src/pages/tools/matchers/platform-finder.astro"
"/Users/ez/Desktop/AI Library/Apps/RMS/src/pages/tools/matchers/insurance-coverage-checker.astro"
# Learn - statistics
"/Users/ez/Desktop/AI Library/Apps/RMS/src/pages/learn/statistics/online-therapy-effectiveness.astro"
"/Users/ez/Desktop/AI Library/Apps/RMS/src/pages/learn/statistics/mental-health-demographics.astro"
"/Users/ez/Desktop/AI Library/Apps/RMS/src/pages/learn/statistics/mental-health-statistics.astro"
"/Users/ez/Desktop/AI Library/Apps/RMS/src/pages/learn/statistics/therapy-outcomes-data.astro"
"/Users/ez/Desktop/AI Library/Apps/RMS/src/pages/learn/statistics/index.astro"
# Learn - approaches
"/Users/ez/Desktop/AI Library/Apps/RMS/src/pages/learn/approaches/index.astro"
# Learn - fundamentals
"/Users/ez/Desktop/AI Library/Apps/RMS/src/pages/learn/fundamentals/common-mental-health-conditions.astro"
"/Users/ez/Desktop/AI Library/Apps/RMS/src/pages/learn/fundamentals/therapy-types-explained.astro"
"/Users/ez/Desktop/AI Library/Apps/RMS/src/pages/learn/fundamentals/online-therapy-guide.astro"
"/Users/ez/Desktop/AI Library/Apps/RMS/src/pages/learn/fundamentals/medication-vs-therapy.astro"
"/Users/ez/Desktop/AI Library/Apps/RMS/src/pages/learn/fundamentals/depression.astro"
"/Users/ez/Desktop/AI Library/Apps/RMS/src/pages/learn/fundamentals/stress-management.astro"
"/Users/ez/Desktop/AI Library/Apps/RMS/src/pages/learn/fundamentals/index.astro"
"/Users/ez/Desktop/AI Library/Apps/RMS/src/pages/learn/fundamentals/medication-basics.astro"
"/Users/ez/Desktop/AI Library/Apps/RMS/src/pages/learn/fundamentals/depression-coping-strategies.astro"
"/Users/ez/Desktop/AI Library/Apps/RMS/src/pages/learn/fundamentals/supporting-loved-ones.astro"
"/Users/ez/Desktop/AI Library/Apps/RMS/src/pages/learn/fundamentals/trauma-ptsd.astro"
"/Users/ez/Desktop/AI Library/Apps/RMS/src/pages/learn/fundamentals/anxiety-disorders.astro"
"/Users/ez/Desktop/AI Library/Apps/RMS/src/pages/learn/fundamentals/mindfulness.astro"
"/Users/ez/Desktop/AI Library/Apps/RMS/src/pages/learn/fundamentals/relationship-counseling.astro"
"/Users/ez/Desktop/AI Library/Apps/RMS/src/pages/learn/fundamentals/depression-medication-guide.astro"
"/Users/ez/Desktop/AI Library/Apps/RMS/src/pages/learn/fundamentals/self-care.astro"
# Guides - financial
"/Users/ez/Desktop/AI Library/Apps/RMS/src/pages/guides/financial/affordable-therapy-options.astro"
"/Users/ez/Desktop/AI Library/Apps/RMS/src/pages/guides/financial/insurance-mental-health-coverage.astro"
# Guides - lifestyle
"/Users/ez/Desktop/AI Library/Apps/RMS/src/pages/guides/lifestyle/stress-management-techniques.astro"
# Guides - selection
"/Users/ez/Desktop/AI Library/Apps/RMS/src/pages/guides/selection/therapy-types-explained.astro"
"/Users/ez/Desktop/AI Library/Apps/RMS/src/pages/guides/selection/choosing-online-therapist.astro"
"/Users/ez/Desktop/AI Library/Apps/RMS/src/pages/guides/selection/first-therapy-session.astro"
"/Users/ez/Desktop/AI Library/Apps/RMS/src/pages/guides/selection/red-flags-in-therapy.astro"
# Tools - remaining
"/Users/ez/Desktop/AI Library/Apps/RMS/src/pages/tools/index.astro"
"/Users/ez/Desktop/AI Library/Apps/RMS/src/pages/tools/assessments-page.astro"
"/Users/ez/Desktop/AI Library/Apps/RMS/src/pages/tools/matchers-page.astro"
)

echo "This script lists files to be updated. Manual updates recommended for precision."
echo "Total files: ${#FILES[@]}"
for file in "${FILES[@]}"; do
  if [ -f "$file" ]; then
    echo "✓ Found: $file"
  else
    echo "✗ Missing: $file"
  fi
done
