import { test } from '@playwright/test'

test.describe('Test 2', async () => {
    test("Bài 2", async ({ page }) => {
        await page.goto("https://material.playwrightvn.com/02-xpath-product-page.html");
        const sp1 = page.locator("//button[@data-product-id='1']");
        await sp1.dblclick();
        const sp2 = page.locator("//button[@data-product-id='2']");
        await sp2.click({ clickCount: 3 });
        const sp3 = page.locator("//button[@data-product-id='3']");
        await sp3.click();
    })
})