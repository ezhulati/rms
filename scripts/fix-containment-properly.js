import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pagesDir = path.join(__dirname, '../src/pages');

async function fixFile(filePath) {
  let content = await fs.readFile(filePath, 'utf-8');
  let modified = false;

  // Pattern 1: Full-width div with background, min-height, and horizontal padding
  // Match: class="bg-gray-50 min-h-screen py-20 px-4 sm:px-6 lg:px-8"
  // OR: class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
  const pattern1 = /class="([^"]*)(min-h-screen)([^"]*)(bg-[a-z-]+\d+)([^"]*)(py-\d+)([^"]*)(px-4\s+sm:px-6\s+lg:px-8)([^"]*)"/g;

  if (pattern1.test(content)) {
    content = content.replace(
      /class="([^"]*)(min-h-screen)([^"]*)(bg-[a-z-]+\d+)([^"]*)(py-\d+)([^"]*)(px-4\s+sm:px-6\s+lg:px-8)([^"]*)"/g,
      (match, before, minHeight, middle1, bg, middle2, py, middle3, px, after) => {
        // Remove the px-4 sm:px-6 lg:px-8 and py-* from the outer div
        const cleaned = `${before}${minHeight}${middle1}${bg}${middle2}${middle3}${after}`.trim().replace(/\s+/g, ' ');
        return `class="${cleaned}"`;
      }
    );
    modified = true;
  }

  // After removing padding from outer div, we need to wrap content with sb-container
  // This is complex and needs manual review, so let's just remove the padding for now
  // and let the user add sb-container manually or in a second pass

  if (modified) {
    await fs.writeFile(filePath, content, 'utf-8');
    return true;
  }

  return false;
}

async function getAllAstroFiles(dir) {
  const files = [];

  async function scan(currentDir) {
    const entries = await fs.readdir(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);

      if (entry.isDirectory()) {
        await scan(fullPath);
      } else if (entry.name.endsWith('.astro')) {
        files.push(fullPath);
      }
    }
  }

  await scan(dir);
  return files;
}

async function main() {
  console.log('🔍 Finding problematic containment patterns...\n');

  const files = await getAllAstroFiles(pagesDir);
  let fixedCount = 0;
  const fixedFiles = [];

  for (const file of files) {
    const relativePath = path.relative(pagesDir, file);
    const wasFixed = await fixFile(file);

    if (wasFixed) {
      console.log(`✓ Fixed: ${relativePath}`);
      fixedFiles.push(relativePath);
      fixedCount++;
    }
  }

  console.log(`\n✅ Phase 1 Complete: Removed padding from ${fixedCount} outer divs`);
  console.log('\n📝 Next step: Add <div class="sb-container py-12"> wrapper inside these divs');
  console.log('\nFixed files:');
  fixedFiles.forEach(f => console.log(`  - ${f}`));
}

main().catch(console.error);
