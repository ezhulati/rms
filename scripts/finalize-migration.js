/**
 * Finalize Reviewer Migration
 * 1. Update blog comment images to use reviewer headshots
 * 2. Fix pronoun consistency in case studies
 * 3. Prepare files for deep humanization
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

function sanitizeFilename(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

async function updateBlogImages() {
  console.log('\n' + '='.repeat(70));
  console.log('UPDATING BLOG COMMENT IMAGES');
  console.log('='.repeat(70));

  // Load cleaned mappings
  const mappingsFile = path.join(projectRoot, 'reviewer-name-mappings-cleaned.json');
  const mappings = JSON.parse(fs.readFileSync(mappingsFile, 'utf-8'));

  // Create name → image path mapping
  const nameToImage = {};
  mappings.forEach(m => {
    const imagePath = `/images/reviewers/${sanitizeFilename(m.newName)}.jpg`;
    nameToImage[m.newName] = imagePath;
  });

  // Find all blog story files
  const blogFiles = await glob('src/pages/blog/stories/**/*.astro', { cwd: projectRoot });

  console.log(`\nFound ${blogFiles.length} blog files to process\n`);

  let totalUpdates = 0;

  for (const file of blogFiles) {
    const filepath = path.join(projectRoot, file);
    let content = fs.readFileSync(filepath, 'utf-8');
    let modified = false;
    let fileUpdates = 0;

    // Pattern: Find img tags followed by commenter names in h4 tags
    // We need to update the img src to match the commenter name

    for (const [name, imagePath] of Object.entries(nameToImage)) {
      // Look for pattern: <img ... /> followed by <h4>Name</h4>
      // We'll search for the h4 with the name, then backtrack to find the img before it

      const namePattern = new RegExp(
        `(<img[^>]*src=["'])([^"']+)(["'][^>]*/>\\s*<div>\\s*<div[^>]*>\\s*<h4[^>]*>${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`,
        'g'
      );

      const matches = [...content.matchAll(namePattern)];

      if (matches.length > 0) {
        for (const match of matches) {
          const oldSrc = match[2];
          if (oldSrc !== imagePath) {
            content = content.replace(
              new RegExp(`(<img[^>]*src=["'])${oldSrc.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(["'][^>]*/>\\s*<div>\\s*<div[^>]*>\\s*<h4[^>]*>${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'g'),
              `$1${imagePath}$2`
            );
            modified = true;
            fileUpdates++;
            console.log(`  ✓ ${name}: ${oldSrc} → ${imagePath}`);
          }
        }
      }
    }

    if (modified) {
      fs.writeFileSync(filepath, content, 'utf-8');
      console.log(`\n✓ Updated ${path.basename(filepath)} (${fileUpdates} images)\n`);
      totalUpdates += fileUpdates;
    }
  }

  console.log(`\n✅ Total: Updated ${totalUpdates} comment images\n`);
}

async function fixPronounConsistency() {
  console.log('\n' + '='.repeat(70));
  console.log('FIXING PRONOUN CONSISTENCY IN CASE STUDIES');
  console.log('='.repeat(70));

  // Load original mappings (has file paths)
  const originalMappingsFile = path.join(projectRoot, 'reviewer-name-mappings.json');
  const originalMappings = JSON.parse(fs.readFileSync(originalMappingsFile, 'utf-8'));

  // Get case study clients
  const caseStudies = originalMappings.filter(m => m.context === 'case-study' && m.file);

  // Determine gender for each new name based on common name patterns
  const genderMap = {
    'Amelia Patel': { gender: 'female', pronouns: ['she', 'her', 'hers', 'herself'] },
    'Sebastian Yang': { gender: 'male', pronouns: ['he', 'him', 'his', 'himself'] },
    'Camila O\'Brien': { gender: 'female', pronouns: ['she', 'her', 'hers', 'herself'] },
    'Diego Brown': { gender: 'male', pronouns: ['he', 'him', 'his', 'himself'] },
    'Mason Torres': { gender: 'male', pronouns: ['he', 'him', 'his', 'himself'] },
    'Lucas Thomas': { gender: 'male', pronouns: ['he', 'him', 'his', 'himself'] }
  };

  console.log('\nGender assignments:');
  for (const [name, info] of Object.entries(genderMap)) {
    console.log(`  ${name} → ${info.gender}`);
  }
  console.log('');

  let totalFiles = 0;
  let totalChanges = 0;

  for (const cs of caseStudies) {
    const genderInfo = genderMap[cs.newName];
    if (!genderInfo) {
      console.log(`⚠  No gender info for ${cs.newName}, skipping...`);
      continue;
    }

    console.log(`\nProcessing: ${cs.oldName} → ${cs.newName} (${genderInfo.gender})`);

    // Read the file
    let content = fs.readFileSync(cs.file, 'utf-8');
    let changes = 0;

    // Strategy: Replace pronouns in narrative text (not in h1/h2 tags)
    // We need to be smart about this - only replace in paragraph contexts

    if (genderInfo.gender === 'female') {
      // Replace male pronouns with female
      const replacements = [
        { old: /\bhe\s+/gi, new: 'she ', caseSensitive: true },
        { old: /\s+his\s+/gi, new: ' her ', caseSensitive: true },
        { old: /\s+his\./gi, new: ' hers.', caseSensitive: true },
        { old: /\s+him\s+/gi, new: ' her ', caseSensitive: true },
        { old: /\s+him\./gi, new: ' her.', caseSensitive: true },
        { old: /\bhimself\b/gi, new: 'herself' }
      ];

      for (const { old, new: replacement } of replacements) {
        const matches = content.match(old);
        if (matches) {
          content = content.replace(old, (match) => {
            // Preserve case
            if (match[0] === match[0].toUpperCase() && match.length > 1) {
              return replacement.charAt(0).toUpperCase() + replacement.slice(1);
            }
            return replacement;
          });
          changes += matches.length;
        }
      }
    } else if (genderInfo.gender === 'male') {
      // Replace female pronouns with male
      const replacements = [
        { old: /\bshe\s+/gi, new: 'he ', caseSensitive: true },
        { old: /\s+her\s+/gi, new: ' his ', caseSensitive: true },
        { old: /\s+her\./gi, new: ' his.', caseSensitive: true },
        { old: /\s+hers\s+/gi, new: ' his ', caseSensitive: true },
        { old: /\s+hers\./gi, new: ' his.', caseSensitive: true },
        { old: /\bherself\b/gi, new: 'himself' }
      ];

      for (const { old, new: replacement } of replacements) {
        const matches = content.match(old);
        if (matches) {
          content = content.replace(old, (match) => {
            // Preserve case
            if (match[0] === match[0].toUpperCase() && match.length > 1) {
              return replacement.charAt(0).toUpperCase() + replacement.slice(1);
            }
            return replacement;
          });
          changes += matches.length;
        }
      }
    }

    // Also replace gendered terms
    if (genderInfo.gender === 'female') {
      content = content.replace(/\b(a|the)\s+man\b/gi, (match) => {
        const article = match.match(/\b(a|the)\b/i)[0];
        return `${article} woman`;
      });
      content = content.replace(/\bmale\s+(professional|executive|student)/gi, 'female $1');
    } else if (genderInfo.gender === 'male') {
      content = content.replace(/\b(a|the)\s+woman\b/gi, (match) => {
        const article = match.match(/\b(a|the)\b/i)[0];
        return `${article} man`;
      });
      content = content.replace(/\bfemale\s+(professional|executive|student)/gi, 'male $1');
    }

    if (changes > 0) {
      fs.writeFileSync(cs.file, content, 'utf-8');
      console.log(`  ✓ Fixed ${changes} pronoun/gender references`);
      totalFiles++;
      totalChanges += changes;
    } else {
      console.log(`  • No changes needed`);
    }
  }

  console.log(`\n✅ Updated ${totalFiles} files with ${totalChanges} total changes\n`);
}

async function main() {
  console.log('='.repeat(70));
  console.log('FINALIZE REVIEWER MIGRATION');
  console.log('='.repeat(70));

  // Step 1: Update blog comment images
  await updateBlogImages();

  // Step 2: Fix pronoun consistency
  await fixPronounConsistency();

  console.log('\n' + '='.repeat(70));
  console.log('MIGRATION FINALIZED');
  console.log('='.repeat(70));
  console.log('\n✅ All automated fixes complete!');
  console.log('\nNext: Manual deep humanization of content');
  console.log('  - Add specific personal details');
  console.log('  - Vary sentence structures');
  console.log('  - Make quotes more conversational');
  console.log('  - Add realistic imperfections\n');
}

main().catch(error => {
  console.error('\n❌ Error:', error);
  process.exit(1);
});
