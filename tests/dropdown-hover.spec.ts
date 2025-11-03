import { test, expect } from '@playwright/test';

test.describe('Navigation Dropdown Hover Behavior', () => {
  test('dropdown should stay open when moving mouse from button to menu items', async ({ page }) => {
    // Set desktop viewport for dropdown testing
    await page.setViewportSize({ width: 1920, height: 1080 });

    // Navigate to homepage
    await page.goto('http://localhost:4326/');

    // Wait for navigation to be visible
    await page.waitForSelector('header nav');

    // Find the Compare dropdown button
    const compareButton = page.locator('button:has-text("Compare")').first();
    await expect(compareButton).toBeVisible();

    // Hover over the Compare button to open dropdown
    await compareButton.hover();

    // Wait for dropdown animation
    await page.waitForTimeout(300);

    // Check that dropdown menu is visible
    const dropdownMenu = page.locator('text=Platform Comparisons').first();
    await expect(dropdownMenu).toBeVisible();

    // Get the bounding boxes to simulate realistic mouse movement
    const buttonBox = await compareButton.boundingBox();
    const menuItemBox = await dropdownMenu.boundingBox();

    if (buttonBox && menuItemBox) {
      // Move mouse from button center to menu item center
      // This simulates moving through the gap between button and dropdown
      await page.mouse.move(buttonBox.x + buttonBox.width / 2, buttonBox.y + buttonBox.height / 2);
      await page.waitForTimeout(100);

      // Move down through the gap
      await page.mouse.move(buttonBox.x + buttonBox.width / 2, buttonBox.y + buttonBox.height + 5);
      await page.waitForTimeout(100);

      // Continue to the menu item
      await page.mouse.move(menuItemBox.x + menuItemBox.width / 2, menuItemBox.y + menuItemBox.height / 2);
      await page.waitForTimeout(100);
    }

    // Verify dropdown is still visible after moving mouse
    await expect(dropdownMenu).toBeVisible();

    // Verify we can click on the menu item
    await dropdownMenu.click();
    await page.waitForLoadState('networkidle');

    // Verify navigation occurred
    await expect(page).toHaveURL(/compare/);

    console.log('✅ Dropdown hover test passed! Menu stayed open during mouse movement.');
  });

  test('dropdown should close when mouse leaves the dropdown area', async ({ page }) => {
    // Set desktop viewport
    await page.setViewportSize({ width: 1920, height: 1080 });

    // Navigate to homepage
    await page.goto('http://localhost:4326/');

    // Wait for navigation to be visible
    await page.waitForSelector('header nav');

    // Find and hover over Compare button
    const compareButton = page.locator('button:has-text("Compare")').first();
    await compareButton.hover();
    await page.waitForTimeout(300);

    // Verify dropdown is visible
    const dropdownMenu = page.locator('text=Platform Comparisons').first();
    await expect(dropdownMenu).toBeVisible();

    // Move mouse completely away from dropdown area
    await page.mouse.move(100, 300);
    await page.waitForTimeout(200);

    // Verify dropdown is no longer visible
    await expect(dropdownMenu).not.toBeVisible();

    console.log('✅ Dropdown correctly closes when mouse leaves the area.');
  });

  test('multiple dropdowns should work independently', async ({ page }) => {
    // Set desktop viewport
    await page.setViewportSize({ width: 1920, height: 1080 });

    // Navigate to homepage
    await page.goto('http://localhost:4326/');
    await page.waitForSelector('header nav');

    // Test Compare dropdown
    const compareButton = page.locator('button:has-text("Compare")').first();
    await compareButton.hover();
    await page.waitForTimeout(300);

    const compareMenu = page.locator('text=Platform Comparisons').first();
    await expect(compareMenu).toBeVisible();

    // Move away to close it
    await page.mouse.move(100, 300);
    await page.waitForTimeout(200);
    await expect(compareMenu).not.toBeVisible();

    // Test Best dropdown
    const bestButton = page.locator('button:has-text("Best")').first();
    await bestButton.hover();
    await page.waitForTimeout(300);

    // Look for a menu item that should be in the Best dropdown
    const bestMenu = page.locator('.bg-white.rounded-2xl').first();
    await expect(bestMenu).toBeVisible();

    console.log('✅ Multiple dropdowns work independently.');
  });
});
