#!/usr/bin/env node

/**
 * Fix Undefined Variables
 *
 * Searches for common undefined variable patterns and adds declarations
 */

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Map of variable names to check for and their default values
const variableDefaults = {
  'conditions': '[]',
  'audiences': '[]',
  'platforms': '[]',
  'features': '[]',
  'reviews': '[]',
  'guides': '[]',
  'articles': '[]',
  'posts': '[]',
  'categories': '[]',
  'services': '[]',
  'options': '[]',
  'items': '[]',
  'needCategories': '[]',
  'featuredAudience': 'null',
  'featuredCondition': 'null',
  'featuredPlatform': 'null',
};

async function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;

  // Find the frontmatter
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) {
    return false;
  }

  const frontmatter = frontmatterMatch[1];
  const afterFrontmatter = content.substring(frontmatterMatch[0].length);

  // Check which variables are used in the template but not defined in frontmatter
  const variablesToAdd = [];

  for (const [varName, defaultValue] of Object.entries(variableDefaults)) {
    // Check if variable is used in template
    const usagePatterns = [
      new RegExp(`\\{${varName}\\.`, 'm'),
      new RegExp(`\\{${varName}\\[`, 'm'),
      new RegExp(`\\{${varName} &&`, 'm'),
      new RegExp(`${varName}\\.map\\(`, 'm'),
    ];

    const isUsed = usagePatterns.some(pattern => pattern.test(afterFrontmatter));

    // Check if variable is already defined in frontmatter
    const definitionPattern = new RegExp(`^\\s*const\\s+${varName}\\s*=`, 'm');
    const isDefined = definitionPattern.test(frontmatter);

    if (isUsed && !isDefined) {
      variablesToAdd.push({ name: varName, value: defaultValue });
    }
  }

  if (variablesToAdd.length === 0) {
    return false;
  }

  // Add the missing variable declarations
  const declarations = variablesToAdd
    .map(v => `const ${v.name} = ${v.value};`)
    .join('\n');

  // Insert before the closing ---
  const frontmatterEndIndex = content.indexOf('---', 3);
  const beforeEnd = content.substring(0, frontmatterEndIndex);
  const afterEnd = content.substring(frontmatterEndIndex);

  const newContent = beforeEnd + '\n' + declarations + '\n' + afterEnd;

  fs.writeFileSync(filePath, newContent, 'utf8');
  return { fixed: true, variables: variablesToAdd.map(v => v.name) };
}

async function main() {
  const rootDir = path.resolve(__dirname, '..');
  const files = await glob('src/pages/**/*.astro', {
    cwd: rootDir,
    absolute: true
  });

  console.log(`Checking ${files.length} .astro files\n`);

  let fixedCount = 0;
  const fixedFiles = [];

  for (const file of files) {
    try {
      const result = await fixFile(file);
      if (result && result.fixed) {
        fixedCount++;
        const relativePath = path.relative(rootDir, file);
        console.log(`✅ Fixed: ${relativePath} (added: ${result.variables.join(', ')})`);
        fixedFiles.push({ file: relativePath, variables: result.variables });
      }
    } catch (error) {
      console.error(`❌ Error processing ${file}:`, error.message);
    }
  }

  console.log(`\n✨ Fixed ${fixedCount} files`);

  if (fixedFiles.length > 0) {
    console.log('\nSummary of fixes:');
    fixedFiles.forEach(f => {
      console.log(`  ${f.file}: ${f.variables.join(', ')}`);
    });
  }
}

main().catch(console.error);
