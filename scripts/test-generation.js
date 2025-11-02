#!/usr/bin/env node
import 'dotenv/config';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🧪 Testing image generation setup...\n');

// Test 1: Check API key
console.log('1. Checking API key...');
const apiKey = process.env.IDEOGRAM_API_KEY;
if (!apiKey || apiKey === 'your_ideogram_api_key_here') {
  console.error('   ❌ API key not set');
  process.exit(1);
}
console.log(`   ✅ API key found: ${apiKey.substring(0, 10)}...`);

// Test 2: Find pages
console.log('\n2. Finding page files...');
const pagesDir = path.join(__dirname, '../src/pages');
async function findPages(dir) {
  const files = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await findPages(fullPath));
    } else if (entry.name.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  return files;
}

const pageFiles = await findPages(pagesDir);
console.log(`   ✅ Found ${pageFiles.length} page files`);

// Test 3: Find pages with images
console.log('\n3. Finding pages with Unsplash images...');
const pagesWithImages = [];
for (const filePath of pageFiles) {
  const content = await fs.readFile(filePath, 'utf-8');
  if (content.includes('images.unsplash.com')) {
    pagesWithImages.push(path.relative(path.join(__dirname, '..'), filePath));
  }
}
console.log(`   ✅ Found ${pagesWithImages.length} pages with images`);
console.log('\n   Sample pages:');
pagesWithImages.slice(0, 5).forEach(p => console.log(`   - ${p}`));

// Test 4: Test API call
console.log('\n4. Testing Ideogram API...');
try {
  const response = await fetch('https://api.ideogram.ai/generate', {
    method: 'POST',
    headers: {
      'Api-Key': apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      image_request: {
        prompt: 'Test: photorealistic DSLR photograph of a therapist in an online video session. No text.',
        style_type: 'REALISTIC',
        aspect_ratio: 'ASPECT_16_9',
        model: 'V_2',
        magic_prompt_option: 'OFF',
        num_images: 1,
      },
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error(`   ❌ API error (${response.status}): ${errorText}`);
    process.exit(1);
  }

  const data = await response.json();
  console.log(`   ✅ API working! Image URL: ${data.data[0].url.substring(0, 50)}...`);
} catch (error) {
  console.error(`   ❌ API test failed: ${error.message}`);
  process.exit(1);
}

console.log('\n✅ All tests passed! Ready to generate images.\n');
console.log(`Will process ${pagesWithImages.length} pages`);
console.log(`Estimated cost: $${(pagesWithImages.length * 0.07).toFixed(2)} (at $0.07/image)`);
console.log(`Estimated time: ${Math.ceil(pagesWithImages.length / 10)} minutes (with rate limiting)\n`);
