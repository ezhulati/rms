#!/usr/bin/env node

/**
 * Remove Undefined Components
 *
 * Removes MetaTags and HowWeReviewed component usage from Astro files
 */

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;

  // Remove MetaTags imports and usage
  content = content.replace(/import\s+MetaTags\s+from[^;]+;?\n?/g, '');
  content = content.replace(/import\s+\{\s*MetaTags[^}]*\}\s+from[^;]+;?\n?/g, '');
  content = content.replace(/<MetaTags[^>]*\/>/gs, '');
  content = content.replace(/<MetaTags[^>]*>[\s\S]*?<\/MetaTags>/gs, '');

  // Remove HowWeReviewed imports and usage
  content = content.replace(/import\s+HowWeReviewed\s+from[^;]+;?\n?/g, '');
  content = content.replace(/import\s+\{\s*HowWeReviewed[^}]*\}\s+from[^;]+;?\n?/g, '');
  content = content.replace(/<HowWeReviewed[^>]*\/>/gs, '');
  content = content.replace(/<HowWeReviewed[^>]*>[\s\S]*?<\/HowWeReviewed>/gs, '');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }

  return false;
}

async function main() {
  const rootDir = path.resolve(__dirname, '..');
  const files = await glob('src/pages/**/*.astro', {
    cwd: rootDir,
    absolute: true
  });

  console.log(`Found ${files.length} .astro files to check\n`);

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
