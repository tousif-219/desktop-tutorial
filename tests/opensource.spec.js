const {test,expect}=require("@playwright/test")

test("Verify login/logout functionality of openSource",async function ({page}) {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByPlaceholder("Username").fill("Admin",{delay:500})
    await page.locator('[name="password"]').fill("admin123",{delay:500})
    await page.locator('button[type="submit"]').click()

   await expect(page.url()).toMatch(/dashboard/)
   await page.waitForTimeout(5000)

    await page.getByAltText("profile picture").first().click()
    await page.getByText("Logout").click()
   await expect(page.url()).toMatch(/login/)
   await page.waitForTimeout(5000)
})