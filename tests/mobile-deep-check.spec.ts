import { test, expect } from '@playwright/test';

const pages = [
  { url: '/', name: 'homepage' },
  { url: '/compare', name: 'compare' },
  { url: '/reviews', name: 'reviews' },
  { url: '/blog', name: 'blog' },
  { url: '/best', name: 'best' },
  { url: '/tools', name: 'tools' },
  { url: '/learn', name: 'learn' },
  { url: '/resources', name: 'resources' },
  { url: '/case-studies', name: 'case-studies' },
];

test.describe('Deep Mobile Responsiveness Checks', () => {
  for (const page of pages) {
    test(`${page.name} - Comprehensive mobile check`, async ({ page: browserPage }) => {
      await browserPage.goto(page.url);
      await browserPage.waitForLoadState('networkidle');

      // 1. Check for horizontal overflow
      const overflowCheck = await browserPage.evaluate(() => {
        const results = {
          documentWidth: document.documentElement.scrollWidth,
          viewportWidth: document.documentElement.clientWidth,
          bodyWidth: document.body.scrollWidth,
          hasHorizontalScroll: document.documentElement.scrollWidth > document.documentElement.clientWidth,
          overflowingElements: [] as Array<{tag: string, class: string, width: number, id: string}>
        };

        // Find elements that are wider than viewport
        const allElements = document.querySelectorAll('*');
        allElements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.width > document.documentElement.clientWidth) {
            results.overflowingElements.push({
              tag: el.tagName.toLowerCase(),
              class: el.className.toString().substring(0, 50),
              width: Math.round(rect.width),
              id: el.id || 'no-id'
            });
          }
        });

        return results;
      });

      console.log(`\n${page.name} - Overflow Check:`, overflowCheck);

      // 2. Check touch target sizes
      const touchTargets = await browserPage.evaluate(() => {
        const buttons = document.querySelectorAll('button, a, [role="button"], input[type="submit"], input[type="button"]');
        const smallTargets: Array<{tag: string, text: string, width: number, height: number}> = [];

        buttons.forEach((btn) => {
          const rect = btn.getBoundingClientRect();
          if ((rect.width < 44 || rect.height < 44) && rect.width > 0 && rect.height > 0) {
            smallTargets.push({
              tag: btn.tagName.toLowerCase(),
              text: btn.textContent?.trim().substring(0, 30) || '',
              width: Math.round(rect.width),
              height: Math.round(rect.height)
            });
          }
        });

        return {
          total: buttons.length,
          smallTargets: smallTargets.slice(0, 10) // Limit to first 10
        };
      });

      console.log(`${page.name} - Touch Targets:`, touchTargets);

      // 3. Check font sizes
      const fontSizes = await browserPage.evaluate(() => {
        const textElements = document.querySelectorAll('p, span, div, a, button, h1, h2, h3, h4, h5, h6, li');
        const tooSmall: Array<{tag: string, fontSize: string, text: string}> = [];

        textElements.forEach((el) => {
          const style = window.getComputedStyle(el);
          const fontSize = parseFloat(style.fontSize);
          if (fontSize < 14 && el.textContent?.trim()) {
            tooSmall.push({
              tag: el.tagName.toLowerCase(),
              fontSize: style.fontSize,
              text: el.textContent.trim().substring(0, 30)
            });
          }
        });

        return {
          tooSmall: tooSmall.slice(0, 5) // Limit to first 5
        };
      });

      console.log(`${page.name} - Font Sizes:`, fontSizes);

      // 4. Check images
      const images = await browserPage.evaluate(() => {
        const imgs = document.querySelectorAll('img');
        const issues: Array<{src: string, width: number, height: number, hasAlt: boolean}> = [];

        imgs.forEach((img) => {
          const rect = img.getBoundingClientRect();
          if (rect.width > document.documentElement.clientWidth) {
            issues.push({
              src: img.src.substring(0, 50),
              width: Math.round(rect.width),
              height: Math.round(rect.height),
              hasAlt: !!img.alt
            });
          }
        });

        return {
          total: imgs.length,
          oversized: issues
        };
      });

      console.log(`${page.name} - Images:`, images);

      // 5. Check spacing and padding
      const spacing = await browserPage.evaluate(() => {
        const containers = document.querySelectorAll('.container, [class*="container"]');
        const spacingData: Array<{
          class: string,
          paddingLeft: string,
          paddingRight: string,
          width: number
        }> = [];

        containers.forEach((container) => {
          const style = window.getComputedStyle(container);
          const rect = container.getBoundingClientRect();
          spacingData.push({
            class: container.className.toString().substring(0, 50),
            paddingLeft: style.paddingLeft,
            paddingRight: style.paddingRight,
            width: Math.round(rect.width)
          });
        });

        return spacingData.slice(0, 5);
      });

      console.log(`${page.name} - Spacing:`, spacing);

      // 6. Check for fixed width elements
      const fixedWidths = await browserPage.evaluate(() => {
        const elements = document.querySelectorAll('*');
        const fixed: Array<{tag: string, class: string, width: string}> = [];

        elements.forEach((el) => {
          const style = window.getComputedStyle(el);
          if (style.width && style.width.includes('px') && !style.width.includes('100%')) {
            const widthPx = parseFloat(style.width);
            if (widthPx > document.documentElement.clientWidth) {
              fixed.push({
                tag: el.tagName.toLowerCase(),
                class: el.className.toString().substring(0, 30),
                width: style.width
              });
            }
          }
        });

        return fixed.slice(0, 5);
      });

      console.log(`${page.name} - Fixed Widths:`, fixedWidths);

      // 7. Take full-page screenshot
      await browserPage.screenshot({
        path: `test-results/deep-mobile-${page.name}-${test.info().project.name}.png`,
        fullPage: true
      }).catch(() => {});

      // Assertions
      expect(overflowCheck.hasHorizontalScroll,
        `Page has horizontal scroll. Overflowing elements: ${JSON.stringify(overflowCheck.overflowingElements.slice(0, 3))}`
      ).toBe(false);

      // Warn about small touch targets but don't fail
      if (touchTargets.smallTargets.length > 0) {
        console.warn(`⚠️  ${page.name} has ${touchTargets.smallTargets.length} touch targets smaller than 44x44px`);
      }

      // Warn about oversized images
      if (images.oversized.length > 0) {
        console.warn(`⚠️  ${page.name} has ${images.oversized.length} images wider than viewport`);
      }
    });
  }

  // Test specific viewport sizes
  const viewportSizes = [
    { name: 'iPhone SE', width: 375, height: 667 },
    { name: 'iPhone 12 Pro', width: 390, height: 844 },
    { name: 'iPhone 14 Pro Max', width: 430, height: 932 },
    { name: 'Samsung Galaxy S21', width: 360, height: 800 },
    { name: 'iPad Mini', width: 768, height: 1024 },
  ];

  for (const viewport of viewportSizes) {
    test(`Homepage on ${viewport.name} (${viewport.width}x${viewport.height})`, async ({ browser }) => {
      const context = await browser.newContext({
        viewport: { width: viewport.width, height: viewport.height }
      });
      const page = await context.newPage();

      await page.goto('/');
      await page.waitForLoadState('networkidle');

      const check = await page.evaluate(() => ({
        hasHorizontalScroll: document.documentElement.scrollWidth > document.documentElement.clientWidth,
        documentWidth: document.documentElement.scrollWidth,
        viewportWidth: document.documentElement.clientWidth
      }));

      console.log(`${viewport.name}: documentWidth=${check.documentWidth}px, viewportWidth=${check.viewportWidth}px`);

      await page.screenshot({
        path: `test-results/viewport-${viewport.name.replace(/ /g, '-')}.png`,
        fullPage: false
      }).catch(() => {});

      expect(check.hasHorizontalScroll).toBe(false);

      await context.close();
    });
  }
});
