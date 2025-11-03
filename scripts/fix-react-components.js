#!/usr/bin/env node

/**
 * Fix React Components in Astro Files
 *
 * This script replaces React components (Button, Link) with proper HTML elements
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;
  let changed = false;

  // Remove Button and Link imports
  content = content.replace(/import\s+\{\s*Button[^}]*\}\s+from[^;]+;?\n?/g, '');
  content = content.replace(/import\s+\{\s*Link[^}]*\}\s+from[^;]+;?\n?/g, '');
  content = content.replace(/import\s+Button[^;]+;?\n?/g, '');
  content = content.replace(/import\s+Link[^;]+;?\n?/g, '');

  // Replace <Button as={Link} to="/path" ...> with <a href="/path" class="...">
  content = content.replace(
    /<Button\s+as=\{Link\}\s+to="([^"]+)"([^>]*)>\s*(.*?)\s*<\/Button>/gs,
    (match, url, attrs, text) => {
      const className = attrs.match(/className="([^"]+)"/)?.[1] ||
                       attrs.match(/class="([^"]+)"/)?.[1] ||
                       'inline-flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition';
      return `<a href="${url}" class="${className}">${text.trim()}</a>`;
    }
  );

  // Replace <Button as="a" href="/path" ...> with <a href="/path" class="...">
  content = content.replace(
    /<Button\s+as="a"\s+href="([^"]+)"([^>]*)>\s*(.*?)\s*<\/Button>/gs,
    (match, url, attrs, text) => {
      const className = attrs.match(/className="([^"]+)"/)?.[1] ||
                       attrs.match(/class="([^"]+)"/)?.[1] ||
                       'inline-flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition';
      return `<a href="${url}" class="${className}">${text.trim()}</a>`;
    }
  );

  // Replace remaining <Button ...> with <button class="...">
  content = content.replace(
    /<Button([^>]*)>\s*(.*?)\s*<\/Button>/gs,
    (match, attrs, text) => {
      const className = attrs.match(/className="([^"]+)"/)?.[1] ||
                       attrs.match(/class="([^"]+)"/)?.[1] ||
                       'inline-flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition';
      return `<button class="${className}">${text.trim()}</button>`;
    }
  );

  // Replace <Link to="/path" ...> with <a href="/path" ...>
  content = content.replace(
    /<Link\s+to="([^"]+)"([^>]*)>\s*(.*?)\s*<\/Link>/gs,
    (match, url, attrs, text) => {
      const className = attrs.match(/className="([^"]+)"/)?.[1] ||
                       attrs.match(/class="([^"]+)"/)?.[1] ||
                       '';
      const classAttr = className ? ` class="${className}"` : '';
      return `<a href="${url}"${classAttr}>${text.trim()}</a>`;
    }
  );

  // Replace <Link key={...} to="/path" ...> with <a href="/path" ...>
  content = content.replace(
    /<Link\s+key=\{[^}]+\}\s+to="([^"]+)"([^>]*)>\s*(.*?)\s*<\/Link>/gs,
    (match, url, attrs, text) => {
      const className = attrs.match(/className="([^"]+)"/)?.[1] ||
                       attrs.match(/class="([^"]+)"/)?.[1] ||
                       '';
      const classAttr = className ? ` class="${className}"` : '';
      return `<a href="${url}"${classAttr}>${text.trim()}</a>`;
    }
  );

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    changed = true;
  }

  return changed;
}

async function main() {
  const files = await glob('src/pages/**/*.astro', {
    cwd: path.resolve(__dirname, '..'),
    absolute: true
  });

  console.log(`Found ${files.length} .astro files to process\n`);

  let fixedCount = 0;

  for (const file of files) {
    try {
      const changed = await fixFile(file);
      if (changed) {
        fixedCount++;
        const relativePath = path.relative(path.resolve(__dirname, '..'), file);
        console.log(`✅ Fixed: ${relativePath}`);
      }
    } catch (error) {
      console.error(`❌ Error processing ${file}:`, error.message);
    }
  }

  console.log(`\n✨ Fixed ${fixedCount} files`);
}

main().catch(console.error);
