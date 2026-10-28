const{test,expect}=require('@playwright/test')

test('login check',async({browser})=>{
    const context = await browser.newContext();
    const page= await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.getByTitle('Username').type('rahulshettyacademy');
    await page.getByTitle('Password').type('Learning@830$3mK2');
    await page.getByRole('combobox').selectOption('Student');
    await page.getByRole('checkbox').check();
    await page.getByRole('button',{name:'submit'}).click();
    await page.pause();
    
    
})  