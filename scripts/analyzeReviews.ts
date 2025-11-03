/**
 * Content Analysis Script
 * Scans all review files to identify reviewers, demographics, and context
 */

import fs from 'fs';
import path from 'path';

interface ReviewerInfo {
  name: string;
  file: string;
  context: string;
  demographics: {
    age?: number;
    gender?: 'male' | 'female' | 'nonbinary' | 'unknown';
    ethnicity?: string;
  };
  hasImage: boolean;
  imagePath?: string;
  quotes?: string[];
  lineNumbers?: number[];
}

interface AnalysisResult {
  reviewers: ReviewerInfo[];
  fileCount: number;
  totalReviewers: number;
  reviewersWithImages: number;
  summary: string;
}

class ReviewAnalyzer {
  private reviewers: ReviewerInfo[] = [];
  private commonNames = new Set<string>();

  // Common first names to look for in content
  private namePatterns = [
    'Sarah', 'Michael', 'Jen', 'Jennifer', 'Marcus', 'Emily', 'David', 'Lisa',
    'Rachel', 'Kevin', 'Jessica', 'Tom', 'Thomas', 'Amanda', 'James', 'Maria',
    'Robert', 'Linda', 'John', 'Patricia', 'Daniel', 'Amy', 'Chris', 'Anna',
    'Mark', 'Michelle', 'Paul', 'Laura', 'Jason', 'Karen', 'Brian', 'Nancy',
    'Ryan', 'Ashley', 'Eric', 'Nicole', 'Steven', 'Stephanie', 'Matthew', 'Rebecca'
  ];

  /**
   * Scan a directory recursively for .astro files
   */
  async scanDirectory(dirPath: string): Promise<void> {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);

      if (entry.isDirectory()) {
        await this.scanDirectory(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.astro')) {
        await this.analyzeFile(fullPath);
      }
    }
  }

  /**
   * Analyze a single Astro file for reviewer information
   */
  private async analyzeFile(filePath: string): Promise<void> {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');

    // Determine context from filepath
    const context = this.determineContext(filePath);

    // Look for names in the content
    this.extractReviewers(content, filePath, context, lines);
  }

  /**
   * Determine the context/type of content from filepath
   */
  private determineContext(filePath: string): string {
    const relativePath = filePath.replace(process.cwd(), '');

    if (relativePath.includes('/case-studies/')) {
      return 'case-study';
    } else if (relativePath.includes('/blog/stories/')) {
      return 'blog-story';
    } else if (relativePath.includes('/blog/')) {
      return 'blog-post';
    } else if (relativePath.includes('/reviews/')) {
      return 'review';
    } else if (relativePath.includes('/comparisons/')) {
      return 'comparison';
    }

    return 'other';
  }

  /**
   * Extract reviewer information from content
   */
  private extractReviewers(
    content: string,
    filePath: string,
    context: string,
    lines: string[]
  ): void {
    // Pattern 1: Case study client format (e.g., "Sarah, 32-year-old")
    const caseStudyPattern = /\b([A-Z][a-z]+),\s+(\d+)[-\s]year[-\s]old\s+([^,\n]+)/gi;
    let match;

    while ((match = caseStudyPattern.exec(content)) !== null) {
      const name = match[1];
      const age = parseInt(match[2]);
      const description = match[3].trim();

      const demographics = this.parseDemographics(age, description);
      const lineNumber = this.findLineNumber(lines, match[0]);

      this.addReviewer({
        name,
        file: filePath,
        context,
        demographics,
        hasImage: this.checkForImage(content, name),
        imagePath: this.extractImagePath(content, name),
        quotes: this.extractQuotes(content, name),
        lineNumbers: lineNumber ? [lineNumber] : []
      });
    }

    // Pattern 2: Blog comment authors (e.g., <h4 class="font-bold">Rachel Martinez</h4>)
    const commentPattern = /<h4[^>]*>([A-Z][a-z]+\s+[A-Z][a-z]+)<\/h4>/gi;

    while ((match = commentPattern.exec(content)) !== null) {
      const fullName = match[1];
      const lineNumber = this.findLineNumber(lines, match[0]);

      this.addReviewer({
        name: fullName,
        file: filePath,
        context: 'blog-comment',
        demographics: {},
        hasImage: this.checkForImage(content, fullName),
        imagePath: this.extractImagePath(content, fullName),
        lineNumbers: lineNumber ? [lineNumber] : []
      });
    }

    // Pattern 3: Standalone names in quotes or testimonials
    const quotePattern = /<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi;

    while ((match = quotePattern.exec(content)) !== null) {
      const quoteContent = match[1];
      const quoteLineNumber = this.findLineNumber(lines, match[0]);

      // Look for names near quotes
      for (const name of this.namePatterns) {
        // Check if name appears within 500 characters before or after the quote
        const quoteIndex = content.indexOf(match[0]);
        const beforeQuote = content.substring(Math.max(0, quoteIndex - 500), quoteIndex);
        const afterQuote = content.substring(quoteIndex, Math.min(content.length, quoteIndex + 500));

        const nameRegex = new RegExp(`\\b${name}\\b`, 'i');

        if (nameRegex.test(beforeQuote) || nameRegex.test(afterQuote)) {
          // Try to extract full context
          const contextMatch = beforeQuote.match(new RegExp(`${name},?\\s+([^.]+)`, 'i'));

          if (contextMatch && !this.isDuplicateReviewer(name, filePath)) {
            const demographics = this.parseDemographics(0, contextMatch[1]);

            this.addReviewer({
              name,
              file: filePath,
              context: 'testimonial',
              demographics,
              hasImage: this.checkForImage(content, name),
              imagePath: this.extractImagePath(content, name),
              quotes: [quoteContent.replace(/<[^>]+>/g, '').trim().substring(0, 100)],
              lineNumbers: quoteLineNumber ? [quoteLineNumber] : []
            });
          }
        }
      }
    }

    // Pattern 4: Explicit reviewer mentions in text
    for (const name of this.namePatterns) {
      const nameRegex = new RegExp(`\\b${name}\\b(?:'s)?\\s+(story|experience|journey|case)`, 'gi');

      while ((match = nameRegex.exec(content)) !== null) {
        if (!this.isDuplicateReviewer(name, filePath)) {
          const lineNumber = this.findLineNumber(lines, match[0]);

          this.addReviewer({
            name,
            file: filePath,
            context: 'story-subject',
            demographics: {},
            hasImage: this.checkForImage(content, name),
            imagePath: this.extractImagePath(content, name),
            lineNumbers: lineNumber ? [lineNumber] : []
          });
        }
      }
    }
  }

  /**
   * Find line number for a given text match
   */
  private findLineNumber(lines: string[], searchText: string): number | undefined {
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes(searchText)) {
        return i + 1; // 1-indexed
      }
    }
    return undefined;
  }

  /**
   * Parse demographics from description text
   */
  private parseDemographics(age: number, description: string): ReviewerInfo['demographics'] {
    const demographics: ReviewerInfo['demographics'] = {};

    if (age > 0) {
      demographics.age = age;
    }

    const lowerDesc = description.toLowerCase();

    // Gender detection
    if (lowerDesc.match(/\b(woman|female|she|her|mother|mom)\b/)) {
      demographics.gender = 'female';
    } else if (lowerDesc.match(/\b(man|male|he|him|father|dad)\b/)) {
      demographics.gender = 'male';
    } else if (lowerDesc.match(/\b(non-?binary|they|them|enby)\b/)) {
      demographics.gender = 'nonbinary';
    }

    // Ethnicity detection
    if (lowerDesc.match(/\b(hispanic|latina?|latin american)\b/)) {
      demographics.ethnicity = 'Hispanic';
    } else if (lowerDesc.match(/\b(asian|chinese|korean|japanese|vietnamese)\b/)) {
      demographics.ethnicity = 'Asian';
    } else if (lowerDesc.match(/\b(african|black)\b/)) {
      demographics.ethnicity = 'African American';
    } else if (lowerDesc.match(/\b(indian|south asian)\b/)) {
      demographics.ethnicity = 'South Asian';
    } else if (lowerDesc.match(/\b(middle eastern|arab)\b/)) {
      demographics.ethnicity = 'Middle Eastern';
    } else if (lowerDesc.match(/\b(white|caucasian|european)\b/)) {
      demographics.ethnicity = 'Caucasian';
    }

    return demographics;
  }

  /**
   * Check if content has an image associated with a name
   */
  private checkForImage(content: string, name: string): boolean {
    const imagePattern = new RegExp(`<img[^>]*(?:alt=["'][^"']*${name}|src=["'][^"']*${name.toLowerCase()})`, 'i');
    return imagePattern.test(content);
  }

  /**
   * Extract image path for a reviewer
   */
  private extractImagePath(content: string, name: string): string | undefined {
    const imagePattern = new RegExp(`<img[^>]*src=["']([^"']+)["'][^>]*(?:alt=["'][^"']*${name})?`, 'i');
    const match = content.match(imagePattern);

    if (match) {
      return match[1];
    }

    return undefined;
  }

  /**
   * Extract quotes associated with a reviewer
   */
  private extractQuotes(content: string, name: string): string[] {
    const quotes: string[] = [];
    const quotePattern = /<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi;
    let match;

    while ((match = quotePattern.exec(content)) !== null) {
      const quoteContent = match[1].replace(/<[^>]+>/g, '').trim();

      // Check if quote appears near the name
      const quoteIndex = content.indexOf(match[0]);
      const beforeQuote = content.substring(Math.max(0, quoteIndex - 1000), quoteIndex);
      const afterQuote = content.substring(quoteIndex, Math.min(content.length, quoteIndex + 500));

      if (beforeQuote.includes(name) || afterQuote.includes(name)) {
        quotes.push(quoteContent.substring(0, 200));
      }
    }

    return quotes;
  }

  /**
   * Check if a reviewer has already been added for this file
   */
  private isDuplicateReviewer(name: string, filePath: string): boolean {
    return this.reviewers.some(r => r.name === name && r.file === filePath);
  }

  /**
   * Add a reviewer to the list
   */
  private addReviewer(reviewer: ReviewerInfo): void {
    // Avoid duplicates
    if (!this.isDuplicateReviewer(reviewer.name, reviewer.file)) {
      this.reviewers.push(reviewer);
      this.commonNames.add(reviewer.name);
    }
  }

  /**
   * Get analysis results
   */
  getResults(): AnalysisResult {
    const reviewersWithImages = this.reviewers.filter(r => r.hasImage).length;
    const fileSet = new Set(this.reviewers.map(r => r.file));

    const summary = `
Found ${this.reviewers.length} reviewers across ${fileSet.size} files:
- ${reviewersWithImages} reviewers with existing images
- ${this.reviewers.length - reviewersWithImages} reviewers without images

Breakdown by context:
${this.getContextBreakdown()}

Unique names found: ${this.commonNames.size}
    `.trim();

    return {
      reviewers: this.reviewers,
      fileCount: fileSet.size,
      totalReviewers: this.reviewers.length,
      reviewersWithImages,
      summary
    };
  }

  /**
   * Get breakdown by context type
   */
  private getContextBreakdown(): string {
    const contextCounts: Record<string, number> = {};

    for (const reviewer of this.reviewers) {
      contextCounts[reviewer.context] = (contextCounts[reviewer.context] || 0) + 1;
    }

    return Object.entries(contextCounts)
      .map(([context, count]) => `  - ${context}: ${count}`)
      .join('\n');
  }

  /**
   * Export results to JSON file
   */
  exportResults(outputPath: string): void {
    const results = this.getResults();
    fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
    console.log(`\n✓ Analysis exported to: ${outputPath}`);
  }
}

// Main execution
async function main() {
  const analyzer = new ReviewAnalyzer();

  console.log('Scanning for reviewers in Astro files...\n');

  const srcPath = path.join(process.cwd(), 'src', 'pages');
  await analyzer.scanDirectory(srcPath);

  const results = analyzer.getResults();
  console.log(results.summary);

  // Export detailed results
  const outputPath = path.join(process.cwd(), 'reviewer-inventory.json');
  analyzer.exportResults(outputPath);

  console.log('\nDetailed reviewer information saved for name replacement and image generation.\n');
}

// Run if executed directly
if (require.main === module) {
  main().catch(console.error);
}

export default ReviewAnalyzer;
export type { ReviewerInfo, AnalysisResult };
