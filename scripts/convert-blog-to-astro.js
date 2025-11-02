import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Convert a blog React component to Astro
 */
function convertBlogToAstro(tsxContent) {
  // Extract imports from lucide-react
  const iconMatches = tsxContent.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/);
  const icons = iconMatches ? iconMatches[1].split(',').map(i => i.trim()).join(', ') : '';

  // Remove all the React/Router stuff and extract the JSX
  let content = tsxContent;

  // Remove imports
  content = content.replace(/import\s+React.*?;?\n/g, '');
  content = content.replace(/import\s+{\s*Link\s*}.*?;?\n/g, '');
  content = content.replace(/import\s+{\s*[^}]+\s*}\s*from\s*['"]react-router-dom['"].*?;?\n/g, '');
  content = content.replace(/import\s+{\s*[^}]+\s*}\s*from\s*['"]lucide-react['"].*?;?\n/g, '');
  content = content.replace(/import\s+BlogLayout.*?;?\n/g, '');

  // Extract the component name and JSX content - try multiple patterns
  let componentMatch = content.match(/const\s+(\w+)\s*=\s*\(\)\s*=>\s*{?\s*return\s*\(([\s\S]*)\);?\s*};?\s*export\s+default/);

  // Try alternate pattern: const Name: React.FC = () => { return (...); }
  if (!componentMatch) {
    componentMatch = content.match(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{?\s*return\s*\(([\s\S]*)\);?\s*};?\s*export\s+default/);
  }

  if (!componentMatch) {
    throw new Error('Could not parse component structure');
  }

  let jsxContent = componentMatch[2];

  // Convert BlogLayout to BaseLayout import
  jsxContent = jsxContent.replace(/<BlogLayout>/g, '');
  jsxContent = jsxContent.replace(/<\/BlogLayout>/g, '');

  // Convert className to class
  jsxContent = jsxContent.replace(/className=/g, 'class=');

  // Convert Link to a
  jsxContent = jsxContent.replace(/<Link\s+to="/g, '<a href="');
  jsxContent = jsxContent.replace(/<\/Link>/g, '</a>');

  // Build the Astro file
  const astroFile = `---
import BlogLayout from '../BlogLayout.astro';
${icons ? `import { ${icons} } from 'lucide-react';` : ''}
---

<BlogLayout>
${jsxContent}
</BlogLayout>
`;

  return astroFile;
}

// Get all blog .tsx files
const blogDirs = [
  path.join(__dirname, '../src/pages/blog/guides'),
  path.join(__dirname, '../src/pages/blog/stories'),
  path.join(__dirname, '../src/pages/blog/news')
];

let converted = 0;
let errors = [];

blogDirs.forEach(dir => {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    if (file.endsWith('.tsx') && file !== 'index.tsx') {
      const tsxPath = path.join(dir, file);
      const astroPath = tsxPath.replace('.tsx', '.astro');

      // Skip if .astro version already exists
      if (fs.existsSync(astroPath)) {
        console.log(`⏭️  Skipping ${file} (astro version exists)`);
        return;
      }

      try {
        const tsxContent = fs.readFileSync(tsxPath, 'utf8');
        const astroContent = convertBlogToAstro(tsxContent);
        fs.writeFileSync(astroPath, astroContent);
        console.log(`✅ Converted ${file}`);
        converted++;
      } catch (err) {
        console.log(`❌ Error converting ${file}: ${err.message}`);
        errors.push({ file, error: err.message });
      }
    }
  });
});

console.log(`\n📊 Conversion complete:`);
console.log(`   ✅ Converted: ${converted} files`);
console.log(`   ❌ Errors: ${errors.length} files`);

if (errors.length > 0) {
  console.log(`\nErrors:`);
  errors.forEach(e => console.log(`   - ${e.file}: ${e.error}`));
}
