import { test, expect } from '@playwright/test';

test.use({ viewport: { width: 1920, height: 1080 } });

test.describe('Navigation Dropdown Hover Fix', () => {
  test('Dropdown stays open when moving mouse from button to menu', async ({ page }) => {
    // Navigate and wait for hydration
    await page.goto('http://localhost:4326/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    // Find and hover over Compare button
    const compareButton = page.locator('button:has-text("Compare")').first();
    await expect(compareButton).toBeVisible();

    await compareButton.hover();
    await page.waitForTimeout(500);

    // Verify dropdown opened
    const dropdown = page.locator('.bg-white.rounded-2xl.shadow-xl').first();
    await expect(dropdown).toBeVisible();

    console.log('✅ Dropdown opened on hover');

    // Find a menu item link
    const platformLink = dropdown.locator('text=Platform Comparisons').first();
    await expect(platformLink).toBeVisible();

    console.log('✅ Platform Comparisons link visible');

    // Move mouse slowly from button toward the menu item
    const buttonBox = await compareButton.boundingBox();
    const linkBox = await platformLink.boundingBox();

    if (buttonBox && linkBox) {
      // Start at button
      await page.mouse.move(buttonBox.x + buttonBox.width / 2, buttonBox.y + buttonBox.height / 2);
      await page.waitForTimeout(100);

      // Move through the gap (where the hover bridge should be)
      await page.mouse.move(
        buttonBox.x + buttonBox.width / 2,
        buttonBox.y + buttonBox.height + 10  // 10px into the gap
      );
      await page.waitForTimeout(100);

      // Continue to the menu item
      await page.mouse.move(linkBox.x + linkBox.width / 2, linkBox.y + linkBox.height / 2);
      await page.waitForTimeout(100);
    }

    // Verify dropdown is STILL visible after moving through gap
    await expect(dropdown).toBeVisible();
    await expect(platformLink).toBeVisible();

    console.log('✅ Dropdown stayed open while moving mouse!');

    // Click the link to verify it works
    await platformLink.click();
    await page.waitForLoadState('networkidle');

    // Verify navigation
    expect(page.url()).toContain('/compare');

    console.log('✅ Successfully navigated to compare page');
  });

  test('Dropdown closes when mouse leaves area', async ({ page }) => {
    await page.goto('http://localhost:4326/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    // Open dropdown
    const compareButton = page.locator('button:has-text("Compare")').first();
    await compareButton.hover();
    await page.waitForTimeout(500);

    const dropdown = page.locator('.bg-white.rounded-2xl.shadow-xl').first();
    await expect(dropdown).toBeVisible();

    // Move mouse far away
    await page.mouse.move(10, 500);
    await page.waitForTimeout(300);

    // Dropdown should be closed
    await expect(dropdown).not.toBeVisible();

    console.log('✅ Dropdown correctly closed when mouse left');
  });
});
