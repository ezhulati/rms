#!/bin/bash

cd "/Users/ez/Desktop/AI Library/Apps/RMS/src/pages"

# Rename main pages to match URL structure
mv ComparePage.astro compare.astro 2>/dev/null && echo "✓ ComparePage.astro → compare.astro"
mv ReviewsPage.astro reviews.astro 2>/dev/null && echo "✓ ReviewsPage.astro → reviews.astro"
mv CaseStudiesPage.astro case-studies.astro 2>/dev/null && echo "✓ CaseStudiesPage.astro → case-studies.astro"
mv ConditionsAZPage.astro conditions-az.astro 2>/dev/null && echo "✓ ConditionsAZPage.astro → conditions-az.astro"
mv GuidesPage.astro guides.astro 2>/dev/null && echo "✓ GuidesPage.astro → guides.astro"
mv LearnPage.astro learn.astro 2>/dev/null && echo "✓ LearnPage.astro → learn.astro"
mv ModalitiesPage.astro modalities.astro 2>/dev/null && echo "✓ ModalitiesPage.astro → modalities.astro"
mv PlatformFinderPage.astro platform-finder.astro 2>/dev/null && echo "✓ PlatformFinderPage.astro → platform-finder.astro"
mv ResourcesPage.astro resources.astro 2>/dev/null && echo "✓ ResourcesPage.astro → resources.astro"
mv SpecializedPlatformsPage.astro specialized-platforms.astro 2>/dev/null && echo "✓ SpecializedPlatformsPage.astro → specialized-platforms.astro"
mv BestPage.astro best.astro 2>/dev/null && echo "✓ BestPage.astro → best.astro"
mv NotFoundPage.astro 404.astro 2>/dev/null && echo "✓ NotFoundPage.astro → 404.astro"

# Move BlogPage to blog/index.astro
mv BlogPage.astro blog/index.astro 2>/dev/null && echo "✓ BlogPage.astro → blog/index.astro"

# Move ToolsPage to tools/index.astro
mv ToolsPage.astro tools/index.astro 2>/dev/null && echo "✓ ToolsPage.astro → tools/index.astro"

# Keep HomePage as is (we already have index.astro)
echo "⏭ Skipping HomePage.astro (index.astro already exists)"

# Move disorder pages to conditions directory
mv AnxietyDisorderPage.astro conditions/anxiety-disorder.astro 2>/dev/null && echo "✓ AnxietyDisorderPage.astro → conditions/anxiety-disorder.astro"
mv BipolarDisorderPage.astro conditions/bipolar-disorder.astro 2>/dev/null && echo "✓ BipolarDisorderPage.astro → conditions/bipolar-disorder.astro"

echo ""
echo "Done renaming pages!"
