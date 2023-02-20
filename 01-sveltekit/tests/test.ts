import { expect, test } from '@playwright/test';

test('signup page has expected h1', async ({ page }) => {
	await page.goto('/signup');
	await page.screenshot({ path: "./picture.png" });
	await expect(page.getByRole('heading', { name: 'サインアップ' })).toBeVisible();
});
