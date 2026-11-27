import { test } from '@playwright/test';

test.describe("Test 3 ", async () => {
    test("Bai 3", async ({ page }) => {
        await test.step("Di den trang Todo page", async () => {
            await page.goto("https://material.playwrightvn.com/03-xpath-todo-list.html");
        })
        await test.step("Thêm 50 todo item có nội dung 'Todo <i>' ", async () => {
            const inputText = await page.locator("//input[@id='new-task']");
            const button = await page.locator("//button[@id='add-task']");
            for (let i = 1; i <= 50; i++) {
                await inputText.fill(`to do ${i}`);
                await button.click();
            }
        })
        await test.step("Xóa các todo có số lẻ", async () => {
            page.on('dialog', async (dialog) => {
                await dialog.accept();
            })
            for (let i = 1; i <= 50; i++) {
                if (i % 2 !== 0) {
                    await page.locator(`//button[@id="to-do-${i}-delete"]`).click();
                }
            }
        });
    })
})
