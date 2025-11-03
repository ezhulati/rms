import { test, expect } from '@playwright/test';

const pages = [
  { url: '/', name: 'homepage' },
  { url: '/compare', name: 'compare' },
  { url: '/reviews', name: 'reviews' },
  { url: '/blog', name: 'blog' },
  { url: '/best', name: 'best' },
  { url: '/tools', name: 'tools' },
  { url: '/learn', name: 'learn' },
  { url: '/case-studies', name: 'case-studies' },
];

test.describe('Mobile Responsiveness Tests', () => {
  for (const page of pages) {
    test(`${page.name} - Check for horizontal overflow`, async ({ page: browserPage }) => {
      await browserPage.goto(page.url);

      // Wait for page to load
      await browserPage.waitForLoadState('networkidle');

      // Check for horizontal scrollbar (indicates overflow)
      const hasHorizontalScroll = await browserPage.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });

      // Log viewport and body width
      const dimensions = await browserPage.evaluate(() => ({
        viewportWidth: document.documentElement.clientWidth,
        bodyWidth: document.body.scrollWidth,
        documentWidth: document.documentElement.scrollWidth
      }));

      console.log(`${page.name}:`, dimensions);
      console.log(`  Has horizontal scroll: ${hasHorizontalScroll}`);

      // Check for container mx-auto classes
      const containers = await browserPage.$$('.container.mx-auto');
      console.log(`  Containers with mx-auto: ${containers.length}`);

      // Check viewport meta tag
      const viewport = await browserPage.$eval(
        'meta[name="viewport"]',
        (el) => el.getAttribute('content')
      ).catch(() => null);
      console.log(`  Viewport meta: ${viewport}`);

      // Take screenshot
      await browserPage.screenshot({
        path: `test-results/mobile-${page.name}-${test.info().project.name}.png`,
        fullPage: true
      }).catch(() => {}); // Ignore errors if directory doesn't exist

      // Fail test if horizontal scroll exists
      expect(hasHorizontalScroll).toBe(false);
    });
  }
});
