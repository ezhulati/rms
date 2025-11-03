#!/usr/bin/env node

/**
 * Add Minimal Platforms Data
 *
 * Adds empty/minimal platforms data to files that are missing it
 */

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const minimalPlatformsData = `
const platforms = [];
`;

async function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Check if platforms is already defined
  if (content.includes('const platforms')) {
    return false;
  }

  // Check if the file uses platforms
  if (!content.includes('platforms.map') && !content.includes('{platforms')) {
    return false;
  }

  // Find the end of the frontmatter (the closing ---)
  const frontmatterEndMatch = content.match(/^---\n([\s\S]*?)\n---/);

  if (!frontmatterEndMatch) {
    return false;
  }

  const frontmatterEnd = frontmatterEndMatch[0].lastIndexOf('---');
  const beforeFrontmatterEnd = content.substring(0, frontmatterEnd);
  const afterFrontmatterEnd = content.substring(frontmatterEnd);

  // Insert the platforms data before the closing ---
  const newContent = beforeFrontmatterEnd + minimalPlatformsData + '\n' + afterFrontmatterEnd;

  fs.writeFileSync(filePath, newContent, 'utf8');
  return true;
}

async function main() {
  const rootDir = path.resolve(__dirname, '..');
  const files = await glob('src/pages/best/**/*.astro', {
    cwd: rootDir,
    absolute: true
  });

  console.log(`Found ${files.length} files to check\n`);

  let fixedCount = 0;

  for (const file of files) {
    try {
      const fixed = await fixFile(file);
      if (fixed) {
        fixedCount++;
        const relativePath = path.relative(rootDir, file);
        console.log(`✅ Fixed: ${relativePath}`);
      }
    } catch (error) {
      console.error(`❌ Error processing ${file}:`, error.message);
    }
  }

  console.log(`\n✨ Fixed ${fixedCount} files`);
}

main().catch(console.error);
