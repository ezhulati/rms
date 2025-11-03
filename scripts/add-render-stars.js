#!/usr/bin/env node

/**
 * Add renderStars Function to Best Pages
 *
 * Adds the renderStars helper function to files that are missing it
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const renderStarsFunction = `
const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const starsArray = Array(5).fill(0).map((_, i) => i < fullStars);
  return starsArray;
};
`;

// Auto-detect files that use renderStars but don't have it defined
async function getFilesToFix() {
  const { glob } = await import('glob');
  const { execSync } = await import('child_process');
  const path = await import('path');

  const rootDir = path.resolve(process.cwd());
  const allFiles = await glob('src/pages/**/*.astro', { cwd: rootDir, absolute: true });

  const filesToFix = [];

  for (const file of allFiles) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      const usesRenderStars = content.includes('renderStars(');
      const hasRenderStars = content.includes('const renderStars');

      if (usesRenderStars && !hasRenderStars) {
        filesToFix.push(file);
      }
    } catch (e) {
      // Skip files that can't be read
    }
  }

  return filesToFix;
}

async function fixFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${filePath}`);
    return false;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Check if renderStars is already defined
  if (content.includes('const renderStars')) {
    console.log(`⏭️  Skipped (already has renderStars): ${path.relative(process.cwd(), filePath)}`);
    return false;
  }

  // Find the end of the frontmatter (the closing ---)
  const frontmatterEndMatch = content.match(/^---\n([\s\S]*?)\n---/);

  if (!frontmatterEndMatch) {
    console.log(`⚠️  Could not find frontmatter in: ${filePath}`);
    return false;
  }

  const frontmatterEnd = frontmatterEndMatch[0].lastIndexOf('---');
  const beforeFrontmatterEnd = content.substring(0, frontmatterEnd);
  const afterFrontmatterEnd = content.substring(frontmatterEnd);

  // Insert the renderStars function before the closing ---
  const newContent = beforeFrontmatterEnd + renderStarsFunction + '\n' + afterFrontmatterEnd;

  fs.writeFileSync(filePath, newContent, 'utf8');
  return true;
}

async function main() {
  const rootDir = path.resolve(__dirname, '..');

  const filesToFix = await getFilesToFix();
  console.log(`Found ${filesToFix.length} files that need renderStars\n`);

  let fixedCount = 0;

  for (const filePath of filesToFix) {
    try {
      const fixed = await fixFile(filePath);
      if (fixed) {
        fixedCount++;
        const relPath = path.relative(rootDir, filePath);
        console.log(`✅ Fixed: ${relPath}`);
      }
    } catch (error) {
      const relPath = path.relative(rootDir, filePath);
      console.error(`❌ Error processing ${relPath}:`, error.message);
    }
  }

  console.log(`\n✨ Fixed ${fixedCount} files`);
}

main().catch(console.error);
