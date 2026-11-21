import { test } from '@playwright/test'

test.describe("Locate test", async () => {
    test("Locate basic", async ({ page }) => {
        await page.goto("https://material.playwrightvn.com/");
        const bai1loc = page.locator('//a[@href="01-xpath-register-page.html');
        const adsLoc = page.locator("//div[@id='ads-here']")
    });
})