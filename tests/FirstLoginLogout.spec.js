const {test, expect} = require('@playwright/test')
const { log } = require('node:console')

test("udamy first automation script", async ({page}) => {
    const username = await page.locator('#userEmail')
    const password = await page.locator('#userPassword')
    const login = await page.locator('[name="login"]')
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    await username.type("bm.tousif219@gmail.com")
     //invalid password check
    await password.fill("testing@11")
    await login.click()
    const errormsg = await page.getByLabel('Incorrect email or password.').textContent()
    console.log("error message is " + errormsg)
    await page.waitForTimeout(5000)

    //valid password check
    await username.fill("")
    await username.fill("bm.tousif219@gmail.com")
    await password.fill("Testing@1")
    await login.click()

    //Validate Home page    
      const homeText = await page.getByRole('button', { name: 'HOME' }).textContent()
      expect(homeText).toContain("HOME")

    //logout successful check
    await page.getByText('Sign Out').click()    
    expect(page.url()).toBe("https://rahulshettyacademy.com/client/#/auth/login")
    console.log("Login logout functionality verified successfully");
    
})