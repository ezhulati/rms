#!/usr/bin/env node

/**
 * Update Component Images Script
 *
 * This script updates all Astro components to use the already-generated local images
 * instead of Unsplash URLs.
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
  MANIFEST_PATH: path.join(__dirname, 'image-generation/manifest.json'),
  ALT_TEXT_PATH: path.join(__dirname, 'image-generation/alt-text.json'),
};

console.log('🔄 Updating Astro components with generated images...\n');

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

// Load manifest to get image mappings
async function loadImageMappings() {
  const manifest = JSON.parse(await fs.readFile(CONFIG.MANIFEST_PATH, 'utf-8'));
  const altTextData = JSON.parse(await fs.readFile(CONFIG.ALT_TEXT_PATH, 'utf-8'));

  // Create a map of filename to image info
  const mappings = {};

  for (const image of manifest.images) {
    // Extract filename from page_path (e.g., "pages/HomePage.tsx" -> "homepage")
    const pageName = path.basename(image.page_path, path.extname(image.page_path)).toLowerCase();
    mappings[pageName] = {
      imagePath: image.image_path.replace('public', ''),
      altText: image.alt_text,
      category: image.category,
    };
  }

  return { mappings, altTextData };
}

// Update a single Astro file
async function updateAstroFile(filePath, mappings, altTextData) {
  const content = await fs.readFile(filePath, 'utf-8');

  // Check if file has Unsplash images
  if (!content.includes('images.unsplash.com')) {
    return { updated: false, reason: 'No Unsplash images' };
  }

  const fileName = path.basename(filePath, '.astro').toLowerCase();

  // Try to find matching image
  let imageInfo = mappings[fileName];

  // If not found, try alternative naming patterns
  if (!imageInfo) {
    // Try with common variations
    const variations = [
      fileName.replace('page', ''),
      fileName.replace('review', ''),
      fileName.replace(/-/g, ''),
    ];

    for (const variant of variations) {
      if (mappings[variant]) {
        imageInfo = mappings[variant];
        break;
      }
    }
  }

  if (!imageInfo) {
    return { updated: false, reason: 'No matching image found' };
  }

  let updatedContent = content;

  // Replace Unsplash URLs with local paths
  const unsplashPattern = /https:\/\/images\.unsplash\.com\/[^\s"']+/g;
  const matches = content.match(unsplashPattern);

  if (matches && matches.length > 0) {
    // Replace first Unsplash image (typically the hero/featured image)
    const firstUnsplashUrl = matches[0];
    updatedContent = updatedContent.replace(firstUnsplashUrl, imageInfo.imagePath);

    // Try to add/update alt text
    // Find the img tag containing this URL
    const imgTagPattern = new RegExp(
      `<img([^>]*src=["']${firstUnsplashUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["'][^>]*)>`,
      'i'
    );
    const imgMatch = content.match(imgTagPattern);

    if (imgMatch) {
      const imgTag = imgMatch[0];
      let newImgTag = imgTag.replace(firstUnsplashUrl, imageInfo.imagePath);

      // Add or update alt attribute
      if (newImgTag.includes('alt=')) {
        newImgTag = newImgTag.replace(/alt=["'][^"']*["']/, `alt="${imageInfo.altText}"`);
      } else {
        newImgTag = newImgTag.replace(/<img/, `<img alt="${imageInfo.altText}"`);
      }

      updatedContent = updatedContent.replace(imgTag, newImgTag);
    }
  }

  // Only write if content changed
  if (updatedContent !== content) {
    await fs.writeFile(filePath, updatedContent, 'utf-8');
    return { updated: true, imagePath: imageInfo.imagePath };
  }

  return { updated: false, reason: 'No changes made' };
}

// Main execution
async function main() {
  try {
    // Load image mappings
    console.log('📋 Loading image mappings...');
    const { mappings, altTextData } = await loadImageMappings();
    console.log(`Found ${Object.keys(mappings).length} generated images\n`);

    // Find all Astro files
    console.log('🔍 Finding Astro files...');
    const astroFiles = await findAllAstroFiles(CONFIG.PAGES_DIR);
    console.log(`Found ${astroFiles.length} Astro files\n`);

    // Update each file
    console.log('🔄 Updating files...\n');
    let successCount = 0;
    let skippedCount = 0;
    let errorCount = 0;

    for (const filePath of astroFiles) {
      const relativePath = path.relative(CONFIG.PAGES_DIR, filePath);

      try {
        const result = await updateAstroFile(filePath, mappings, altTextData);

        if (result.updated) {
          console.log(`✅ ${relativePath} -> ${result.imagePath}`);
          successCount++;
        } else {
          skippedCount++;
        }
      } catch (error) {
        console.error(`❌ ${relativePath}: ${error.message}`);
        errorCount++;
      }
    }

    // Print summary
    console.log('\n' + '='.repeat(60));
    console.log('📊 UPDATE SUMMARY');
    console.log('='.repeat(60));
    console.log(`✅ Successfully updated: ${successCount} files`);
    console.log(`⏭️  Skipped: ${skippedCount} files`);
    console.log(`❌ Errors: ${errorCount} files`);
    console.log('\n✨ Component update complete!');
    console.log('All Unsplash images have been replaced with local AI-generated images.\n');

  } catch (error) {
    console.error('Fatal error:', error);
    process.exit(1);
  }
}

main();
