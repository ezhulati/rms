#!/bin/bash
# Image Optimization Script for RMS
# Converts images to WebP and optimizes file sizes

set -e

PROJECT_ROOT="/Users/ez/Desktop/AI Library/Apps/RMS"
IMAGES_DIR="$PROJECT_ROOT/public/images"

echo "=== RMS Image Optimization Script ==="
echo "This script will optimize images to reduce build size"
echo ""

# Function to optimize reviewer images (profile pictures)
optimize_reviewers() {
    echo "Optimizing reviewer images..."
    cd "$IMAGES_DIR/reviewers"

    for img in *.jpg *.jpeg *.png; do
        [ -f "$img" ] || continue
        if [[ "$img" != "*"* ]]; then
            filename="${img%.*}"

            # Skip if WebP already exists and is recent
            if [ -f "${filename}.webp" ] && [ "${filename}.webp" -nt "$img" ]; then
                echo "  ✓ Skipping $img (already optimized)"
                continue
            fi

            # Convert to WebP with 400x400 max size, 85% quality
            echo "  ⚙ Processing $img..."
            convert "$img" -resize 400x400\> -quality 85 "${filename}.webp"

            original_size=$(du -h "$img" | cut -f1)
            new_size=$(du -h "${filename}.webp" | cut -f1)
            echo "    $original_size → $new_size"
        fi
    done

    echo "✓ Reviewer images optimized"
}

# Function to optimize concept images (hero/feature images)
optimize_concepts() {
    echo "Optimizing concept images..."
    cd "$IMAGES_DIR/concepts"

    for img in *.jpg *.jpeg *.png; do
        [ -f "$img" ] || continue
        if [[ "$img" != "*"* ]]; then
            filename="${img%.*}"

            if [ -f "${filename}.webp" ] && [ "${filename}.webp" -nt "$img" ]; then
                echo "  ✓ Skipping $img (already optimized)"
                continue
            fi

            # Convert to WebP with 1200px max width, 85% quality
            echo "  ⚙ Processing $img..."
            convert "$img" -resize 1200x\> -quality 85 "${filename}.webp"

            original_size=$(du -h "$img" | cut -f1)
            new_size=$(du -h "${filename}.webp" | cut -f1)
            echo "    $original_size → $new_size"
        fi
    done

    echo "✓ Concept images optimized"
}

# Function to optimize platform images (logos/screenshots)
optimize_platforms() {
    echo "Optimizing platform images..."
    cd "$IMAGES_DIR/platforms"

    for img in *.jpg *.jpeg *.png; do
        [ -f "$img" ] || continue
        if [[ "$img" != "*"* ]]; then
            filename="${img%.*}"

            if [ -f "${filename}.webp" ] && [ "${filename}.webp" -nt "$img" ]; then
                echo "  ✓ Skipping $img (already optimized)"
                continue
            fi

            # Convert to WebP with 800px max width, 90% quality
            echo "  ⚙ Processing $img..."
            convert "$img" -resize 800x\> -quality 90 "${filename}.webp"

            original_size=$(du -h "$img" | cut -f1)
            new_size=$(du -h "${filename}.webp" | cut -f1)
            echo "    $original_size → $new_size"
        fi
    done

    echo "✓ Platform images optimized"
}

# Function to optimize tool images
optimize_tools() {
    echo "Optimizing tool images..."
    cd "$IMAGES_DIR/tools"

    for img in *.jpg *.jpeg *.png; do
        [ -f "$img" ] || continue
        if [[ "$img" != "*"* ]]; then
            filename="${img%.*}"

            if [ -f "${filename}.webp" ] && [ "${filename}.webp" -nt "$img" ]; then
                echo "  ✓ Skipping $img (already optimized)"
                continue
            fi

            # Convert to WebP with 1200px max width, 85% quality
            echo "  ⚙ Processing $img..."
            convert "$img" -resize 1200x\> -quality 85 "${filename}.webp"

            original_size=$(du -h "$img" | cut -f1)
            new_size=$(du -h "${filename}.webp" | cut -f1)
            echo "    $original_size → $new_size"
        fi
    done

    echo "✓ Tool images optimized"
}

# Main execution
echo "Starting optimization..."
echo ""

optimize_reviewers
echo ""
optimize_concepts
echo ""
optimize_platforms
echo ""
optimize_tools

echo ""
echo "=== Optimization Complete ==="
echo ""
echo "Next steps:"
echo "1. Update .astro files to use .webp images"
echo "2. Add <picture> tags with fallbacks for older browsers"
echo "3. Run 'npm run build' to see size reduction"
echo ""
echo "Example usage in .astro files:"
echo '<img src="/images/reviewers/john-doe.webp" alt="John Doe" />'
echo ""
