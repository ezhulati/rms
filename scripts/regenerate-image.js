#!/usr/bin/env node

/**
 * Regenerate Single Image Script
 *
 * Usage:
 *   npm run regenerate-image -- --page src/pages/blog/therapy-success-stories.tsx
 *   npm run regenerate-image -- --file public/images/blog/therapy-success-stories.jpg
 *   npm run regenerate-image -- --prompt "custom prompt" --output public/images/custom.jpg
 */

import 'dotenv/config';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';
import {
  generatePrompt,
  generateImage,
  downloadImage,
  generateAltText,
  updatePageComponent,
} from './generate-images.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONFIG = {
  API_KEY: process.env.IDEOGRAM_API_KEY,
  MANIFEST_PATH: path.join(__dirname, 'image-generation/manifest.json'),
  OVERRIDES_PATH: path.join(__dirname, 'image-generation/prompt-overrides.json'),
  ALT_TEXT_PATH: path.join(__dirname, 'image-generation/alt-text.json'),
};

// Parse command line arguments
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {};

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--page' && args[i + 1]) {
      options.pagePath = args[i + 1];
      i++;
    } else if (args[i] === '--file' && args[i + 1]) {
      options.filePath = args[i + 1];
      i++;
    } else if (args[i] === '--prompt' && args[i + 1]) {
      options.customPrompt = args[i + 1];
      i++;
    } else if (args[i] === '--output' && args[i + 1]) {
      options.outputPath = args[i + 1];
      i++;
    } else if (args[i] === '--aspect-ratio' && args[i + 1]) {
      options.aspectRatio = args[i + 1];
      i++;
    }
  }

  return options;
}

// Extract page context from file
async function extractPageContext(filePath) {
  const content = await fs.readFile(filePath, 'utf-8');
  const relativePath = path.relative(path.join(__dirname, '../src'), filePath);

  const h1Match = content.match(/<h1[^>]*>(.*?)<\/h1>/i);
  const titleMatch = content.match(/title=["'](.*?)["']/i);
  const title = h1Match?.[1] || titleMatch?.[1] || path.basename(filePath, '.tsx');

  const descMatch = content.match(/description=["'](.*?)["']/i);
  const description = descMatch?.[1] || '';

  const category = determineCategory(relativePath);

  return {
    filePath,
    relativePath,
    title: stripHtmlTags(title),
    description: stripHtmlTags(description),
    category,
    filename: path.basename(filePath, '.tsx'),
  };
}

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

function stripHtmlTags(str) {
  return str.replace(/<[^>]*>/g, '').replace(/&[^;]+;/g, ' ').trim();
}

// Find image in manifest by page path
async function findImageByPage(pagePath) {
  const manifest = JSON.parse(await fs.readFile(CONFIG.MANIFEST_PATH, 'utf-8'));
  return manifest.images.find(img => img.page_path.includes(pagePath));
}

// Update manifest entry
async function updateManifest(imageEntry) {
  const manifest = JSON.parse(await fs.readFile(CONFIG.MANIFEST_PATH, 'utf-8'));
  const index = manifest.images.findIndex(img => img.image_path === imageEntry.image_path);

  if (index >= 0) {
    manifest.images[index] = { ...manifest.images[index], ...imageEntry };
  } else {
    manifest.images.push(imageEntry);
  }

  manifest.total_images = manifest.images.length;
  await fs.writeFile(CONFIG.MANIFEST_PATH, JSON.stringify(manifest, null, 2));
}

// Update alt text
async function updateAltTextData(imagePath, altText) {
  const altTextData = JSON.parse(await fs.readFile(CONFIG.ALT_TEXT_PATH, 'utf-8'));
  altTextData.alt_texts[imagePath.replace(/.*\/public/, 'public')] = altText;
  await fs.writeFile(CONFIG.ALT_TEXT_PATH, JSON.stringify(altTextData, null, 2));
}

async function main() {
  console.log('🔄 Image Regeneration Tool\n');

  if (!CONFIG.API_KEY || CONFIG.API_KEY === 'your_ideogram_api_key_here') {
    console.error('❌ Error: IDEOGRAM_API_KEY not set in .env file');
    process.exit(1);
  }

  const options = parseArgs();

  // Validate options
  if (!options.pagePath && !options.filePath && !options.customPrompt) {
    console.error('❌ Error: Must specify --page, --file, or --prompt with --output');
    console.log('\nUsage:');
    console.log('  npm run regenerate-image -- --page src/pages/blog/post.tsx');
    console.log('  npm run regenerate-image -- --file public/images/blog/post.jpg');
    console.log('  npm run regenerate-image -- --prompt "custom prompt" --output public/images/custom.jpg');
    process.exit(1);
  }

  try {
    let pageContext;
    let outputPath;
    let prompt;
    let aspectRatio = options.aspectRatio || 'ASPECT_16_9';

    // Load prompt overrides
    const promptOverrides = JSON.parse(await fs.readFile(CONFIG.OVERRIDES_PATH, 'utf-8'));

    // Determine context and paths
    if (options.customPrompt) {
      // Custom prompt mode
      if (!options.outputPath) {
        console.error('❌ Error: --output required when using --prompt');
        process.exit(1);
      }
      prompt = options.customPrompt;
      outputPath = path.join(__dirname, '..', options.outputPath);
      console.log('📝 Using custom prompt');
    } else if (options.pagePath) {
      // Page-based regeneration
      const fullPagePath = path.join(__dirname, '..', options.pagePath);
      if (!existsSync(fullPagePath)) {
        console.error(`❌ Error: Page file not found: ${fullPagePath}`);
        process.exit(1);
      }

      console.log(`📄 Analyzing page: ${options.pagePath}`);
      pageContext = await extractPageContext(fullPagePath);

      // Generate prompt
      prompt = generatePrompt(pageContext, promptOverrides);

      // Determine output path
      const outputFilename = `${pageContext.filename.toLowerCase().replace(/[^a-z0-9]/g, '-')}.jpg`;
      outputPath = path.join(__dirname, '../public/images', pageContext.category, outputFilename);
    } else if (options.filePath) {
      // File-based regeneration
      const fullFilePath = path.join(__dirname, '..', options.filePath);
      if (!existsSync(fullFilePath)) {
        console.error(`❌ Error: Image file not found: ${fullFilePath}`);
        process.exit(1);
      }

      // Find in manifest
      const manifest = JSON.parse(await fs.readFile(CONFIG.MANIFEST_PATH, 'utf-8'));
      const imageEntry = manifest.images.find(img =>
        img.image_path.includes(options.filePath) || fullFilePath.includes(img.image_path)
      );

      if (!imageEntry) {
        console.error('❌ Error: Image not found in manifest');
        console.log('This image may not have been generated by this tool.');
        process.exit(1);
      }

      console.log(`🔍 Found image in manifest`);
      prompt = imageEntry.prompt;
      outputPath = fullFilePath;

      // Try to find associated page
      const pagePath = path.join(__dirname, '../src', imageEntry.page_path);
      if (existsSync(pagePath)) {
        pageContext = await extractPageContext(pagePath);
      }
    }

    console.log(`📝 Prompt: ${prompt.substring(0, 100)}...`);
    console.log(`🎨 Generating new image...`);

    // Generate image
    const { url, seed } = await generateImage(prompt, aspectRatio);
    console.log(`✅ Image generated (seed: ${seed})`);

    // Download image
    console.log(`⬇️  Downloading image...`);
    await downloadImage(url, outputPath);
    console.log(`✅ Image saved to: ${outputPath}`);

    // Update manifest and alt text if we have page context
    if (pageContext) {
      const altText = generateAltText(pageContext);

      const imageEntry = {
        page_path: pageContext.relativePath,
        image_path: outputPath.replace(/.*\/public/, 'public'),
        prompt: prompt,
        alt_text: altText,
        generated_at: new Date().toISOString(),
        ideogram_seed: seed,
        category: pageContext.category,
        regenerated: true,
      };

      await updateManifest(imageEntry);
      await updateAltTextData(outputPath, altText);

      // Update page component
      console.log(`✏️  Updating page component...`);
      await updatePageComponent(pageContext, outputPath, altText);
    }

    console.log('\n✨ Regeneration complete!');
  } catch (error) {
    console.error(`\n❌ Error: ${error.message}`);
    process.exit(1);
  }
}

main();
