/**
 * Comprehensive Reviewer Migration Script
 * 1. Inventory all reviewers
 * 2. Generate new names
 * 3. Generate headshots via Ideogram API
 * 4. Replace names and images
 * 5. Humanize content
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

// ============================================================================
// NAME GENERATION
// ============================================================================

class NameGenerator {
  constructor() {
    this.usedNames = new Set();
    this.mappings = [];

    this.maleFirstNames = [
      'Marcus', 'Jordan', 'Devon', 'Elijah', 'Adrian', 'Cameron', 'Isaac', 'Miles',
      'Kai', 'Leo', 'Oliver', 'Ethan', 'Noah', 'Liam', 'Lucas', 'Mason',
      'James', 'Benjamin', 'Henry', 'Alexander', 'Daniel', 'Matthew', 'Jackson',
      'Sebastian', 'Jayden', 'Xavier', 'Mateo', 'Diego', 'Luis', 'Carlos'
    ];

    this.femaleFirstNames = [
      'Maya', 'Zoe', 'Riley', 'Emma', 'Olivia', 'Ava', 'Sophia', 'Isabella',
      'Mia', 'Amelia', 'Harper', 'Evelyn', 'Luna', 'Aria', 'Layla', 'Chloe',
      'Ella', 'Emily', 'Madison', 'Sofia', 'Camila', 'Gabriella', 'Jasmine',
      'Natalie', 'Grace', 'Hannah', 'Victoria', 'Naomi', 'Aaliyah', 'Leah'
    ];

    this.lastNames = [
      'Anderson', 'Williams', 'Johnson', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore',
      'Taylor', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Thompson', 'Garcia',
      'Martinez', 'Rodriguez', 'Lopez', 'Gonzalez', 'Hernandez', 'Perez', 'Sanchez',
      'Rivera', 'Torres', 'Ramirez', 'Kim', 'Lee', 'Park', 'Nguyen', 'Tran', 'Patel',
      'Singh', 'Kumar', 'Chen', 'Wang', 'Liu', 'Yang', 'Zhang', 'Wu', 'Huang',
      'Cohen', 'Levy', 'Rosenberg', 'O\'Brien', 'Murphy', 'Kelly', 'Sullivan', 'Walsh'
    ];
  }

  getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  generateName(gender = 'unknown', ethnicity = null) {
    let firstName;
    let lastName;
    let fullName;
    let attempts = 0;

    do {
      if (gender === 'female') {
        firstName = this.getRandomItem(this.femaleFirstNames);
      } else if (gender === 'male') {
        firstName = this.getRandomItem(this.maleFirstNames);
      } else {
        firstName = Math.random() < 0.5
          ? this.getRandomItem(this.femaleFirstNames)
          : this.getRandomItem(this.maleFirstNames);
      }

      lastName = this.getLastName(ethnicity);
      fullName = `${firstName} ${lastName}`;

      attempts++;
      if (attempts > 50) {
        fullName = `${firstName} ${String.fromCharCode(65 + Math.floor(Math.random() * 26))}. ${lastName}`;
        break;
      }
    } while (this.usedNames.has(fullName));

    this.usedNames.add(fullName);
    return fullName;
  }

  generateFirstName(gender = 'unknown') {
    if (gender === 'female') {
      return this.getRandomItem(this.femaleFirstNames);
    } else if (gender === 'male') {
      return this.getRandomItem(this.maleFirstNames);
    } else {
      return Math.random() < 0.5
        ? this.getRandomItem(this.femaleFirstNames)
        : this.getRandomItem(this.maleFirstNames);
    }
  }

  getLastName(ethnicity) {
    if (!ethnicity) {
      return this.getRandomItem(this.lastNames);
    }

    const ethnicityLower = ethnicity.toLowerCase();

    if (ethnicityLower.includes('hispanic') || ethnicityLower.includes('latin')) {
      const names = ['Garcia', 'Martinez', 'Rodriguez', 'Lopez', 'Gonzalez', 'Hernandez', 'Perez', 'Sanchez'];
      return this.getRandomItem(names);
    }

    if (ethnicityLower.includes('asian') || ethnicityLower.includes('chinese') || ethnicityLower.includes('korean')) {
      const names = ['Kim', 'Lee', 'Park', 'Nguyen', 'Tran', 'Chen', 'Wang', 'Liu', 'Yang', 'Zhang'];
      return this.getRandomItem(names);
    }

    if (ethnicityLower.includes('indian') || ethnicityLower.includes('south asian')) {
      const names = ['Patel', 'Singh', 'Kumar', 'Sharma', 'Gupta'];
      return this.getRandomItem(names);
    }

    if (ethnicityLower.includes('african') || ethnicityLower.includes('black')) {
      const names = ['Williams', 'Johnson', 'Jackson', 'Brown', 'Davis', 'Wilson'];
      return this.getRandomItem(names);
    }

    if (ethnicityLower.includes('irish')) {
      const names = ['O\'Brien', 'Murphy', 'Kelly', 'Sullivan', 'Walsh'];
      return this.getRandomItem(names);
    }

    return this.getRandomItem(this.lastNames);
  }

  addMapping(oldName, newName, context, demographics = {}) {
    this.mappings.push({
      oldName,
      newName,
      context,
      demographics
    });
  }

  getMappings() {
    return this.mappings;
  }
}

// ============================================================================
// IDEOGRAM CLIENT
// ============================================================================

class IdeogramClient {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = 'https://api.ideogram.ai/v1/ideogram-v3/generate';
    this.outputDir = path.join(projectRoot, 'public', 'images', 'reviewers');

    if (!fs.existsSync(this.outputDir)) {
      fs.mkdirSync(this.outputDir, { recursive: true });
    }
  }

  async generateHeadshot(params) {
    const prompt = this.buildHeadshotPrompt(params);

    const formData = new FormData();
    formData.append('prompt', prompt);
    formData.append('aspect_ratio', '1x1');  // Use aspect_ratio instead of resolution
    formData.append('rendering_speed', 'QUALITY');
    formData.append('style_type', 'REALISTIC');
    formData.append('magic_prompt', 'ON');
    formData.append('negative_prompt', 'cartoon, anime, illustration, painting, drawing, art, sketch, artificial, fake, low quality, blurry, distorted face, multiple faces, deformed');

    try {
      const response = await fetch(this.baseURL, {
        method: 'POST',
        headers: {
          'Api-Key': this.apiKey
        },
        body: formData
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Ideogram API error (${response.status}): ${errorText}`);
      }

      const data = await response.json();

      if (data.data.length === 0) {
        throw new Error('No images generated');
      }

      const imageUrl = data.data[0].url;
      const filename = this.sanitizeFilename(params.name) + '.jpg';

      await this.downloadImage(imageUrl, filename);

      return `/images/reviewers/${filename}`;
    } catch (error) {
      console.error(`Error generating headshot for ${params.name}:`, error.message);
      return null;
    }
  }

  buildHeadshotPrompt(params) {
    let prompt = 'Professional photorealistic headshot portrait, ';

    if (params.age) {
      const ageRange = this.estimateAgeRange(params.age);
      prompt += `${ageRange} years old, `;
    }

    const genderDesc = params.gender === 'male' ? 'man' : params.gender === 'female' ? 'woman' : 'person';
    prompt += `${genderDesc} `;

    if (params.ethnicity) {
      prompt += `of ${params.ethnicity} descent, `;
    }

    if (params.description) {
      prompt += `${params.description}, `;
    }

    prompt += 'warm genuine smile, making eye contact with camera, ';
    prompt += 'soft natural lighting, neutral background, ';
    prompt += 'professional attire, shallow depth of field, ';
    prompt += '50mm lens portrait photography, ';
    prompt += 'high resolution, photorealistic, natural skin texture, ';
    prompt += 'authentic and approachable expression';

    return prompt;
  }

  estimateAgeRange(age) {
    if (age < 25) return 'early 20s';
    if (age < 30) return 'late 20s';
    if (age < 35) return 'early 30s';
    if (age < 40) return 'late 30s';
    if (age < 45) return 'early 40s';
    if (age < 50) return 'late 40s';
    if (age < 55) return 'early 50s';
    return 'mid 50s';
  }

  async downloadImage(url, filename) {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to download image: ${response.statusText}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const filepath = path.join(this.outputDir, filename);
    fs.writeFileSync(filepath, buffer);

    console.log(`  ✓ Saved headshot: ${filename}`);
  }

  sanitizeFilename(name) {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  }
}

// ============================================================================
// REVIEWER ANALYZER
// ============================================================================

class ReviewerAnalyzer {
  constructor() {
    this.reviewers = new Map(); // Use Map to avoid duplicates
  }

  async scanFiles() {
    const patterns = [
      'src/pages/case-studies/**/*.astro',
      'src/pages/blog/stories/**/*.astro',
      'src/pages/reviews/**/*.astro',
      'src/pages/comparisons/**/*.astro'
    ];

    const files = [];
    for (const pattern of patterns) {
      const matches = await glob(pattern, { cwd: projectRoot });
      files.push(...matches.map(f => path.join(projectRoot, f)));
    }

    console.log(`\nScanning ${files.length} files for reviewers...\n`);

    for (const file of files) {
      this.analyzeFile(file);
    }

    return Array.from(this.reviewers.values());
  }

  analyzeFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const context = this.determineContext(filePath);

    // Pattern 1: Case study clients (e.g., "Sarah, a 32-year-old marketing executive")
    const caseStudyPattern = /\b([A-Z][a-z]+),\s+a?\s*(\d+)[-\s]year[-\s]old\s+([^,.]+)/gi;
    let match;

    while ((match = caseStudyPattern.exec(content)) !== null) {
      const name = match[1];
      const age = parseInt(match[2]);
      const description = match[3].trim();

      const key = `${name}:${filePath}`;
      if (!this.reviewers.has(key)) {
        this.reviewers.set(key, {
          originalName: name,
          file: filePath,
          context,
          age,
          description,
          demographics: this.parseDemographics(description, age)
        });
      }
    }

    // Pattern 2: Blog comment authors
    const commentPattern = /<h4[^>]*class="font-bold[^"]*"[^>]*>([A-Z][a-z]+\s+[A-Z][a-z]+)<\/h4>/gi;

    while ((match = commentPattern.exec(content)) !== null) {
      const fullName = match[1];
      const key = `${fullName}:${filePath}`;

      if (!this.reviewers.has(key)) {
        this.reviewers.set(key, {
          originalName: fullName,
          file: filePath,
          context: 'blog-comment',
          demographics: {}
        });
      }
    }
  }

  determineContext(filePath) {
    if (filePath.includes('/case-studies/')) return 'case-study';
    if (filePath.includes('/blog/stories/')) return 'blog-story';
    if (filePath.includes('/reviews/')) return 'review';
    if (filePath.includes('/comparisons/')) return 'comparison';
    return 'other';
  }

  parseDemographics(description, age) {
    const demographics = { age };
    const lowerDesc = description.toLowerCase();

    if (lowerDesc.match(/\b(woman|female|she|her|mother|mom)\b/)) {
      demographics.gender = 'female';
    } else if (lowerDesc.match(/\b(man|male|he|him|father|dad)\b/)) {
      demographics.gender = 'male';
    } else {
      demographics.gender = 'unknown';
    }

    if (lowerDesc.match(/\b(hispanic|latina?|latin)\b/)) {
      demographics.ethnicity = 'Hispanic';
    } else if (lowerDesc.match(/\b(asian|chinese|korean|japanese|vietnamese)\b/)) {
      demographics.ethnicity = 'Asian';
    } else if (lowerDesc.match(/\b(african|black)\b/)) {
      demographics.ethnicity = 'African American';
    } else if (lowerDesc.match(/\b(indian|south asian)\b/)) {
      demographics.ethnicity = 'South Asian';
    }

    return demographics;
  }
}

// ============================================================================
// CONTENT HUMANIZER
// ============================================================================

class ContentHumanizer {
  constructor() {
    // Formal/clinical phrases to replace
    this.formalPhrases = [
      { old: /\butilizing\b/gi, new: 'using' },
      { old: /\bindividuals?\b/gi, new: (match, offset, str) => {
        // Keep "individual" in clinical contexts
        const before = str.substring(Math.max(0, offset - 50), offset);
        if (before.match(/(therapy|treatment|assessment)/i)) {
          return match.toLowerCase();
        }
        return Math.random() < 0.5 ? 'people' : 'folks';
      }},
      { old: /\bcommenced\b/gi, new: 'started' },
      { old: /\bterminated\b/gi, new: 'ended' },
      { old: /\bfacilitate\b/gi, new: 'help' },
      { old: /\bdemonstrate[ds]?\b/gi, new: (match) => match.toLowerCase().replace('demonstrate', 'show') },
      { old: /\bexhibited\b/gi, new: 'showed' },
      { old: /\bexperiencing\b/gi, new: 'going through' },
      { old: /\bin order to\b/gi, new: 'to' },
      { old: /\bprior to\b/gi, new: 'before' },
      { old: /\bsubsequent to\b/gi, new: 'after' },
      { old: /\bat this time\b/gi, new: 'now' },
    ];

    // Generic descriptions to make more specific
    this.genericPhrases = [
      { old: /improved significantly/gi, new: 'made real progress' },
      { old: /showed improvement/gi, new: 'got better' },
      { old: /reported feeling better/gi, new: 'felt noticeably better' },
      { old: /found it helpful/gi, new: 'found it really worked' },
      { old: /was beneficial/gi, new: 'helped a lot' },
      { old: /positive outcome/gi, new: 'good results' },
      { old: /negative outcome/gi, new: 'disappointing results' },
      { old: /challenging situation/gi, new: 'tough spot' },
      { old: /difficult time/gi, new: 'hard time' },
    ];
  }

  humanizeContent(content) {
    let humanized = content;

    // Apply formal phrase replacements
    for (const { old, new: replacement } of this.formalPhrases) {
      if (typeof replacement === 'function') {
        humanized = humanized.replace(old, replacement);
      } else {
        humanized = humanized.replace(old, replacement);
      }
    }

    // Apply generic phrase replacements
    for (const { old, new: replacement } of this.genericPhrases) {
      humanized = humanized.replace(old, replacement);
    }

    // Add conversational contractions
    humanized = this.addContractions(humanized);

    // Vary sentence starters
    humanized = this.varyOpeners(humanized);

    return humanized;
  }

  addContractions(content) {
    // Only add contractions in quotes and informal sections
    const contractions = [
      { old: /\bI am\b/g, new: "I'm" },
      { old: /\bI have\b/g, new: "I've" },
      { old: /\bI would\b/g, new: "I'd" },
      { old: /\bthey are\b/g, new: "they're" },
      { old: /\bthat is\b/g, new: "that's" },
      { old: /\bit is\b/g, new: "it's" },
      { old: /\bdid not\b/g, new: "didn't" },
      { old: /\bcould not\b/g, new: "couldn't" },
      { old: /\bwould not\b/g, new: "wouldn't" },
    ];

    // Apply contractions only in blockquotes
    return content.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, (match, quote) => {
      let contracted = quote;
      for (const { old, new: replacement } of contractions) {
        contracted = contracted.replace(old, replacement);
      }
      return match.replace(quote, contracted);
    });
  }

  varyOpeners(content) {
    // This is a simple implementation - in reality, you'd want more sophisticated logic
    // to detect and vary repetitive sentence patterns
    return content;
  }
}

// ============================================================================
// MAIN MIGRATION LOGIC
// ============================================================================

async function main() {
  console.log('='.repeat(70));
  console.log('REVIEWER MIGRATION SCRIPT');
  console.log('='.repeat(70));

  // Step 1: Analyze files
  console.log('\n[STEP 1/5] Analyzing files for reviewers...');
  const analyzer = new ReviewerAnalyzer();
  const reviewers = await analyzer.scanFiles();

  console.log(`\nFound ${reviewers.length} unique reviewers`);
  console.log('\nSample reviewers:');
  reviewers.slice(0, 5).forEach(r => {
    console.log(`  - ${r.originalName} (${r.context}) in ${path.basename(r.file)}`);
  });

  // Step 2: Generate new names
  console.log('\n[STEP 2/5] Generating new names...');
  const nameGenerator = new NameGenerator();

  for (const reviewer of reviewers) {
    const demographics = reviewer.demographics || {};
    const newName = nameGenerator.generateName(demographics.gender, demographics.ethnicity);

    reviewer.newName = newName;
    reviewer.newFirstName = newName.split(' ')[0];

    nameGenerator.addMapping(reviewer.originalName, newName, reviewer.context, demographics);

    console.log(`  ${reviewer.originalName} → ${newName}`);
  }

  // Save name mappings
  const mappingsFile = path.join(projectRoot, 'reviewer-name-mappings.json');
  fs.writeFileSync(mappingsFile, JSON.stringify(nameGenerator.getMappings(), null, 2));
  console.log(`\n✓ Name mappings saved to: reviewer-name-mappings.json`);

  // Step 3: Generate headshots
  console.log('\n[STEP 3/5] Generating headshots via Ideogram API...');
  const apiKey = process.env.IDEOGRAM_API_KEY;

  if (!apiKey) {
    console.log('⚠  IDEOGRAM_API_KEY not found in environment variables');
    console.log('   Please add IDEOGRAM_API_KEY to your .env file');
    console.log('   Skipping image generation...\n');
  } else {
    const ideogramClient = new IdeogramClient(apiKey);

    for (let i = 0; i < reviewers.length; i++) {
      const reviewer = reviewers[i];
      console.log(`\n[${i + 1}/${reviewers.length}] Generating headshot for ${reviewer.newName}...`);

      try {
        const imagePath = await ideogramClient.generateHeadshot({
          name: reviewer.newName,
          gender: reviewer.demographics?.gender,
          age: reviewer.demographics?.age,
          ethnicity: reviewer.demographics?.ethnicity,
          description: reviewer.description
        });

        reviewer.newImagePath = imagePath;
        console.log(`  ✓ Image path: ${imagePath}`);

        // Rate limiting
        if (i < reviewers.length - 1) {
          console.log('  Waiting 2 seconds to avoid rate limits...');
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
      } catch (error) {
        console.error(`  ✗ Failed: ${error.message}`);
      }
    }
  }

  // Step 4: Replace names and images in files
  console.log('\n\n[STEP 4/5] Replacing names and images in files...');

  const humanizer = new ContentHumanizer();
  const filesProcessed = new Set();

  for (const reviewer of reviewers) {
    if (filesProcessed.has(reviewer.file)) {
      continue; // Process each file only once
    }

    console.log(`\nProcessing: ${path.basename(reviewer.file)}`);

    let content = fs.readFileSync(reviewer.file, 'utf-8');
    let modified = false;

    // Find all reviewers for this file
    const fileReviewers = reviewers.filter(r => r.file === reviewer.file);

    for (const fr of fileReviewers) {
      // Replace full name
      const fullNameRegex = new RegExp(`\\b${fr.originalName}\\b`, 'g');
      if (fullNameRegex.test(content)) {
        content = content.replace(fullNameRegex, fr.newName);
        modified = true;
        console.log(`  ✓ Replaced: ${fr.originalName} → ${fr.newName}`);
      }

      // Replace first name only references (be careful not to replace in the middle of text)
      const firstNameOnly = fr.originalName.split(' ')[0];
      const newFirstNameOnly = fr.newFirstName;

      // Replace possessive form
      content = content.replace(
        new RegExp(`\\b${firstNameOnly}'s\\b`, 'g'),
        `${newFirstNameOnly}'s`
      );

      // Replace in common patterns
      content = content.replace(
        new RegExp(`\\b${firstNameOnly}\\s+(reported|said|found|experienced|described|noted|shared)`, 'gi'),
        `${newFirstNameOnly} $1`
      );
    }

    // Humanize content
    content = humanizer.humanizeContent(content);
    modified = true;

    if (modified) {
      fs.writeFileSync(reviewer.file, content, 'utf-8');
      console.log(`  ✓ File updated and humanized`);
      filesProcessed.add(reviewer.file);
    }
  }

  // Step 5: Summary
  console.log('\n\n[STEP 5/5] Migration Summary');
  console.log('='.repeat(70));
  console.log(`✓ ${reviewers.length} reviewers migrated`);
  console.log(`✓ ${filesProcessed.size} files updated`);
  console.log(`✓ ${reviewers.filter(r => r.newImagePath).length} headshots generated`);
  console.log(`\nName mappings saved to: reviewer-name-mappings.json`);
  console.log(`\nAll done! 🎉\n`);
}

main().catch(error => {
  console.error('\n❌ Error during migration:', error);
  process.exit(1);
});
