const { test, expect } = require('@playwright/test')

test(`Has "Amy's Blog" in the title`, async ({ page }) => {
	await page.goto('/')

	await expect(page).toHaveTitle(/Amy's Blog/)
})
