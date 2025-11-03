#!/usr/bin/env node

/**
 * Script to populate empty data arrays with real content from siteData.ts
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Mapping of variable names to siteData imports
const dataMapping = {
  'platforms': 'platforms',
  'features': 'platforms',
  'reviews': 'reviews',
  'guides': 'blogArticles',
  'articles': 'blogArticles',
  'posts': 'blogArticles',
  'blogPosts': 'blogArticles',
  'newsArticles': 'blogArticles',
  'featuredArticles': 'featuredArticles',
  'featuredArticle': 'featuredArticles[0]',
  'assessments': 'assessments',
  'matchers': 'matchers',
  'worksheetCategories': 'worksheetCategories',
  'conditions': '[]', // Keep empty for now
  'audiences': '[]', // Keep empty for now
  'categories': '[]', // Keep empty for now
  'services': '[]', // Keep empty for now
  'options': '[]', // Keep empty for now
  'items': '[]', // Keep empty for now
  'needCategories': '[]', // Keep empty for now
  'caseStudies': '[]', // Keep empty for now
  'apps': '[]', // Keep empty for now
  'filteredPosts': 'blogArticles', // Keep empty for now
  'searchTerm': "''",
  'selectedCategory': "'all'",
  'hotlines': '[]', // Keep empty for now
  'resources': '[]', // Keep empty for now
  'therapists': '[]', // Keep empty for now
  'providers': '[]', // Keep empty for now
  'tools': '[]', // Keep empty for now
  'roundups': '[]', // Keep empty for now
  'comparisonPoints': '[]', // Keep empty for now
  'communityResources': '[]', // Keep empty for now
  'faqs': '[]', // Keep empty for now
  'benefits': '[]', // Keep empty for now
  'drawbacks': '[]', // Keep empty for now
  'considerations': '[]', // Keep empty for now
  'pros': '[]', // Keep empty for now
  'cons': '[]', // Keep empty for now
  'bestFor': '[]', // Keep empty for now
  'notIdealFor': '[]', // Keep empty for now
};

// Variables that need import
const needsImport = ['platforms', 'reviews', 'blogArticles', 'featuredArticles', 'assessments', 'matchers', 'worksheetCategories'];

function updateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  let needsDataImport = false;

  // Check if file has frontmatter
  if (!content.startsWith('---')) {
    return;
  }

  const frontmatterEnd = content.indexOf('---', 3);
  if (frontmatterEnd === -1) {
    return;
  }

  let frontmatter = content.substring(0, frontmatterEnd + 3);
  const body = content.substring(frontmatterEnd + 3);

  // Check which data variables are used
  const usedData = new Set();

  for (const [varName, dataSource] of Object.entries(dataMapping)) {
    const regex = new RegExp(`const\\s+${varName}\\s*=\\s*\\[\\]\\s*;`, 'g');
    if (regex.test(frontmatter)) {
      usedData.add(dataSource);
      needsDataImport = true;
      modified = true;
    }
  }

  // Add import if needed
  if (needsDataImport && !frontmatter.includes("from '../siteData")) {
    const imports = Array.from(usedData).filter(d => needsImport.includes(d) && d !== '[]');
    if (imports.length > 0) {
      const importStatement = `import { ${imports.join(', ')} } from '../siteData';\n`;

      // Find where to insert import (after existing imports)
      const lines = frontmatter.split('\n');
      let insertIndex = 1; // After first ---

      for (let i = 1; i < lines.length; i++) {
        if (lines[i].startsWith('import ')) {
          insertIndex = i + 1;
        } else if (lines[i].trim() && !lines[i].startsWith('import')) {
          break;
        }
      }

      lines.splice(insertIndex, 0, importStatement);
      frontmatter = lines.join('\n');
    }
  }

  // Replace empty arrays with actual data
  for (const [varName, dataSource] of Object.entries(dataMapping)) {
    if (dataSource && dataSource !== '[]' && !dataSource.startsWith("'")) {
      const regex = new RegExp(`const\\s+${varName}\\s*=\\s*\\[\\]\\s*;`, 'g');
      frontmatter = frontmatter.replace(regex, `const ${varName} = ${dataSource};`);
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, frontmatter + body);
    console.log(`✓ Updated: ${filePath}`);
    return true;
  }

  return false;
}

// Find all .astro files in pages directory
const pagesDir = path.join(__dirname, '..', 'src', 'pages');
const files = glob.sync(`${pagesDir}/**/*.astro`);

console.log(`Found ${files.length} .astro files\n`);

let updatedCount = 0;
files.forEach(file => {
  if (updateFile(file)) {
    updatedCount++;
  }
});

console.log(`\n✓ Updated ${updatedCount} files with real content data`);
