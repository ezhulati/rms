#!/usr/bin/env node

/**
 * Fix Blog Font Sizes
 *
 * This script fixes small font sizes (text-xs = 12px) in blog pages
 * by replacing them with text-sm (14px) for better mobile accessibility.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogFiles = [
  'src/pages/blog/stories/therapist-interviews.astro',
  'src/pages/blog/stories/self-care-practices.astro',
  'src/pages/blog/stories/therapy-success-stories.astro',
  'src/pages/blog/stories/therapy-during-crisis.astro',
  'src/pages/blog/stories/anxiety-management-stories.astro',
  'src/pages/blog/news/mental-health-policy-updates.astro',
  'src/pages/blog/news/platform-merger.astro',
  'src/pages/blog/news/who-global-report.astro',
  'src/pages/blog/news/ai-therapy-tools.astro',
  'src/pages/blog/news/latest-therapy-research.astro',
  'src/pages/blog/index.astro',
  'src/pages/blog/guides/index.astro',
  'src/pages/blog/stories/index.astro',
  'src/pages/blog/news/index.astro',
  'src/pages/blog/all.astro'
];

let filesChanged = 0;
let totalReplacements = 0;

console.log('Starting blog font size fixes...\n');

blogFiles.forEach(file => {
  const filePath = path.join(path.resolve(__dirname, '..'), file);

  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  Skipping ${file} (not found)`);
      return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;

    // Replace text-xs with text-sm for blog metadata
    const replacements = [
      // Direct text-xs replacements
      { pattern: /\btext-xs\b/g, replacement: 'text-sm' },
    ];

    replacements.forEach(({ pattern, replacement }) => {
      content = content.replace(pattern, replacement);
    });

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      const changeCount = (originalContent.match(/\btext-xs\b/g) || []).length;
      filesChanged++;
      totalReplacements += changeCount;
      console.log(`✅ ${file} - ${changeCount} replacements`);
    } else {
      console.log(`⏭️  ${file} - no changes needed`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${file}:`, error.message);
  }
});

console.log(`\n✨ Font size fix complete!`);
console.log(`Files changed: ${filesChanged}/${blogFiles.length}`);
console.log(`Total replacements: ${totalReplacements}`);
