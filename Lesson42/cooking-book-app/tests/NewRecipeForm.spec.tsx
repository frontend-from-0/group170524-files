import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/recipes/new');
  await page.getByTestId('submit-btn').click();
  const recipeNameError = await page.getByText('Recipe name should be at');
  expect(recipeNameError).toBeVisible();

  const instructionsError = await page.getByText('The instructions should be at');
  expect(instructionsError).toBeVisible();

  const urlError = await page.getByText('Please enter a valid url.');
  expect(urlError).toBeVisible();
});