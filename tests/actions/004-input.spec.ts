import { test } from '@playwright/test'

test.describe('Input test', async () => {
    test("Test-based", async ({ page }) => {
        await page.goto("https://material.playwrightvn.com/03-input-practice.html");
        const input = page.locator("//input[@id='username']");

        // Normal fill
        await input.fill("Hoctest.com");

        // With option
        await input.fill("Hoctest.com", {
            force: true,
            timeout: 10_000
        });

        await input.press("a", {
            delay: 3_000,
            timeout: 10_000
        });

        await input.pressSequentially("HocTest.com", {
            delay: 300,
            timeout: 10_000
        })
    });
})