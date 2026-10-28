const {test, expect} = require('@playwright/test')
const { log } = require('node:console')

test("udamy first automation script", async ({page}) => {
    const username = await page.locator('#userEmail')
    const password = await page.locator('#userPassword')
    const login = await page.locator('[name="login"]')
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    
    //valid password check
    await username.fill("bm.tousif219@gmail.com")
    await password.fill("Testing@1")
    await login.click()

    //Read single product title
  //  const productTitle = await page.locator(".card-body b").first().textContent() 
   // console.log("product title is " + productTitle)
    
    //Read multiple product titles
   await page.waitForLoadState('networkidle')
    const productTitles = await page.locator(".card-body b").allTextContents()
    console.log(productTitles)

    //logout successful check
    await page.getByText('Sign Out').click()    
    expect(page.url()).toBe("https://rahulshettyacademy.com/client/#/auth/login")
    console.log("Login logout functionality verified successfully");
    
})