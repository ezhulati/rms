import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PAGES_DIR = path.join(__dirname, '../src/pages');

// Patterns to fix
const fixes = [
  {
    // Fix container mx-auto px-4 to use container with proper padding classes
    pattern: /class="container mx-auto px-4"/g,
    replacement: 'class="container mx-auto px-4 sm:px-6 lg:px-8"',
    description: 'Add responsive padding to container'
  },
  {
    // Fix sections without proper mobile padding
    pattern: /class="([^"]*?)py-(\d+)([^"]*)"/g,
    replacement: (match, before, num, after) => {
      // Ensure px padding exists
      if (!before.includes('px-') && !after.includes('px-')) {
        return `class="${before}py-${num} px-4 sm:px-6 lg:px-8${after}"`;
      }
      return match;
    },
    description: 'Add horizontal padding to sections'
  },
  {
    // Fix divs with width classes that might overflow
    pattern: /class="([^"]*?)w-full([^"]*)"/g,
    replacement: (match, before, after) => {
      // Ensure max-w exists or min-w-0 for flex containers
      if (!before.includes('max-w-') && !after.includes('max-w-') &&
          !before.includes('min-w-') && !after.includes('min-w-')) {
        return `class="${before}w-full min-w-0${after}"`;
      }
      return match;
    },
    description: 'Prevent width overflow with min-w-0'
  }
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  let stats = { processed: 0, changed: 0 };

  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      const subStats = processDirectory(fullPath);
      stats.processed += subStats.processed;
      stats.changed += subStats.changed;
    } else if (file.endsWith('.astro')) {
      try {
        let content = fs.readFileSync(fullPath, 'utf8');
        let originalContent = content;
        let fileChanged = false;

        fixes.forEach(fix => {
          if (typeof fix.replacement === 'function') {
            const newContent = content.replace(fix.pattern, fix.replacement);
            if (newContent !== content) {
              fileChanged = true;
              content = newContent;
            }
          } else {
            if (fix.pattern.test(content)) {
              fileChanged = true;
              content = content.replace(fix.pattern, fix.replacement);
            }
          }
        });

        if (fileChanged) {
          fs.writeFileSync(fullPath, content);
          console.log(`✅ Fixed: ${path.relative(PAGES_DIR, fullPath)}`);
          stats.changed++;
        }

        stats.processed++;
      } catch (err) {
        console.log(`❌ Error processing ${path.relative(PAGES_DIR, fullPath)}: ${err.message}`);
      }
    }
  });

  return stats;
}

console.log('🔧 Fixing mobile container issues...\\n');
const stats = processDirectory(PAGES_DIR);

console.log(`\\n📊 Results:`);
console.log(`   ✅ Files processed: ${stats.processed}`);
console.log(`   🔧 Files changed: ${stats.changed}`);
console.log(`\\n✨ Done!`);
