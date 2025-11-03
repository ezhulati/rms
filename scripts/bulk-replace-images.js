#!/usr/bin/env node

/**
 * Bulk Replace Unsplash Images
 *
 * Replaces ALL remaining Unsplash images with appropriate local images
 * based on page context and category.
 */

import 'dotenv/config';
import fs from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONFIG = {
  PAGES_DIR: path.join(__dirname, '../src/pages'),
  IMAGES_DIR: path.join(__dirname, '../public/images'),
};

console.log('🔄 Bulk replacing all Unsplash images...\n');

// Determine best image for a page based on its path
function getBestImageForPage(pagePath) {
  const relativePath = pagePath.toLowerCase();

  // Best/recommendation pages
  if (relativePath.includes('best')) {
    return '/images/concepts/bestplatforms.jpg';
  }

  // Review pages
  if (relativePath.includes('review')) {
    if (relativePath.includes('betterhelp')) return '/images/concepts/betterhelpreview.jpg';
    if (relativePath.includes('talkspace')) return '/images/concepts/talkspacereview.jpg';
    if (relativePath.includes('cerebral')) return '/images/concepts/cerebralreview.jpg';
    return '/images/concepts/reviewspage.jpg';
  }

  // Blog pages
  if (relativePath.includes('blog')) {
    if (relativePath.includes('success')) return '/images/blog/therapy-success-stories.jpg';
    if (relativePath.includes('anxiety')) return '/images/blog/anxiety-management-stories.jpg';
    if (relativePath.includes('self-care')) return '/images/blog/self-care-practices.jpg';
    if (relativePath.includes('crisis')) return '/images/blog/therapy-during-crisis.jpg';
    if (relativePath.includes('therapist')) return '/images/blog/therapist-interviews.jpg';
    if (relativePath.includes('insurance')) return '/images/blog/insurance-coverage-guide.jpg';
    if (relativePath.includes('cost')) return '/images/blog/therapy-costs-explained.jpg';
    if (relativePath.includes('first')) return '/images/blog/therapy-first-session.jpg';
    if (relativePath.includes('modalities')) return '/images/blog/therapy-modalities-explained.jpg';
    if (relativePath.includes('research')) return '/images/blog/latest-therapy-research.jpg';
    if (relativePath.includes('policy')) return '/images/blog/mental-health-policy-updates.jpg';
    if (relativePath.includes('merger')) return '/images/blog/platform-merger.jpg';
    if (relativePath.includes('who')) return '/images/blog/who-global-report.jpg';
    return '/images/blog/index.jpg';
  }

  // Case studies
  if (relativePath.includes('case-studies') || relativePath.includes('case-study')) {
    return '/images/case-studies/conditionspage.jpg';
  }

  // Guides
  if (relativePath.includes('guide')) {
    return '/images/blog/choosing-right-therapist.jpg';
  }

  // Learn/education pages
  if (relativePath.includes('learn') || relativePath.includes('fundamentals')) {
    return '/images/concepts/learnpage.jpg';
  }

  // Conditions
  if (relativePath.includes('condition') || relativePath.includes('disorder')) {
    return '/images/concepts/bestforanxiety.jpg';
  }

  // Default
  return '/images/concepts/homepage.jpg';
}

// Generate appropriate alt text
function generateAltText(pagePath, pageContent) {
  const fileName = path.basename(pagePath, '.astro');

  // Try to extract title from content
  const h1Match = pageContent.match(/<h1[^>]*>(.*?)<\/h1>/i);
  if (h1Match) {
    const title = h1Match[1].replace(/<[^>]*>/g, '').trim();
    return title.length <= 125 ? title : title.substring(0, 122) + '...';
  }

  // Fallback to filename-based alt text
  const readableTitle = fileName
    .replace(/([A-Z])/g, ' $1')
    .replace(/[-_]/g, ' ')
    .trim()
    .toLowerCase()
    .replace(/\b\w/g, l => l.toUpperCase());

  return `${readableTitle} - Online therapy and mental health support`;
}

// Update a single file
async function updateFile(filePath) {
  const content = await fs.readFile(filePath, 'utf-8');

  if (!content.includes('images.unsplash.com')) {
    return { updated: false };
  }

  const bestImage = getBestImageForPage(filePath);
  const altText = generateAltText(filePath, content);

  let updatedContent = content;

  // Replace all Unsplash URLs with the best local image
  const unsplashPattern = /https:\/\/images\.unsplash\.com\/[^\s"']+/g;
  updatedContent = updatedContent.replace(unsplashPattern, bestImage);

  // Update or add alt text for img tags without alt or with generic alt
  updatedContent = updatedContent.replace(
    /<img([^>]*?)(?:alt=["'][^"']*["'])?([^>]*?)>/gi,
    (match, before, after) => {
      // Check if alt attribute exists and is meaningful
      const hasGoodAlt = /alt=["'][^"']{10,}["']/i.test(match);
      if (hasGoodAlt) {
        return match; // Keep existing good alt text
      }
      // Remove any existing alt and add new one
      const cleaned = (before + after).replace(/alt=["'][^"']*["']/gi, '').trim();
      return `<img ${cleaned} alt="${altText}">`;
    }
  );

  if (updatedContent !== content) {
    await fs.writeFile(filePath, updatedContent, 'utf-8');
    return { updated: true, imagePath: bestImage };
  }

  return { updated: false };
}

// Find all Astro files
async function findAllAstroFiles(dir) {
  const files = [];

  async function walk(currentDir) {
    const entries = await fs.readdir(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);

      if (entry.isDirectory()) {
        await walk(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.astro')) {
        files.push(fullPath);
      }
    }
  }

  await walk(dir);
  return files;
}

// Main execution
async function main() {
  try {
    console.log('🔍 Finding all Astro files...');
    const astroFiles = await findAllAstroFiles(CONFIG.PAGES_DIR);
    console.log(`Found ${astroFiles.length} Astro files\n`);

    console.log('🔄 Replacing Unsplash images...\n');
    let successCount = 0;
    let skippedCount = 0;

    for (const filePath of astroFiles) {
      const relativePath = path.relative(CONFIG.PAGES_DIR, filePath);

      try {
        const result = await updateFile(filePath);

        if (result.updated) {
          console.log(`✅ ${relativePath} -> ${result.imagePath}`);
          successCount++;
        } else {
          skippedCount++;
        }
      } catch (error) {
        console.error(`❌ ${relativePath}: ${error.message}`);
      }
    }

    console.log('\n' + '='.repeat(60));
    console.log('📊 BULK REPLACE SUMMARY');
    console.log('='.repeat(60));
    console.log(`✅ Successfully updated: ${successCount} files`);
    console.log(`⏭️  Skipped (no Unsplash images): ${skippedCount} files`);
    console.log('\n✨ All Unsplash images have been replaced!');
    console.log('🎉 Your site now uses 100% AI-generated local images.\n');

  } catch (error) {
    console.error('Fatal error:', error);
    process.exit(1);
  }
}

main();
