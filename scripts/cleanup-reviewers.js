/**
 * Cleanup Non-People from Reviewer Mappings
 * Removes section headers and other non-person entries
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

// Keywords that indicate this is NOT a person
const nonPersonKeywords = [
  'tracking', 'resources', 'details', 'platforms', 'limits', 'plans',
  'structure', 'interaction', 'options', 'features', 'coverage', 'costs',
  'assessment', 'types', 'effectiveness', 'performance', 'backup', 'space',
  'programs', 'approach', 'technology', 'therapy', 'psychodynamic', 'key',
  'best for', 'pros', 'cons', 'getting started', 'subscription', 'value',
  'ideal', 'additional', 'communication', 'treatment', 'insurance', 'session'
];

// Patterns that indicate this is a section header, not a person
const nonPersonPatterns = [
  /\b(journeys?|perspectives?|experiences?|programs?|plans?|resources?)\b/i,
  /\b(tracking|details|features?|options?|coverage|costs?)\b/i,
  /\b(specialized|additional|key|best|ideal|getting)\b/i,
  /\b(for|vs|and|or|the)\b/i,  // Contains articles/conjunctions
  /^[A-Z][a-z]+\s+(Therapy|Treatment|Resources|Details|Plans|Programs)$/i
];

function isActualPerson(name, context) {
  const nameLower = name.toLowerCase();

  // Check if it contains non-person keywords
  for (const keyword of nonPersonKeywords) {
    if (nameLower.includes(keyword)) {
      return false;
    }
  }

  // Check if it matches non-person patterns
  for (const pattern of nonPersonPatterns) {
    if (pattern.test(name)) {
      return false;
    }
  }

  const words = name.trim().split(/\s+/);

  // Single word names
  if (words.length === 1) {
    // In case studies, single first names ARE real people
    if (context === 'case-study') {
      // Common first names pattern - starts with capital, all lowercase after
      if (/^[A-Z][a-z]+$/.test(name)) {
        return true;
      }
    }
    // Otherwise single words are likely section headers
    return false;
  }

  // Two-word names (First Last) are almost always real people
  if (words.length === 2) {
    // Both words should be capitalized like proper names
    if (words.every(w => /^[A-Z][a-z]+/.test(w))) {
      return true;
    }
  }

  // If it has 3+ words and the last word is capitalized, it's likely a section header
  if (words.length >= 3 && words[words.length - 1].match(/^[A-Z]/)) {
    return false;
  }

  return true;
}

function sanitizeFilename(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

async function main() {
  console.log('='.repeat(70));
  console.log('REVIEWER CLEANUP SCRIPT');
  console.log('='.repeat(70));

  const mappingsFile = path.join(projectRoot, 'reviewer-name-mappings.json');

  if (!fs.existsSync(mappingsFile)) {
    console.error('\n❌ reviewer-name-mappings.json not found\n');
    process.exit(1);
  }

  const mappings = JSON.parse(fs.readFileSync(mappingsFile, 'utf-8'));

  console.log(`\nAnalyzing ${mappings.length} entries...\n`);

  const actualPeople = [];
  const notPeople = [];

  for (const mapping of mappings) {
    if (isActualPerson(mapping.oldName, mapping.context)) {
      actualPeople.push(mapping);
    } else {
      notPeople.push(mapping);
    }
  }

  console.log(`Found ${actualPeople.length} actual people`);
  console.log(`Found ${notPeople.length} non-people (section headers/labels)\n`);

  if (notPeople.length > 0) {
    console.log('Non-people entries to remove:');
    notPeople.forEach(np => {
      console.log(`  - "${np.oldName}" → "${np.newName}" (${np.context})`);
    });
  }

  // Delete headshot images for non-people
  console.log('\nDeleting headshot images for non-people...');
  const imageDir = path.join(projectRoot, 'public', 'images', 'reviewers');
  let deletedCount = 0;

  for (const np of notPeople) {
    const filename = sanitizeFilename(np.newName) + '.jpg';
    const filepath = path.join(imageDir, filename);

    if (fs.existsSync(filepath)) {
      fs.unlinkSync(filepath);
      console.log(`  ✓ Deleted: ${filename}`);
      deletedCount++;
    }
  }

  console.log(`\n✓ Deleted ${deletedCount} non-person images`);

  // Save cleaned mappings
  const cleanedMappingsFile = path.join(projectRoot, 'reviewer-name-mappings-cleaned.json');
  fs.writeFileSync(cleanedMappingsFile, JSON.stringify(actualPeople, null, 2));
  console.log(`\n✓ Saved cleaned mappings to: reviewer-name-mappings-cleaned.json`);

  // Generate summary
  console.log('\n' + '='.repeat(70));
  console.log('CLEANUP SUMMARY');
  console.log('='.repeat(70));

  const caseStudies = actualPeople.filter(p => p.context === 'case-study');
  const blogComments = actualPeople.filter(p => p.context === 'blog-comment');

  console.log(`\nActual People (${actualPeople.length} total):`);
  console.log(`  - ${caseStudies.length} case study clients`);
  console.log(`  - ${blogComments.length} blog commenters`);

  console.log(`\nCase Study Clients:`);
  caseStudies.forEach(cs => {
    console.log(`  - ${cs.oldName} → ${cs.newName} (age ${cs.demographics.age || 'unknown'})`);
  });

  console.log(`\nBlog Commenters (showing first 10):`);
  blogComments.slice(0, 10).forEach(bc => {
    console.log(`  - ${bc.oldName} → ${bc.newName}`);
  });

  if (blogComments.length > 10) {
    console.log(`  ... and ${blogComments.length - 10} more`);
  }

  console.log('\n✅ Cleanup complete!\n');
}

main().catch(error => {
  console.error('\n❌ Error during cleanup:', error);
  process.exit(1);
});
