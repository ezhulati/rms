#!/usr/bin/env node

/**
 * AI Image Generation Script for RealMindSolutions
 *
 * This script:
 * 1. Analyzes all page components
 * 2. Generates contextual prompts for each page
 * 3. Calls Ideogram AI API to generate photorealistic images
 * 4. Downloads and saves images locally
 * 5. Updates page components with new image paths
 * 6. Generates alt text for SEO
 * 7. Maintains manifest for regeneration
 */

import 'dotenv/config';
import fs from 'fs/promises';
import { createWriteStream, existsSync, unlinkSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import http from 'http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const CONFIG = {
  API_KEY: process.env.IDEOGRAM_API_KEY,
  API_ENDPOINT: 'https://api.ideogram.ai/generate',
  MAX_CONCURRENT: 10,
  PAGES_DIR: path.join(__dirname, '../src/pages'),
  IMAGES_DIR: path.join(__dirname, '../public/images'),
  MANIFEST_PATH: path.join(__dirname, 'image-generation/manifest.json'),
  OVERRIDES_PATH: path.join(__dirname, 'image-generation/prompt-overrides.json'),
  ALT_TEXT_PATH: path.join(__dirname, 'image-generation/alt-text.json'),
};

// Validate API key
if (!CONFIG.API_KEY || CONFIG.API_KEY === 'your_ideogram_api_key_here') {
  console.error('❌ Error: IDEOGRAM_API_KEY not set in .env file');
  console.error('Please add your Ideogram API key to .env file:');
  console.error('IDEOGRAM_API_KEY=your_actual_api_key');
  process.exit(1);
}

// ============================================================================
// PAGE ANALYZER
// ============================================================================

/**
 * Recursively find all .tsx files in a directory
 */
async function findAllPageFiles(dir) {
  const files = [];

  async function walk(currentDir) {
    const entries = await fs.readdir(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);

      if (entry.isDirectory()) {
        await walk(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.tsx')) {
        files.push(fullPath);
      }
    }
  }

  await walk(dir);
  return files;
}

/**
 * Extract context from a page component
 */
async function extractPageContext(filePath) {
  const content = await fs.readFile(filePath, 'utf-8');
  const relativePath = path.relative(path.join(__dirname, '../src'), filePath);

  // Extract page title/heading (look for h1 or title)
  const h1Match = content.match(/<h1[^>]*>(.*?)<\/h1>/i);
  const titleMatch = content.match(/title=["'](.*?)["']/i);
  const metaTitleMatch = content.match(/<title>(.*?)<\/title>/i);

  const title = h1Match?.[1] || titleMatch?.[1] || metaTitleMatch?.[1] ||
                path.basename(filePath, '.tsx');

  // Extract meta description
  const descMatch = content.match(/description=["'](.*?)["']/i);
  const description = descMatch?.[1] || '';

  // Determine category from path
  const category = determineCategory(relativePath);

  // Check if page has images
  const hasImages = content.includes('images.unsplash.com') ||
                    content.includes('<img') ||
                    content.includes('src=');

  return {
    filePath,
    relativePath,
    title: stripHtmlTags(title),
    description: stripHtmlTags(description),
    category,
    hasImages,
    filename: path.basename(filePath, '.tsx'),
  };
}

/**
 * Determine category from file path
 */
function determineCategory(relativePath) {
  if (relativePath.includes('pages/reviews/platforms')) return 'platforms';
  if (relativePath.includes('pages/reviews')) return 'concepts';
  if (relativePath.includes('pages/blog')) return 'blog';
  if (relativePath.includes('pages/guides')) return 'guides';
  if (relativePath.includes('pages/conditions')) return 'conditions';
  if (relativePath.includes('pages/case-studies')) return 'case-studies';
  if (relativePath.includes('pages/tools')) return 'tools';
  if (relativePath.includes('pages/best')) return 'concepts';
  if (relativePath.includes('pages/comparisons')) return 'concepts';
  if (relativePath.includes('pages/learn')) return 'concepts';
  return 'concepts';
}

/**
 * Strip HTML tags from string
 */
function stripHtmlTags(str) {
  return str.replace(/<[^>]*>/g, '').replace(/&[^;]+;/g, ' ').trim();
}

// ============================================================================
// PROMPT GENERATOR
// ============================================================================

/**
 * Generate contextual prompt for a page
 */
function generatePrompt(pageContext, promptOverrides) {
  // Check for manual override first
  if (promptOverrides[pageContext.relativePath]) {
    return buildFullPrompt(promptOverrides[pageContext.relativePath]);
  }

  // Generate context-based prompt
  const basePrompt = generateContextualPrompt(pageContext);
  return buildFullPrompt(basePrompt);
}

/**
 * Generate contextual prompt based on page type
 */
function generateContextualPrompt(ctx) {
  const { category, title, description, filename } = ctx;

  // Platform-specific prompts
  if (category === 'platforms') {
    if (filename.toLowerCase().includes('betterhelp')) {
      return 'Professional therapist conducting warm online video therapy session, laptop with video call interface, caring expression, cozy home office background, natural window lighting';
    }
    if (filename.toLowerCase().includes('talkspace')) {
      return 'Person using smartphone for text therapy, sitting comfortably on couch, peaceful expression, modern living room, warm afternoon lighting';
    }
    if (filename.toLowerCase().includes('cerebral')) {
      return 'Professional psychiatric consultation via video call, medical professional in office, patient feeling supported, clean modern telehealth setting';
    }
    // Generic platform
    return 'Professional therapist in online therapy video session, warm connection, laptop screen, home office setting, natural lighting, caring professional atmosphere';
  }

  // Mental health conditions
  if (category === 'conditions') {
    if (title.toLowerCase().includes('anxiety')) {
      return 'Person experiencing relief from anxiety during therapy, peaceful moment, therapist office or home, hopeful expression, natural lighting, authentic emotion';
    }
    if (title.toLowerCase().includes('depression')) {
      return 'Individual finding support for depression, therapeutic conversation, moment of hope, comfortable counseling space, warm natural light';
    }
    if (title.toLowerCase().includes('ptsd') || title.toLowerCase().includes('trauma')) {
      return 'Trauma survivor in supportive therapy session, safe environment, professional counselor, healing moment, soft natural lighting';
    }
    if (title.toLowerCase().includes('ocd')) {
      return 'Person working through OCD with therapist support, collaborative session, relief and progress, professional therapy setting';
    }
    if (title.toLowerCase().includes('eating disorder') || title.toLowerCase().includes('eating')) {
      return 'Individual receiving compassionate support for eating concerns, therapeutic alliance, comfortable counseling space, hopeful atmosphere';
    }
    // Generic condition
    return 'Person receiving mental health support, therapeutic moment, professional counseling environment, hope and healing, warm natural lighting';
  }

  // Blog posts
  if (category === 'blog') {
    if (title.toLowerCase().includes('success') || title.toLowerCase().includes('story')) {
      return 'Person celebrating mental health progress, genuine smile, moment of breakthrough, hopeful expression, bright natural lighting, authentic positive emotion';
    }
    if (title.toLowerCase().includes('self-care') || title.toLowerCase().includes('wellness')) {
      return 'Individual practicing self-care and mindfulness, peaceful moment, comfortable home environment, serene expression, soft natural light';
    }
    if (title.toLowerCase().includes('crisis') || title.toLowerCase().includes('emergency')) {
      return 'Person reaching out for immediate mental health support, phone or laptop, concerned but hopeful, seeking help, warm supportive environment';
    }
    // Generic blog
    return 'Person engaged in mental health journey, thoughtful moment, journaling or reflecting, comfortable space, natural lighting, authentic introspection';
  }

  // Guides
  if (category === 'guides') {
    if (title.toLowerCase().includes('first session') || title.toLowerCase().includes('starting')) {
      return 'First therapy session beginning, patient arriving, welcoming therapist, comfortable counseling office, nervous but hopeful expression, warm professional setting';
    }
    if (title.toLowerCase().includes('choosing') || title.toLowerCase().includes('finding')) {
      return 'Person researching therapist options on laptop, thoughtful decision-making, comfortable home office, focused expression, natural daylight';
    }
    // Generic guide
    return 'Individual learning about mental health resources, laptop or tablet, focused reading, cozy environment, afternoon natural light, engaged expression';
  }

  // Case studies
  if (category === 'case-studies') {
    return 'Real person sharing mental health success story, authentic emotion, documentary style, natural environment, genuine transformation moment, hopeful atmosphere';
  }

  // Tools/assessments
  if (category === 'tools') {
    return 'Person taking mental health assessment on device, thoughtful consideration, comfortable home setting, self-reflection moment, natural lighting, focused engagement';
  }

  // Default for concepts/comparisons
  return 'Professional mental health therapy session, supportive environment, therapist and client connection, modern counseling space, warm natural lighting, authentic therapeutic alliance';
}

/**
 * Build full prompt with negative prompts and specifications
 */
function buildFullPrompt(basePrompt) {
  return `Photorealistic DSLR photograph: ${basePrompt}. Professional photography, authentic candid moment, genuine human emotion, natural composition. Absolutely no text, no words, no typography, no letters, no writing, no signs, no captions.`;
}

/**
 * Get negative prompt to exclude text
 */
function getNegativePrompt() {
  return 'text, words, letters, typography, writing, captions, labels, logos, signs, documents, books, papers, screens with text, readable text, any written content, watermarks, subtitles';
}

// ============================================================================
// IDEOGRAM API CLIENT
// ============================================================================

/**
 * Generate image using Ideogram AI API
 */
async function generateImage(prompt, aspectRatio = 'ASPECT_16_9') {
  const requestBody = {
    image_request: {
      prompt: prompt,
      style_type: 'REALISTIC',
      aspect_ratio: aspectRatio,
      model: 'V_2',
      magic_prompt_option: 'OFF',
      num_images: 1,
    },
  };

  const response = await fetch(CONFIG.API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Api-Key': CONFIG.API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Ideogram API error (${response.status}): ${errorText}`);
  }

  const data = await response.json();

  if (!data.data || !data.data[0] || !data.data[0].url) {
    throw new Error('Invalid response from Ideogram API');
  }

  return {
    url: data.data[0].url,
    seed: data.data[0].seed,
  };
}

// ============================================================================
// IMAGE DOWNLOADER
// ============================================================================

/**
 * Download image from URL and save to file
 */
async function downloadImage(url, outputPath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;

    protocol.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download image: ${response.statusCode}`));
        return;
      }

      const fileStream = createWriteStream(outputPath);
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });

      fileStream.on('error', (err) => {
        try {
          unlinkSync(outputPath);
        } catch (e) {
          // Ignore if file doesn't exist
        }
        reject(err);
      });
    }).on('error', reject);
  });
}

// ============================================================================
// ALT TEXT GENERATOR
// ============================================================================

/**
 * Generate SEO-friendly alt text
 */
function generateAltText(pageContext) {
  const { title, description, category } = pageContext;

  // Build alt text based on context
  let altText = '';

  if (category === 'platforms') {
    altText = `Professional therapist providing online therapy for ${title.replace(/Review|Page/gi, '').trim()}`;
  } else if (category === 'conditions') {
    altText = `Person receiving therapy support for ${title.toLowerCase()}`;
  } else if (category === 'blog') {
    altText = `${title.substring(0, 100)}`;
  } else if (category === 'guides') {
    altText = `Guide to ${title.toLowerCase().replace(/guide to|how to/gi, '').trim()}`;
  } else if (category === 'case-studies') {
    altText = `Mental health success story: ${title.substring(0, 80)}`;
  } else {
    altText = `Online therapy and mental health support`;
  }

  // Ensure length is reasonable (100-125 chars)
  if (altText.length > 125) {
    altText = altText.substring(0, 122) + '...';
  }

  return altText;
}

// ============================================================================
// COMPONENT UPDATER
// ============================================================================

/**
 * Update page component with new image path
 */
async function updatePageComponent(pageContext, imagePath, altText) {
  const content = await fs.readFile(pageContext.filePath, 'utf-8');

  // Convert absolute path to web path
  const webPath = imagePath.replace(/.*\/public/, '');

  // Find Unsplash image URLs and replace with local path
  let updatedContent = content;
  const unsplashPattern = /https:\/\/images\.unsplash\.com\/[^\s"']+/g;
  const matches = content.match(unsplashPattern);

  if (matches && matches.length > 0) {
    // Replace first Unsplash image (typically the hero/featured image)
    const firstUnsplashUrl = matches[0];
    updatedContent = updatedContent.replace(firstUnsplashUrl, webPath);

    // Update or add alt text for this image
    // Find the img tag containing this URL
    const imgTagPattern = new RegExp(`<img([^>]*src=["']${firstUnsplashUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["'][^>]*)>`, 'i');
    const imgMatch = content.match(imgTagPattern);

    if (imgMatch) {
      const imgTag = imgMatch[0];
      let newImgTag = imgTag.replace(firstUnsplashUrl, webPath);

      // Add or update alt attribute
      if (newImgTag.includes('alt=')) {
        newImgTag = newImgTag.replace(/alt=["'][^"']*["']/, `alt="${altText}"`);
      } else {
        newImgTag = newImgTag.replace(/<img/, `<img alt="${altText}"`);
      }

      updatedContent = updatedContent.replace(imgTag, newImgTag);
    }
  }

  // Only write if content changed
  if (updatedContent !== content) {
    await fs.writeFile(pageContext.filePath, updatedContent, 'utf-8');
    return true;
  }

  return false;
}

// ============================================================================
// RATE LIMITER
// ============================================================================

class RateLimiter {
  constructor(maxConcurrent) {
    this.maxConcurrent = maxConcurrent;
    this.running = 0;
    this.queue = [];
  }

  async execute(fn) {
    while (this.running >= this.maxConcurrent) {
      await new Promise(resolve => this.queue.push(resolve));
    }

    this.running++;
    try {
      return await fn();
    } finally {
      this.running--;
      if (this.queue.length > 0) {
        const resolve = this.queue.shift();
        resolve();
      }
    }
  }
}

// ============================================================================
// MAIN EXECUTION
// ============================================================================

async function main() {
  console.log('🎨 RealMindSolutions AI Image Generator\n');
  console.log('Starting image generation process...\n');

  // Load existing data
  const manifest = JSON.parse(await fs.readFile(CONFIG.MANIFEST_PATH, 'utf-8'));
  const promptOverrides = JSON.parse(await fs.readFile(CONFIG.OVERRIDES_PATH, 'utf-8'));
  const altTextData = JSON.parse(await fs.readFile(CONFIG.ALT_TEXT_PATH, 'utf-8'));

  // Find all page files
  console.log('📄 Analyzing page components...');
  const pageFiles = await findAllPageFiles(CONFIG.PAGES_DIR);
  console.log(`Found ${pageFiles.length} page files\n`);

  // Extract context from all pages
  console.log('🔍 Extracting page context...');
  const pageContexts = await Promise.all(
    pageFiles.map(file => extractPageContext(file))
  );

  // Filter pages that have images (Unsplash URLs)
  const pagesWithImages = pageContexts.filter(ctx => ctx.hasImages);
  console.log(`Found ${pagesWithImages.length} pages with images to replace\n`);

  // Initialize rate limiter
  const rateLimiter = new RateLimiter(CONFIG.MAX_CONCURRENT);

  // Process each page
  let successCount = 0;
  let errorCount = 0;
  const errors = [];

  for (let i = 0; i < pagesWithImages.length; i++) {
    const pageContext = pagesWithImages[i];

    console.log(`[${i + 1}/${pagesWithImages.length}] Processing: ${pageContext.filename}`);

    try {
      await rateLimiter.execute(async () => {
        // Generate prompt
        const prompt = generatePrompt(pageContext, promptOverrides);
        console.log(`  📝 Prompt: ${prompt.substring(0, 80)}...`);

        // Generate image via Ideogram API
        console.log(`  🎨 Generating image...`);
        const { url, seed } = await generateImage(prompt);

        // Determine output path
        const outputFilename = `${pageContext.filename.toLowerCase().replace(/[^a-z0-9]/g, '-')}.jpg`;
        const outputPath = path.join(CONFIG.IMAGES_DIR, pageContext.category, outputFilename);

        // Download image
        console.log(`  ⬇️  Downloading image...`);
        await downloadImage(url, outputPath);

        // Generate alt text
        const altText = generateAltText(pageContext);

        // Update page component
        console.log(`  ✏️  Updating component...`);
        const updated = await updatePageComponent(pageContext, outputPath, altText);

        // Update manifest
        manifest.images.push({
          page_path: pageContext.relativePath,
          image_path: outputPath.replace(/.*\/public/, 'public'),
          prompt: prompt,
          alt_text: altText,
          generated_at: new Date().toISOString(),
          ideogram_seed: seed,
          category: pageContext.category,
        });

        // Update alt text data
        altTextData.alt_texts[outputPath.replace(/.*\/public/, 'public')] = altText;

        console.log(`  ✅ Success!\n`);
        successCount++;
      });
    } catch (error) {
      console.error(`  ❌ Error: ${error.message}\n`);
      errorCount++;
      errors.push({
        page: pageContext.filename,
        error: error.message,
      });
    }

    // Small delay between batches to be respectful to API
    if ((i + 1) % CONFIG.MAX_CONCURRENT === 0) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  // Update manifest metadata
  manifest.generated_at = new Date().toISOString();
  manifest.total_images = manifest.images.length;

  // Save updated files
  console.log('💾 Saving manifest and metadata...');
  await fs.writeFile(CONFIG.MANIFEST_PATH, JSON.stringify(manifest, null, 2));
  await fs.writeFile(CONFIG.ALT_TEXT_PATH, JSON.stringify(altTextData, null, 2));

  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 GENERATION SUMMARY');
  console.log('='.repeat(60));
  console.log(`✅ Successfully generated: ${successCount} images`);
  console.log(`❌ Failed: ${errorCount} images`);
  console.log(`📁 Images saved to: ${CONFIG.IMAGES_DIR}`);
  console.log(`📄 Manifest saved to: ${CONFIG.MANIFEST_PATH}`);

  if (errors.length > 0) {
    console.log('\n❌ Errors encountered:');
    errors.forEach(err => {
      console.log(`  - ${err.page}: ${err.error}`);
    });
  }

  console.log('\n✨ Image generation complete!');
  console.log('Run `npm run dev` to see the updated images.\n');
}

// Export functions for use in other scripts
export { generatePrompt, generateImage, downloadImage, generateAltText, updatePageComponent };

// Run main function
main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
