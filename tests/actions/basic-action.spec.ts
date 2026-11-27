import { test } from '@playwright/test'

test.describe("basic action", async () => {
    test("check", async ({ page }) => {
        await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");
        // Radio check
        await page.locator("//input[@id='female']").check();
        // Check box
        await page.locator("//input[@id='reading']").check();
        await page.locator("//input[@id='traveling']").check();

        const isChecked = await page.locator("//input[@id='traveling']").isChecked();
        console.log(isChecked)
    });
    test("select", async ({ page }) => {
        await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");
        await page.locator("//select[@id='country']").selectOption("Canada");
        await page.locator("//select[@id='interests']").selectOption(["Art", "Music"]);
    });
    test("date", async ({ page }) => {
        await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");
        await page.locator("//input[@id='username']").fill("Pham Khanh Ly");
        await page.locator("//input[@id='email']").fill("lypkhanhpham127@gmail.com");
        await page.locator("//input[@id='dob']").fill("2026-11-30");
        await page.locator("//input[@id='rating']").fill("3");
        await page.locator("//input[@id='favcolor']").fill("#82c98a");
        await page.locator("//button[@type='submit']").click();
    });
    test("file, hover", async ({ page }) => {
        await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");
        await page.locator("//input[@id='profile']").setInputFiles("tests/docs/test.txt");
        await page.locator("//div[@class='tooltip']").hover();
    })
})