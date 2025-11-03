import { test, expect } from '@playwright/test';

test.use({ viewport: { width: 1920, height: 1080 } });

test.describe('Navigation Dropdown Hover Fix Verification', () => {
  test('Dropdown stays open when moving mouse from button to menu item', async ({ page }) => {
    // Navigate and wait for React hydration
    await page.goto('http://localhost:4326/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    console.log('✅ Page loaded');

    // Find Compare button
    const compareButton = page.locator('button').filter({ hasText: 'Compare' }).first();
    await expect(compareButton).toBeVisible();

    console.log('✅ Compare button found');

    // Hover over button to open dropdown
    await compareButton.hover();
    await page.waitForTimeout(500);

    // Look for dropdown menu by finding a specific menu item link
    const platformLink = page.locator('a[href="/compare/platforms"]').first();

    // Wait for it to appear (should be visible if dropdown opened)
    await expect(platformLink).toBeVisible({ timeout: 3000 });

    console.log('✅ Dropdown opened - Platform Comparisons link visible');

    // Get positions
    const buttonBox = await compareButton.boundingBox();
    const linkBox = await platformLink.boundingBox();

    if (buttonBox && linkBox) {
      // Move mouse from button center
      await page.mouse.move(
        buttonBox.x + buttonBox.width / 2,
        buttonBox.y + buttonBox.height / 2
      );
      await page.waitForTimeout(100);

      console.log('✅ Mouse at button center');

      // Move through the gap (this is where the hover bridge prevents closing)
      await page.mouse.move(
        buttonBox.x + buttonBox.width / 2,
        buttonBox.y + buttonBox.height + 8  // 8px into the gap
      );
      await page.waitForTimeout(100);

      console.log('✅ Mouse moved through gap');

      // Move to the link
      await page.mouse.move(
        linkBox.x + linkBox.width / 2,
        linkBox.y + linkBox.height / 2
      );
      await page.waitForTimeout(100);

      console.log('✅ Mouse moved to link');
    }

    // THE KEY TEST: Verify link is STILL visible after moving through gap
    await expect(platformLink).toBeVisible();

    console.log('✅ SUCCESS! Dropdown stayed open while moving mouse through the gap!');

    // Verify we can click it
    await platformLink.click();
    await page.waitForLoadState('networkidle');

    expect(page.url()).toContain('/compare/platforms');

    console.log('✅ Navigation successful!');
  });

  test('Dropdown closes when mouse leaves the dropdown area completely', async ({ page }) => {
    await page.goto('http://localhost:4326/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    // Open dropdown
    const compareButton = page.locator('button').filter({ hasText: 'Compare' }).first();
    await compareButton.hover();
    await page.waitForTimeout(500);

    const platformLink = page.locator('a[href="/compare/platforms"]').first();
    await expect(platformLink).toBeVisible();

    console.log('✅ Dropdown opened');

    // Move mouse completely away
    await page.mouse.move(10, 500);
    await page.waitForTimeout(500);

    // Dropdown should close
    await expect(platformLink).not.toBeVisible();

    console.log('✅ Dropdown correctly closed when mouse moved away');
  });
});
