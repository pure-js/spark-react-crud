import { test, expect } from '@playwright/test';

test('has an add product button', async ({ page }) => {
  await page.goto('/');

  const addBtn = page.getByTestId('add-product-btn');
  addBtn.click();
  // Expect a title "to contain" a substring.
  await expect(page).toHaveURL(/.*add/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole('heading', { name: 'Installation' }),
  ).toBeVisible();
});
