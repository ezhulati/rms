import { test, expect } from '@playwright/test';

test.describe('Navigation Header', () => {
  test('should display and interact with desktop navigation', async ({ page }) => {
    // Navigate to homepage
    await page.goto('http://localhost:4325/');

    // Wait for navigation to be visible
    await page.waitForSelector('header nav');

    // Take initial screenshot
    await page.screenshot({ path: 'test-results/nav-initial.png', fullPage: false });

    // Check if Compare dropdown exists
    const compareButton = page.locator('button:has-text("Compare")').first();
    await expect(compareButton).toBeVisible();

    // Hover over Compare to open dropdown
    await compareButton.hover();
    await page.waitForTimeout(500); // Wait for animation

    // Take screenshot of open dropdown
    await page.screenshot({ path: 'test-results/nav-dropdown-open.png', fullPage: false });

    // Check if dropdown menu items are visible
    const platformComparisons = page.locator('text=Platform Comparisons').first();
    await expect(platformComparisons).toBeVisible();

    // Click on a dropdown item
    await platformComparisons.click();
    await page.waitForLoadState('networkidle');

    // Verify navigation occurred
    await expect(page).toHaveURL(/compare/);

    console.log('✅ Desktop navigation test passed!');
  });

  test('should display mobile navigation', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });

    // Navigate to homepage
    await page.goto('http://localhost:4325/');

    // Wait for navigation to be visible
    await page.waitForSelector('header nav');

    // Take initial screenshot
    await page.screenshot({ path: 'test-results/mobile-nav-initial.png', fullPage: false });

    // Check if hamburger menu exists
    const hamburger = page.locator('button[aria-label*="menu"]').first();
    await expect(hamburger).toBeVisible();

    // Click hamburger to open mobile menu
    await hamburger.click();
    await page.waitForTimeout(500); // Wait for animation

    // Take screenshot of open mobile menu
    await page.screenshot({ path: 'test-results/mobile-nav-open.png', fullPage: true });

    // Check if mobile menu items are visible
    const compareSection = page.locator('text=Compare').first();
    await expect(compareSection).toBeVisible();

    console.log('✅ Mobile navigation test passed!');
  });
});
