/**
 * Regenerate Missing Headshots
 * Only generates images that don't already exist
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

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

    console.log(`  Prompt: ${prompt.substring(0, 80)}...`);

    const formData = new FormData();
    formData.append('prompt', prompt);
    formData.append('aspect_ratio', '1x1');
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
      console.error(`  ✗ Error: ${error.message}`);
      throw error;
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

    console.log(`  ✓ Saved: ${filename}`);
  }

  sanitizeFilename(name) {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  }

  imageExists(name) {
    const filename = this.sanitizeFilename(name) + '.jpg';
    const filepath = path.join(this.outputDir, filename);
    return fs.existsSync(filepath);
  }
}

async function main() {
  console.log('='.repeat(70));
  console.log('REGENERATE MISSING HEADSHOTS');
  console.log('='.repeat(70));

  const apiKey = process.env.IDEOGRAM_API_KEY;

  if (!apiKey) {
    console.error('\n❌ IDEOGRAM_API_KEY not found in environment variables\n');
    process.exit(1);
  }

  const mappingsFile = path.join(projectRoot, 'reviewer-name-mappings-cleaned.json');

  if (!fs.existsSync(mappingsFile)) {
    console.error('\n❌ reviewer-name-mappings-cleaned.json not found');
    console.error('   Please run npm run cleanup-reviewers first\n');
    process.exit(1);
  }

  const mappings = JSON.parse(fs.readFileSync(mappingsFile, 'utf-8'));

  const client = new IdeogramClient(apiKey);

  // Find missing headshots
  const missing = mappings.filter(m => !client.imageExists(m.newName));

  console.log(`\nChecking ${mappings.length} people for missing headshots...`);
  console.log(`Found ${missing.length} missing headshots\n`);

  if (missing.length === 0) {
    console.log('✅ All headshots already exist!\n');
    return;
  }

  console.log('Missing headshots:');
  missing.forEach(m => {
    console.log(`  - ${m.newName} (${m.context})`);
  });
  console.log('');

  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < missing.length; i++) {
    const mapping = missing[i];

    console.log(`\n[${i + 1}/${missing.length}] Generating headshot for ${mapping.newName}...`);
    console.log(`  Context: ${mapping.context}`);

    try {
      const imagePath = await client.generateHeadshot({
        name: mapping.newName,
        gender: mapping.demographics?.gender,
        age: mapping.demographics?.age,
        ethnicity: mapping.demographics?.ethnicity
      });

      console.log(`  ✓ Image saved: ${imagePath}`);
      successCount++;

      if (i < missing.length - 1) {
        console.log(`  Waiting 2 seconds...`);
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    } catch (error) {
      console.error(`  ✗ Failed to generate headshot`);
      failCount++;
    }
  }

  console.log('\n' + '='.repeat(70));
  console.log('REGENERATION SUMMARY');
  console.log('='.repeat(70));
  console.log(`✓ ${successCount} headshots generated successfully`);
  console.log(`✗ ${failCount} headshots failed`);
  console.log(`\n✅ All done!\n`);
}

main().catch(error => {
  console.error('\n❌ Error during regeneration:', error);
  process.exit(1);
});
