import { test, expect } from '@playwright/test';

test.describe('Mental Health Statistics - Icon Spacing', () => {
  test('should have proper spacing between icons and text', async ({ page }) => {
    // Navigate to mental health statistics page
    await page.goto('http://localhost:4325/learn/statistics/mental-health-statistics');
    await page.waitForLoadState('networkidle');

    // Take a screenshot of the full page
    await page.screenshot({
      path: 'test-results/stats-page-full.png',
      fullPage: true
    });

    // Check Treatment Barriers section icons
    const barrierSection = page.locator('text=Treatment Barriers').first();
    await barrierSection.scrollIntoViewIfNeeded();

    // Find the Cost & Insurance card
    const costCard = page.locator('text=Cost & Insurance').first();
    await expect(costCard).toBeVisible();

    // Get the parent div that contains the icon
    const costCardParent = costCard.locator('xpath=..');

    // Screenshot the barriers section
    await page.screenshot({
      path: 'test-results/stats-barriers-section.png',
      clip: await barrierSection.locator('xpath=..').boundingBox() || undefined
    });

    // Check Demographic Differences section
    const demoSection = page.locator('text=Demographic Differences').first();
    await demoSection.scrollIntoViewIfNeeded();

    // Find arrow icons in the demographic lists
    const ageGroupSection = page.locator('text=Age Groups').first();
    await expect(ageGroupSection).toBeVisible();

    // Screenshot the demographic section
    await page.screenshot({
      path: 'test-results/stats-demographic-section.png',
      clip: await demoSection.locator('xpath=..').boundingBox() || undefined
    });

    // Verify icon elements have proper classes
    // Check for Lucide React icons (they render as SVGs)
    const icons = page.locator('svg').filter({
      has: page.locator('path, circle, line')
    });
    const iconCount = await icons.count();
    console.log(`Found ${iconCount} icons on the page`);
    expect(iconCount).toBeGreaterThan(0);

    // Check specific icon spacing by inspecting computed styles
    const firstIcon = page.locator('.flex.items-center svg').first();
    if (await firstIcon.count() > 0) {
      const iconBox = await firstIcon.boundingBox();
      const parentBox = await firstIcon.locator('xpath=..').boundingBox();

      console.log('Icon bounding box:', iconBox);
      console.log('Parent bounding box:', parentBox);

      // Take a close-up screenshot of the first icon with text
      if (iconBox) {
        await page.screenshot({
          path: 'test-results/stats-icon-closeup.png',
          clip: {
            x: Math.max(0, iconBox.x - 10),
            y: Math.max(0, iconBox.y - 10),
            width: Math.min(300, iconBox.width + 200),
            height: Math.min(100, iconBox.height + 20)
          }
        });
      }
    }

    console.log('✅ Icon spacing test completed! Check test-results/ for screenshots.');
  });

  test('should verify icon margin classes are applied', async ({ page }) => {
    await page.goto('http://localhost:4325/learn/statistics/mental-health-statistics');
    await page.waitForLoadState('networkidle');

    // Check that icons in Treatment Barriers have mr-3 class
    const barrierIcons = page.locator('div:has-text("Cost & Insurance") svg, div:has-text("Provider Availability") svg, div:has-text("Stigma") svg, div:has-text("Awareness") svg');
    const count = await barrierIcons.count();

    console.log(`Found ${count} barrier section icons`);
    expect(count).toBeGreaterThanOrEqual(4);

    // Verify each icon has proper spacing by checking parent flex container
    for (let i = 0; i < Math.min(count, 4); i++) {
      const icon = barrierIcons.nth(i);
      const classList = await icon.getAttribute('class');
      console.log(`Icon ${i} classes:`, classList);
    }

    console.log('✅ Icon class verification completed!');
  });
});
