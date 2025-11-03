import { test, expect } from '@playwright/test';

test.use({ viewport: { width: 1920, height: 1080 } });

test('Dropdown should stay open when moving mouse to menu items', async ({ page }) => {
  // Navigate to homepage with network idle
  await page.goto('http://localhost:4326/', { waitUntil: 'networkidle' });

  // Wait extra time for React hydration
  await page.waitForTimeout(2000);

  // Take initial screenshot
  await page.screenshot({ path: 'test-results/test-initial.png', fullPage: true });

  // Find the Compare dropdown button
  const compareButton = page.locator('button:has-text("Compare")').first();

  // Wait for it to be visible
  await expect(compareButton).toBeVisible();
  console.log('✅ Compare button found and visible');

  // Hover over the Compare button
  await compareButton.hover();
  console.log('✅ Hovered over Compare button');

  // Wait for dropdown animation
  await page.waitForTimeout(1000);

  // Take screenshot after hover
  await page.screenshot({ path: 'test-results/test-after-hover.png', fullPage: true });

  // Look for any dropdown menu content
  const dropdown = page.locator('.bg-white.rounded-2xl').first();

  if (await dropdown.isVisible()) {
    console.log('✅ Dropdown is visible!');

    // Try to find Platform Comparisons link
    const platformLink = page.locator('text=Platform Comparisons').first();
    if (await platformLink.isVisible()) {
      console.log('✅ Platform Comparisons link found!');

      // Move mouse to the link
      await platformLink.hover();
      await page.waitForTimeout(500);

      // Verify it's still visible
      await expect(platformLink).toBeVisible();
      console.log('✅ Link stayed visible after mouse movement!');

      // Click it
      await platformLink.click();
      await page.waitForLoadState('networkidle');

      console.log('✅ Successfully clicked and navigated!');
    } else {
      console.log('❌ Platform Comparisons link not found');
      console.log('Dropdown HTML:', await dropdown.innerHTML());
    }
  } else {
    console.log('❌ Dropdown not visible after hover');

    // Debug: Check what's on the page
    const buttons = await page.locator('button').count();
    console.log(`Found ${buttons} buttons on page`);

    const header = page.locator('header').first();
    if (await header.isVisible()) {
      console.log('Header is visible');
      console.log('Header HTML:', await header.innerHTML());
    } else {
      console.log('Header is NOT visible');
    }
  }
});
