/**
 * Page Completeness Audit Script
 * Uses Playwright to visit each page and check for incomplete content
 */

import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Incomplete content indicators
const INCOMPLETE_INDICATORS = [
  /coming soon/i,
  /content coming soon/i,
  /placeholder/i,
  /this is a placeholder/i,
  /lorem ipsum/i,
  /content placeholder/i,
  /page under construction/i,
  /work in progress/i,
  /to be added/i,
  /TBD/i,
];

// Get all built pages from dist directory
function getAllPages(dir, baseDir = dir, pages = []) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getAllPages(filePath, baseDir, pages);
    } else if (file === 'index.html') {
      const relativePath = path.relative(baseDir, filePath);
      const urlPath = '/' + path.dirname(relativePath).replace(/\\/g, '/');
      pages.push(urlPath === '/.' ? '/' : urlPath);
    }
  }

  return pages;
}

async function auditPage(page, url, baseUrl) {
  const results = {
    url,
    complete: true,
    issues: [],
    wordCount: 0,
    hasMainContent: false,
  };

  try {
    const response = await page.goto(baseUrl + url, {
      waitUntil: 'networkidle',
      timeout: 10000
    });

    if (!response || response.status() !== 200) {
      results.complete = false;
      results.issues.push(`HTTP ${response?.status() || 'Error'}`);
      return results;
    }

    // Get page content
    const bodyText = await page.textContent('body');

    // Check for incomplete indicators
    for (const pattern of INCOMPLETE_INDICATORS) {
      if (pattern.test(bodyText)) {
        results.complete = false;
        results.issues.push(`Contains: "${bodyText.match(pattern)[0]}"`);
      }
    }

    // Count words in main content areas
    const mainContent = await page.locator('main, article, section').first().textContent().catch(() => '');
    const words = mainContent.trim().split(/\s+/).filter(w => w.length > 0);
    results.wordCount = words.length;
    results.hasMainContent = mainContent.length > 100;

    // Check if content is too short (likely incomplete)
    if (results.wordCount < 100 && !url.includes('/404')) {
      results.complete = false;
      results.issues.push(`Very short content (${results.wordCount} words)`);
    }

    // Check for "Current path: " which indicates placeholder routing page
    if (bodyText.includes('Current path:') && bodyText.includes('specific')) {
      results.complete = false;
      results.issues.push('Placeholder routing page detected');
    }

  } catch (error) {
    results.complete = false;
    results.issues.push(`Error: ${error.message}`);
  }

  return results;
}

async function main() {
  console.log('🔍 Starting Page Completeness Audit...\n');

  // Get all pages from dist
  const distDir = path.join(__dirname, '../dist');
  const pages = getAllPages(distDir).sort();

  console.log(`Found ${pages.length} pages to audit\n`);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const baseUrl = 'http://localhost:4323';
  const incompletePages = [];
  const completePages = [];

  let progress = 0;
  const total = pages.length;

  for (const url of pages) {
    progress++;
    process.stdout.write(`\rProgress: ${progress}/${total} (${Math.round(progress/total*100)}%)`);

    const result = await auditPage(page, url, baseUrl);

    if (!result.complete) {
      incompletePages.push(result);
    } else {
      completePages.push(result);
    }
  }

  await browser.close();

  // Generate report
  console.log('\n\n' + '='.repeat(80));
  console.log('📊 AUDIT REPORT');
  console.log('='.repeat(80));
  console.log(`\n✅ Complete Pages: ${completePages.length}`);
  console.log(`❌ Incomplete Pages: ${incompletePages.length}`);
  console.log(`📄 Total Pages: ${total}\n`);

  if (incompletePages.length > 0) {
    console.log('='.repeat(80));
    console.log('⚠️  INCOMPLETE PAGES');
    console.log('='.repeat(80) + '\n');

    // Group by issue type
    const byIssue = {};
    incompletePages.forEach(p => {
      p.issues.forEach(issue => {
        if (!byIssue[issue]) byIssue[issue] = [];
        byIssue[issue].push(p.url);
      });
    });

    // Sort issues by frequency
    const sortedIssues = Object.entries(byIssue).sort((a, b) => b[1].length - a[1].length);

    for (const [issue, urls] of sortedIssues) {
      console.log(`\n❌ ${issue} (${urls.length} pages)`);
      console.log('─'.repeat(80));
      urls.forEach(url => console.log(`   ${url}`));
    }

    // Write detailed report to file
    const reportPath = path.join(__dirname, '../audit-report.json');
    fs.writeFileSync(reportPath, JSON.stringify({
      timestamp: new Date().toISOString(),
      summary: {
        total,
        complete: completePages.length,
        incomplete: incompletePages.length,
      },
      incompletePages,
      completePages: completePages.map(p => ({ url: p.url, wordCount: p.wordCount })),
    }, null, 2));

    console.log('\n' + '='.repeat(80));
    console.log(`📝 Detailed report saved to: audit-report.json`);
    console.log('='.repeat(80) + '\n');
  }
}

main().catch(console.error);
