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

const filesToFix = [
  'src/pages/best/audiences/BestForLGBTQ.astro',
  'src/pages/best/audiences/BestForParents.astro',
  'src/pages/best/audiences/BestForSeniors.astro',
  'src/pages/best/audiences/BestForTeens.astro',
  'src/pages/best/audiences/BestForVeterans.astro',
  'src/pages/best/conditions/BestForAddiction.astro',
  'src/pages/best/conditions/BestForAnxiety.astro',
  'src/pages/best/conditions/BestForDepression.astro',
  'src/pages/best/conditions/BestForEatingDisorders.astro',
  'src/pages/best/conditions/best-for-depression.astro',
  'src/pages/best/conditions/BestForOCD.astro',
  'src/pages/best/conditions/BestForPTSD.astro',
  'src/pages/best/platforms/BestMedicationTherapyPlatforms.astro',
  'src/pages/best/platforms/BestSpecializedPlatforms.astro',
  'src/pages/best/specific-needs/BestSpecificNeeds.astro',
];

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
  let fixedCount = 0;

  for (const relPath of filesToFix) {
    const filePath = path.join(rootDir, relPath);
    try {
      const fixed = await fixFile(filePath);
      if (fixed) {
        fixedCount++;
        console.log(`✅ Fixed: ${relPath}`);
      }
    } catch (error) {
      console.error(`❌ Error processing ${relPath}:`, error.message);
    }
  }

  console.log(`\n✨ Fixed ${fixedCount} files`);
}

main().catch(console.error);
