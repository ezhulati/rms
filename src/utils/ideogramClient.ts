/**
 * Ideogram API Client
 * Generates photorealistic headshots using Ideogram 3.0 API
 */

import fs from 'fs';
import path from 'path';

interface IdeogramConfig {
  apiKey: string;
  outputDir?: string;
}

interface GenerateImageParams {
  prompt: string;
  resolution?: string;
  aspectRatio?: string;
  renderingSpeed?: 'FLASH' | 'TURBO' | 'DEFAULT' | 'QUALITY';
  magicPrompt?: 'AUTO' | 'ON' | 'OFF';
  styleType?: 'AUTO' | 'GENERAL' | 'REALISTIC' | 'DESIGN' | 'FICTION';
  negativePrompt?: string;
  seed?: number;
}

interface IdeogramResponse {
  created: string;
  data: Array<{
    url: string;
    prompt: string;
    resolution: string;
    seed: number;
    is_image_safe: boolean;
    style_type: string;
  }>;
}

interface HeadshotParams {
  name: string;
  gender?: 'male' | 'female' | 'nonbinary';
  age?: number;
  ethnicity?: string;
  description?: string; // Additional context (e.g., "wearing glasses", "professional attire")
}

class IdeogramClient {
  private apiKey: string;
  private outputDir: string;
  private baseURL = 'https://api.ideogram.ai/v1/ideogram-v3/generate';

  constructor(config: IdeogramConfig) {
    this.apiKey = config.apiKey;
    this.outputDir = config.outputDir || path.join(process.cwd(), 'public', 'images', 'reviewers');

    // Ensure output directory exists
    if (!fs.existsSync(this.outputDir)) {
      fs.mkdirSync(this.outputDir, { recursive: true });
    }
  }

  /**
   * Generate a photorealistic headshot based on demographic parameters
   */
  async generateHeadshot(params: HeadshotParams): Promise<string> {
    const prompt = this.buildHeadshotPrompt(params);

    const imageParams: GenerateImageParams = {
      prompt,
      resolution: '1024x1024', // Square headshot
      aspectRatio: '1x1',
      renderingSpeed: 'QUALITY', // High quality for professional headshots
      styleType: 'REALISTIC',
      magicPrompt: 'ON', // Enhance prompt for better results
      negativePrompt: 'cartoon, anime, illustration, painting, drawing, art, sketch, artificial, fake, low quality, blurry, distorted face, multiple faces, deformed'
    };

    const response = await this.generateImage(imageParams);

    if (response.data.length === 0) {
      throw new Error('No images generated');
    }

    const imageUrl = response.data[0].url;
    const filename = this.sanitizeFilename(params.name) + '.jpg';

    // Download and save the image
    await this.downloadImage(imageUrl, filename);

    // Return the public path
    return `/images/reviewers/${filename}`;
  }

  /**
   * Build a detailed prompt for photorealistic headshot generation
   */
  private buildHeadshotPrompt(params: HeadshotParams): string {
    let prompt = 'Professional photorealistic headshot portrait, ';

    // Age
    if (params.age) {
      prompt += `${params.age} years old, `;
    } else if (params.age !== undefined) {
      // Estimate age range if not exact
      const ageRange = this.estimateAgeRange(params.age);
      prompt += `${ageRange} years old, `;
    }

    // Gender and ethnicity
    const genderDescriptor = this.getGenderDescriptor(params.gender);
    if (genderDescriptor) {
      prompt += `${genderDescriptor} `;
    }

    if (params.ethnicity) {
      prompt += `of ${params.ethnicity} descent, `;
    }

    // Additional description
    if (params.description) {
      prompt += `${params.description}, `;
    }

    // Professional headshot qualities
    prompt += 'warm genuine smile, making eye contact with camera, ';
    prompt += 'soft natural lighting, neutral background, ';
    prompt += 'professional attire, shallow depth of field, ';
    prompt += '50mm lens portrait photography, ';
    prompt += 'high resolution, photorealistic, natural skin texture, ';
    prompt += 'authentic and approachable expression';

    return prompt;
  }

  /**
   * Get gender descriptor for prompt
   */
  private getGenderDescriptor(gender?: string): string {
    switch (gender) {
      case 'male':
        return 'man';
      case 'female':
        return 'woman';
      case 'nonbinary':
        return 'person';
      default:
        return 'person';
    }
  }

  /**
   * Estimate age range from exact age
   */
  private estimateAgeRange(age: number): string {
    if (age < 25) return 'early 20s';
    if (age < 30) return 'late 20s';
    if (age < 35) return 'early 30s';
    if (age < 40) return 'late 30s';
    if (age < 45) return 'early 40s';
    if (age < 50) return 'late 40s';
    if (age < 55) return 'early 50s';
    return 'mid 50s';
  }

  /**
   * Generate an image using the Ideogram API
   */
  async generateImage(params: GenerateImageParams): Promise<IdeogramResponse> {
    const formData = new FormData();

    formData.append('prompt', params.prompt);

    if (params.resolution) {
      formData.append('resolution', params.resolution);
    }

    if (params.aspectRatio) {
      formData.append('aspect_ratio', params.aspectRatio);
    }

    if (params.renderingSpeed) {
      formData.append('rendering_speed', params.renderingSpeed);
    }

    if (params.magicPrompt) {
      formData.append('magic_prompt', params.magicPrompt);
    }

    if (params.styleType) {
      formData.append('style_type', params.styleType);
    }

    if (params.negativePrompt) {
      formData.append('negative_prompt', params.negativePrompt);
    }

    if (params.seed !== undefined) {
      formData.append('seed', params.seed.toString());
    }

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

      const data: IdeogramResponse = await response.json();

      // Check if image is safe
      if (data.data.length > 0 && !data.data[0].is_image_safe) {
        throw new Error('Generated image was flagged as unsafe');
      }

      return data;
    } catch (error) {
      console.error('Error generating image:', error);
      throw error;
    }
  }

  /**
   * Download an image from a URL and save it locally
   */
  private async downloadImage(url: string, filename: string): Promise<void> {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to download image: ${response.statusText}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const filepath = path.join(this.outputDir, filename);
    fs.writeFileSync(filepath, buffer);

    console.log(`✓ Saved headshot: ${filename}`);
  }

  /**
   * Sanitize a name for use as a filename
   */
  private sanitizeFilename(name: string): string {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  }

  /**
   * Batch generate multiple headshots
   */
  async generateBatchHeadshots(
    paramsArray: HeadshotParams[]
  ): Promise<Array<{ name: string; path: string; error?: string }>> {
    const results = [];

    for (const params of paramsArray) {
      try {
        console.log(`Generating headshot for ${params.name}...`);
        const path = await this.generateHeadshot(params);
        results.push({ name: params.name, path });

        // Rate limiting: wait 1 second between requests to avoid API limits
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (error) {
        console.error(`Failed to generate headshot for ${params.name}:`, error);
        results.push({
          name: params.name,
          path: '',
          error: error instanceof Error ? error.message : 'Unknown error'
        });
      }
    }

    return results;
  }
}

export default IdeogramClient;
export type { IdeogramConfig, HeadshotParams, GenerateImageParams, IdeogramResponse };
