import {test} from '@playwright/test'

// test("naukri",async({browser})=>
// {
//  const browser=await browser.newContext()
//  const page=await browser.newPage()
//  (await page).goto("https://www.irctc.co.in/nget/train-search")
// })


test("contextmethods", async({browser})=>

{   let context=await browser.newContext()
    let page= await context.newPage()
    await page.goto("https://www.flipkart.com/")
    let cookies=await context.cookies()
    let page1=await context.newPage()
    await page1.goto("https://www.google.in/")
    let cookiee = await context.cookies()
    console.log(cookiee);
    console.log(cookiee.length);
}
)

test("browsercontext", async({browser})=>
{
    
})