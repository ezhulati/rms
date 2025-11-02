/**
 * Astro Migration Helper Script
 *
 * This script helps convert React + React Router pages to Astro pages
 * Run with: node scripts/migrate-to-astro.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const SRC_DIR = path.join(__dirname, '../src/pages');
const BACKUP_DIR = path.join(__dirname, '../src/_old_react_backup');

/**
 * Convert a simple static React page to Astro
 */
function convertSimplePageToAstro(content, filePath) {
  // Extract imports
  const imports = [];
  const iconImports = [];

  // Extract lucide-react icons
  const iconMatch = content.match(/import\s*{([^}]+)}\s*from\s*['"]lucide-react['"]/);
  if (iconMatch) {
    iconImports.push(iconMatch[1].trim());
  }

  // Extract title from component
  const titleMatch = content.match(/<h1[^>]*>([^<]+)<\/h1>/) ||
                     content.match(/title:\s*['"]([^'"]+)['"]/);
  const title = titleMatch ? titleMatch[1] : 'Page Title';

  // Extract description
  const descMatch = content.match(/<p[^>]*className="[^"]*text-xl[^"]*"[^>]*>([^<]+)<\/p>/) ||
                    content.match(/description:\s*['"]([^'"]+)['"]/);
  const description = descMatch ? descMatch[1] : 'Page description';

  // Generate Astro frontmatter
  let frontmatter = `---\nimport BaseLayout from '../layouts/BaseLayout.astro';\n`;

  if (iconImports.length > 0) {
    frontmatter += `import { ${iconImports.join(', ')} } from 'lucide-react';\n`;
  }

  frontmatter += `\nconst title = "${title}";\nconst description = "${description}";\n---\n\n`;

  // Convert JSX to Astro syntax
  let astroContent = content;

  // Remove React imports
  astroContent = astroContent.replace(/import\s+React.*?from\s+['"]react['"];?\n/g, '');
  astroContent = astroContent.replace(/import\s+{[^}]+}\s+from\s+['"]react-router-dom['"];?\n/g, '');

  // Remove component declaration
  astroContent = astroContent.replace(/const\s+\w+\s*=\s*\(\)\s*=>\s*{?\n?\s*return\s*\(?\n?/g, '');
  astroContent = astroContent.replace(/\n?\s*\);?\n?\s*};?\n?\s*export\s+default\s+\w+;?/g, '');

  // Convert Link to a
  astroContent = astroContent.replace(/<Link\s+to="([^"]+)"/g, '<a href="$1"');
  astroContent = astroContent.replace(/<\/Link>/g, '</a>');

  // Convert className to class
  astroContent = astroContent.replace(/className=/g, 'class=');

  // Wrap in BaseLayout
  const wrappedContent = `<BaseLayout title={title} description={description}>\n${astroContent}\n</BaseLayout>`;

  return frontmatter + wrappedContent;
}

/**
 * Check if a file is a simple static page (vs interactive component)
 */
function isSimpleStaticPage(content) {
  // Check for state management or complex React features
  const hasState = /useState|useEffect|useCallback|useMemo|useReducer/.test(content);
  const hasRouter = /useNavigate|useLocation|useParams/.test(content);
  const hasComplexLogic = content.split('\n').length > 300;

  return !hasState && !hasRouter && !hasComplexLogic;
}

/**
 * Scan pages directory and categorize files
 */
function scanPages(dir, prefix = '') {
  const files = fs.readdirSync(dir);
  const results = {
    simple: [],
    interactive: [],
    errors: []
  };

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const relativePath = path.join(prefix, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      const subResults = scanPages(filePath, relativePath);
      results.simple.push(...subResults.simple);
      results.interactive.push(...subResults.interactive);
      results.errors.push(...subResults.errors);
    } else if (file.endsWith('.tsx') && !file.startsWith('_')) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        if (isSimpleStaticPage(content)) {
          results.simple.push({ path: relativePath, fullPath: filePath });
        } else {
          results.interactive.push({ path: relativePath, fullPath: filePath });
        }
      } catch (err) {
        results.errors.push({ path: relativePath, error: err.message });
      }
    }
  });

  return results;
}

/**
 * Main migration function
 */
function main() {
  console.log('🚀 Astro Migration Helper\n');
  console.log('Scanning pages directory...\n');

  const results = scanPages(SRC_DIR);

  console.log(`📊 Migration Analysis:`);
  console.log(`   ✅ Simple static pages: ${results.simple.length}`);
  console.log(`   ⚡ Interactive pages: ${results.interactive.length}`);
  console.log(`   ❌ Errors: ${results.errors.length}\n`);

  console.log(`📝 Next Steps:`);
  console.log(`\n1. Simple Static Pages (${results.simple.length} files):`);
  console.log(`   These can be auto-converted to Astro`);
  console.log(`   Example files:`);
  results.simple.slice(0, 5).forEach(f => console.log(`   - ${f.path}`));

  console.log(`\n2. Interactive Pages (${results.interactive.length} files):`);
  console.log(`   These need to become React islands`);
  console.log(`   Example files:`);
  results.interactive.slice(0, 5).forEach(f => console.log(`   - ${f.path}`));

  if (results.errors.length > 0) {
    console.log(`\n3. Errors (${results.errors.length} files):`);
    results.errors.forEach(e => console.log(`   - ${e.path}: ${e.error}`));
  }

  // Save results to JSON for reference
  fs.writeFileSync(
    path.join(__dirname, 'migration-analysis.json'),
    JSON.stringify(results, null, 2)
  );
  console.log(`\n💾 Full analysis saved to: scripts/migration-analysis.json`);
}

// Run the script
main();

export { convertSimplePageToAstro, isSimpleStaticPage };
