import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PAGES_DIR = path.join(__dirname, '../src/pages');

function convertToAstro(content) {
  // Extract icon imports
  const iconMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/);
  const icons = iconMatch ? iconMatch[1].split(',').map(i => i.trim()).join(', ') : '';

  // Remove imports
  let cleaned = content;
  cleaned = cleaned.replace(/import\s+React.*?;?\n/g, '');
  cleaned = cleaned.replace(/import\s+{\s*Link.*?}.*?from\s*['"]react-router-dom['"].*?;?\n/g, '');
  cleaned = cleaned.replace(/import\s+{\s*[^}]+\s*}\s*from\s*['"]lucide-react['"].*?;?\n/g, '');

  // Try to extract JSX - multiple patterns
  let jsxMatch = cleaned.match(/return\s*\(([\s\S]*?)\);?\s*};?\s*export\s+default/);
  if (!jsxMatch) {
    jsxMatch = cleaned.match(/return\s*<([^>]*>[\s\S]*?)<\/\w+>;?\s*};?\s*export\s+default/);
    if (jsxMatch) jsxMatch[1] = '<' + jsxMatch[1];
  }

  if (!jsxMatch) {
    return null; // Can't auto-convert
  }

  let jsx = jsxMatch[1].trim();

  // Convert syntax
  jsx = jsx.replace(/className=/g, 'class=');
  jsx = jsx.replace(/<Link\s+to="/g, '<a href="');
  jsx = jsx.replace(/<\/Link>/g, '</a>');

  // Build Astro file
  return `---
import BaseLayout from '../layouts/BaseLayout.astro';
${icons ? `import { ${icons} } from 'lucide-react';` : ''}
---

<BaseLayout>
${jsx}
</BaseLayout>
`;
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  let stats = { converted: 0, skipped: 0, failed: 0 };

  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      const subStats = processDirectory(fullPath);
      stats.converted += subStats.converted;
      stats.skipped += subStats.skipped;
      stats.failed += subStats.failed;
    } else if (file.endsWith('.tsx') && !file.startsWith('_')) {
      const astroPath = fullPath.replace('.tsx', '.astro');

      // Skip if astro version exists
      if (fs.existsSync(astroPath)) {
        stats.skipped++;
        return;
      }

      try {
        const content = fs.readFileSync(fullPath, 'utf8');
        const astro = convertToAstro(content);

        if (astro) {
          fs.writeFileSync(astroPath, astro);
          console.log(`✅ ${path.relative(PAGES_DIR, fullPath)}`);
          stats.converted++;
        } else {
          console.log(`⚠️  ${path.relative(PAGES_DIR, fullPath)} - needs manual conversion`);
          stats.failed++;
        }
      } catch (err) {
        console.log(`❌ ${path.relative(PAGES_DIR, fullPath)} - ${err.message}`);
        stats.failed++;
      }
    }
  });

  return stats;
}

console.log('🚀 Batch converting all .tsx pages to .astro...\n');
const stats = processDirectory(PAGES_DIR);

console.log(`\n📊 Conversion Results:`);
console.log(`   ✅ Converted: ${stats.converted}`);
console.log(`   ⏭️  Skipped (already exist): ${stats.skipped}`);
console.log(`   ⚠️  Need manual conversion: ${stats.failed}`);
console.log(`\n✨ Done!`);
