import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pagesDir = path.join(__dirname, '../src/pages');

// Pattern to find and fix
const patterns = [
  {
    // Fix full-width background div with padding - remove padding since container handles it
    from: /class="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8"/g,
    to: 'class="bg-gray-50 min-h-screen"'
  },
  {
    // Fix container with excessive padding
    from: /class="container mx-auto px-4 sm:px-6 lg:px-8"/g,
    to: 'class="sb-container py-12"'
  },
  {
    // Fix sections with full-width background but no proper container
    from: /class="py-16 px-4 sm:px-6 lg:px-8 bg-/g,
    to: 'class="bg-'
  },
  {
    // Then wrap content in sb-container (this is a placeholder, needs manual review)
    from: /class="py-12 px-4 sm:px-6 lg:px-8"/g,
    to: 'class="sb-container py-12"'
  }
];

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

async function fixFile(filePath) {
  let content = await fs.readFile(filePath, 'utf-8');
  let modified = false;

  for (const pattern of patterns) {
    if (pattern.from.test(content)) {
      content = content.replace(pattern.from, pattern.to);
      modified = true;
    }
  }

  if (modified) {
    await fs.writeFile(filePath, content, 'utf-8');
    return true;
  }

  return false;
}

async function main() {
  console.log('🔍 Finding all Astro files...');
  const files = await getAllAstroFiles(pagesDir);
  console.log(`Found ${files.length} Astro files\n`);

  let fixedCount = 0;

  for (const file of files) {
    const relativePath = path.relative(pagesDir, file);
    const wasFixed = await fixFile(file);

    if (wasFixed) {
      console.log(`✓ Fixed: ${relativePath}`);
      fixedCount++;
    }
  }

  console.log(`\n✅ Fixed ${fixedCount} files`);
}

main().catch(console.error);
