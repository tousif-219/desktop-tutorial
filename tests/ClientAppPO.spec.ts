 import {test, expect, Locator} from '@playwright/test';
 import {POManager} from '../pageobjects/POManager';

 test('Client App login', async ({page:page})=>
 {
   const poManager = new POManager(page);
    //js file- Login js, DashboardPage
     const username: string = "anshika@gmail.com";
     const password: string = "Iamking@000"
     const productName: string = 'Zara Coat 4';
     const products: Locator = page.locator(".card-body");
     const loginPage: any  = poManager.getLoginPage();
     await loginPage.goTo();
     await loginPage.validLogin(username,password);
     const dashboardPage: any = poManager.getDashboardPage();
     await dashboardPage.searchProductAddCart(productName);
     await dashboardPage.navigateToCart();

    const cartPage: any = poManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(productName);
    await cartPage.Checkout();

    const ordersReviewPage: any = poManager.getOrdersReviewPage();
    await ordersReviewPage.searchCountryAndSelect("ind","India");
    const orderId: any = await ordersReviewPage.SubmitAndGetOrderId();
   console.log(orderId);
   await dashboardPage.navigateToOrders();
   const ordersHistoryPage: any = poManager.getOrdersHistoryPage();
   await ordersHistoryPage.searchOrderAndSelect(orderId);
   expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();














  


    


    //Zara Coat 4





    









 });
 

 



 

