#!/usr/bin/env python3
"""
Batch update script for converting .astro files to new premium layout pattern
"""

import re
import os
from pathlib import Path

def extract_h1_and_desc(content):
    """Extract h1 text and lead paragraph from existing content"""
    # Pattern 1: Old colored header format
    pattern1 = r'<div class="bg-indigo-600 p-6 text-white">\s*<h1[^>]*>([^<]+)</h1>\s*<p[^>]*>\s*([^<]+)\s*</p>'
    match = re.search(pattern1, content, re.DOTALL)
    if match:
        return match.group(1).strip(), match.group(2).strip()

    # Pattern 2: Regular h1 + paragraph
    pattern2 = r'<h1[^>]*>([^<]+)</h1>\s*<p[^>]*>([^<]+)</p>'
    match = re.search(pattern2, content, re.DOTALL)
    if match:
        return match.group(1).strip(), match.group(2).strip()

    # Pattern 3: Just h1
    pattern3 = r'<h1[^>]*>([^<]+)</h1>'
    match = re.search(pattern3, content)
    if match:
        return match.group(1).strip(), ""

    return None, None

def update_astro_file(filepath):
    """Update a single .astro file with new layout"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Skip if already updated
        if 'bg-gradient-to-b from-white via-brand-primary-50/30' in content:
            print(f"✓ Already updated: {filepath}")
            return True

        # Extract h1 and description
        h1_text, desc_text = extract_h1_and_desc(content)

        if not h1_text:
            print(f"⚠ Could not extract h1 from: {filepath}")
            return False

        # Split into frontmatter and content
        parts = content.split('---', 2)
        if len(parts) < 3:
            print(f"✗ Invalid format: {filepath}")
            return False

        frontmatter = parts[1]
        body = parts[2]

        # Remove old wrapper patterns
        # Pattern 1: Full min-h-screen wrapper
        body = re.sub(
            r'<div class="min-h-screen bg-gray-50">\s*<div class="sb-container py-12[^"]*">',
            '',
            body,
            flags=re.DOTALL
        )

        # Pattern 2: Simple sb-container wrapper
        body = re.sub(
            r'<div class="sb-container py-12">',
            '',
            body
        )

        # Pattern 3: bg-gray-50 wrapper
        body = re.sub(
            r'<div class="bg-gray-50[^"]*">\s*<div class="sb-container[^"]*">',
            '',
            body,
            flags=re.DOTALL
        )

        # Remove old headers
        body = re.sub(
            r'<div class="bg-indigo-600 p-6 text-white">.*?</div>\s*',
            '',
            body,
            flags=re.DOTALL
        )

        # Remove old h1 and lead paragraphs
        body = re.sub(
            r'<h1[^>]*>[^<]+</h1>\s*<p[^>]*>.*?</p>\s*',
            '',
            body
        )

        # Remove text-center wrapper if present
        body = re.sub(
            r'<div class="text-center mb-\d+">\s*',
            '',
            body
        )

        # Count closing divs to remove
        closing_divs_to_remove = body.count('</div>')
        if closing_divs_to_remove >= 2:
            # Remove last 2 closing divs (wrappers)
            body = body.rsplit('</div>', 2)[0]

        # Create new content with premium layout
        desc_html = f'      <p class="font-serif italic text-lg md:text-xl text-neutral-600">{desc_text}</p>' if desc_text else ''

        new_content = f"""---
{frontmatter}---

<BaseLayout>
  {{/* Hero Section */}}
  <section class="bg-gradient-to-b from-white via-brand-primary-50/30 to-white pt-16 pb-12 md:pt-24 md:pb-16">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <h1 class="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">{h1_text}</h1>
{desc_html}
    </div>
  </section>

  {{/* Main Content */}}
  <section class="bg-white py-12 md:py-16">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
{body.strip()}
    </div>
  </section>
</BaseLayout>
"""

        # Write updated content
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)

        print(f"✓ Updated: {filepath}")
        return True

    except Exception as e:
        print(f"✗ Error updating {filepath}: {e}")
        return False

def main():
    base_path = Path("/Users/ez/Desktop/AI Library/Apps/RMS/src/pages")

    # Files to update (remaining ones)
    files_to_update = [
        # Matchers (remaining)
        "tools/matchers/therapy-type-finder.astro",
        "tools/matchers/budget-friendly-finder.astro",
        "tools/matchers/therapy-platform-matcher.astro",
        "tools/matchers/platform-finder.astro",
        "tools/matchers/insurance-coverage-checker.astro",
        # Tools main
        "tools/index.astro",
        "tools/assessments-page.astro",
        "tools/matchers-page.astro",
    ]

    updated = 0
    failed = 0

    for file_path in files_to_update:
        full_path = base_path / file_path
        if full_path.exists():
            if update_astro_file(str(full_path)):
                updated += 1
            else:
                failed += 1
        else:
            print(f"✗ File not found: {full_path}")
            failed += 1

    print(f"\n{'='*60}")
    print(f"Total processed: {updated + failed}")
    print(f"Successfully updated: {updated}")
    print(f"Failed: {failed}")
    print(f"{'='*60}")

if __name__ == "__main__":
    main()
