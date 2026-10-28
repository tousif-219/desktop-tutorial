const {test,expect}=require ('@playwright/test')
test('Verify Calander selection',async function({page}){
    const month='11'
    const date='20'
    const year='2026'
    const expectedDate=[month,date,year];
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers');
    //Selection of date from calander
    await page.locator('.react-date-picker__calendar-button__icon').click();
    await page.locator('.react-calendar__navigation__label').click();
    await page.locator('.react-calendar__navigation__label').click();
    await page.getByText(year).click();

    await page.locator('.react-calendar__tile').nth(Number(month)-1).click();
    await page.locator(`//abbr[text()='${date}']`).click();  

    //Verification of selected date
    const selectedDateInputs = page.locator('.react-date-picker__inputGroup__input');

    for(let i=0; i<expectedDate.length; i++){
        const value = await selectedDateInputs.nth(i).inputValue();
        expect(value).toBe(expectedDate[i]);
    }   

    await page.pause();
    
})
