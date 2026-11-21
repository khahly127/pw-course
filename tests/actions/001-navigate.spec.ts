import { test } from '@playwright/test'

test.describe('Navigate test', async () => {
    test("Navigate basic", async ({ page }) => {
        await page.goto("https://tailieu.hoctest.com/")
    });
    test("Navigate with option - referer", async ({ page }) => {
        await page.goto("https://tailieu.hoctest.com/", {
            referer: "https://playwrightvn.com"
        })
    });
    test("Navigate with option - timeout", async ({ page }) => {
        await page.goto("https://tailieu.hoctest.com/", {
            timeout: 1_000
        })
    });
    test("navigate with option - waitUntil", async ({ page }) => {
        await page.goto("https://tailieu.hoctest.com", {
            waitUntil: "commit"
        })
    });
})