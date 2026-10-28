const {test,expect}=require ('@playwright/test')
const { title } = require('node:process')
test('Verify title of google',async function({page}){
    await page.goto('https://google.com')
    const url=await page.url()
    console.log("google url is "+url)  
   await expect(page).toHaveTitle("Google")   
})