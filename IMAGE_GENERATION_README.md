# AI Image Generation System

This project uses Ideogram AI to generate photorealistic, DSLR-quality images for all pages.

## Overview

- **Total Images:** 94 AI-generated images
- **All images are:** Photorealistic, text-free, contextually relevant
- **Storage:** `/public/images/` organized by category
- **Status:** 100% of Unsplash images replaced with AI-generated images

## Directory Structure

```
public/images/
├── blog/           # 15 images - Blog posts, guides, news
├── case-studies/   # 1 image - Success stories
├── concepts/       # 33 images - Platform reviews, best pages
├── conditions/     # Mental health condition pages
├── guides/         # Guide and tutorial pages
├── platforms/      # Platform-specific images
├── people/         # Demographic/audience images
└── tools/          # Assessment and tool pages
```

## Scripts

### Generate New Images

```bash
npm run generate-images
```

Generates AI images for all pages with Unsplash URLs. Uses Ideogram AI API.

**Configuration:**
- API key: Set `IDEOGRAM_API_KEY` in `.env`
- Prompts: Contextually generated based on page content
- Style: Photorealistic, no text
- Model: Ideogram V_2
- Rate limit: 10 concurrent requests

### Regenerate Single Image

```bash
# Regenerate by page
npm run regenerate-image -- --page src/pages/blog/therapy-success-stories.astro

# Regenerate by file
npm run regenerate-image -- --file public/images/blog/therapy-success-stories.jpg

# Custom prompt
npm run regenerate-image -- --prompt "your custom prompt" --output public/images/custom.jpg
```

### Update Components

```bash
npm run update-components
```

Updates Astro components to use generated local images instead of Unsplash URLs.

### Bulk Replace

```bash
npm run bulk-replace
```

Replaces all remaining Unsplash images with appropriate local AI-generated images.

## Customization

### Custom Prompts

Edit `scripts/image-generation/prompt-overrides.json`:

```json
{
  "src/pages/HomePage.astro": "your custom prompt here"
}
```

Then regenerate:

```bash
npm run regenerate-image -- --page src/pages/HomePage.astro
```

### Prompt Guidelines

Generated prompts follow this pattern:

```
Photorealistic DSLR photograph: [context]. Professional photography,
authentic candid moment, genuine human emotion, natural composition.
Absolutely no text, no words, no typography, no letters, no writing,
no signs, no captions.
```

**Context examples:**
- Platform reviews: "Professional therapist in online therapy video session"
- Mental health conditions: "Person experiencing relief during therapy"
- Blog posts: "Person celebrating mental health progress"
- Guides: "Person researching mental health resources"

## Metadata

All generation metadata is tracked in:

- `scripts/image-generation/manifest.json` - Complete image inventory
- `scripts/image-generation/alt-text.json` - SEO-optimized alt text
- `scripts/image-generation/prompt-overrides.json` - Custom prompts

## Cost

**Per Image:** $0.07 (Ideogram V_2 Balanced tier)
**Total Cost:** ~$6.58 for 94 images

## Image Specifications

- **Format:** JPEG
- **Size:** 1.3-1.5MB per image
- **Aspect Ratio:** 16:9 (hero images), 3:2 (cards)
- **Resolution:** 1200x800px minimum
- **Style:** Photorealistic DSLR photography
- **Text:** None (100% text-free)

## API Configuration

Set your Ideogram API key in `.env`:

```env
IDEOGRAM_API_KEY=your_actual_api_key_here
```

Get your API key at: https://ideogram.ai/

## Troubleshooting

### Images not showing

1. Check image paths start with `/images/` (not `public/images/`)
2. Verify images exist in `public/images/`
3. Clear dev server cache and restart

### Regenerate not working

1. Verify `IDEOGRAM_API_KEY` is set in `.env`
2. Check API rate limits (max 10 concurrent)
3. Ensure page file path is correct

### Script errors

1. Run `npm install` to ensure dependencies
2. Check Node.js version (requires ES modules support)
3. Verify file permissions for scripts

## Maintenance

### Adding New Pages

When adding new pages:

1. Use temporary Unsplash images initially
2. Run `npm run generate-images` to generate AI images
3. Or run `npm run bulk-replace` to use existing images

### Updating Images

To update a specific image:

```bash
npm run regenerate-image -- --page src/pages/your-page.astro
```

To update multiple images, re-run:

```bash
npm run generate-images
```

## Notes

- Generated images are stored in git repository
- Image URLs expire after generation (already downloaded)
- Manifest tracks all generation history
- Alt text auto-generated for SEO

---

**Generated:** 2025-11-02
**System:** Ideogram AI + Custom Node.js scripts
