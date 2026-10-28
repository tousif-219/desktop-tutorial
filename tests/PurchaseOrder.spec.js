const {test, expect} = require('@playwright/test')

test("udamy first automation script", async ({page}) => {
    const username = page.locator('#userEmail');
    const password = page.locator('#userPassword');
    const login = page.locator('[name="login"]');
    const products = page.locator(".card-body");
    const productName =  "ZARA COAT 3"
    const email="bm.tousif219@gmail.com"
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    
    //valid password check
    await username.fill(email)
    await password.fill("Testing@1")
    await login.click()
    
    //Read multiple product titles
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
   
    const productTitles = await products.locator("b").allTextContents()
    console.log(productTitles)
    const counts = productTitles.length
    console.log(counts);

    //Selecting specific product and add to cart
        for(let i=0; i<counts; i++){
            if(await products.nth(i).locator("b").textContent() === productName){
                await products.nth(i).locator("text= Add To Cart").click()
                break;
            }
        }
    
    await page.locator("[routerlink*='cart']").click();

    //Select the added product and click on buy now
    await page.locator(".cartSection h3").waitFor();
    
    const ProdExist = await page.locator("h3:has-text(productName).isVisible()")
    expect(ProdExist).toBeTruthy();
    await page.getByText("Buy Now").first().click();


    //Payment Method
    const paymentpage = await page.locator(".payment").isVisible();
    expect(paymentpage).toBeTruthy();

    await expect(page.locator(".user__name [type='text']").first()).toHaveText(email)
    await page.getByPlaceholder("Select Country").pressSequentially("Ind", {delay:150})

    const countrySelection=await page.locator(".ta-results");
    await countrySelection.waitFor();
    const count =await countrySelection.locator("button").count();
    for(let i=0; i<count; i++){
        if(await countrySelection.locator("button").nth(i).textContent() === " India")
            {
                await countrySelection.locator("button").nth(i).click();
                break;
            }
        }


    page.locator(".action__submit").click();

    //Order Confirmation
    await page.locator(".order-summary").waitFor();
    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
    const confirmationMsg = await page.locator(".hero-primary").textContent();
    console.log(confirmationMsg);
    const orderID = (await page.locator(".em-spacer-1 .ng-star-inserted").textContent()).trim().replace(/[|\s]/g, '');
    console.log(orderID);

    //order History 
    await page.getByRole('button', { name: 'ORDERS' }).click();
    await expect(page.locator(".table")).toBeVisible();
   
    
    const OrderIDlist=await page.locator("tbody th").allTextContents();
    const ordcount = await OrderIDlist.length;
    for(let i=0; i<ordcount; i++){
        if(OrderIDlist[i].includes(orderID)){
            await page.locator('button').filter({ hasText: 'View' }).nth(i).click();
            console.log("Order number is = " + OrderIDlist[i]);
            break;
        
        }
            
    }
})
       