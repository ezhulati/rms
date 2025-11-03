import { test } from '@playwright/test';

test.use({ viewport: { width: 1920, height: 1080 } });

test('Debug header rendering', async ({ page }) => {
  // Capture console messages
  page.on('console', msg => {
    console.log(`BROWSER ${msg.type()}: ${msg.text()}`);
  });

  // Capture page errors
  page.on('pageerror', error => {
    console.log(`PAGE ERROR: ${error.message}`);
    console.log(error.stack);
  });

  // Navigate to homepage
  console.log('Navigating to http://localhost:4326/');
  await page.goto('http://localhost:4326/', { waitUntil: 'networkidle' });

  // Wait a bit
  await page.waitForTimeout(3000);

  // Check if header exists in DOM
  const header = await page.locator('header').count();
  console.log(`Found ${header} header elements`);

  // Check for astro-island
  const islands = await page.locator('astro-island').count();
  console.log(`Found ${islands} astro-island elements`);

  // Check for Compare button
  const compareButtons = await page.locator('button:has-text("Compare")').count();
  console.log(`Found ${compareButtons} Compare buttons`);

  // Take screenshot
  await page.screenshot({ path: 'test-results/debug-header.png', fullPage: true });
  console.log('Screenshot saved');
});
