import {test} from '@playwright/test'
import { text } from 'node:stream/consumers'
import path from "node:path"

test("naukri", async({page})=>
{
    await page.goto('https://www.naukri.com/nlogin/login?srcTemplate=registerfree468x60&utm_source=google&utm_medium=cpc&utm_campaign=Brand_Login_Register&gclsrc=aw.ds&gad_source=1&gad_campaignid=21008292163&gbraid=0AAAAADLp3cEIrD2rEFkMHiOJQpiwDFHLZ&gclid=EAIaIQobChMIh5DCj8jQlgMV7MA8Ah1ZTSNrEAAYASAAEgIkn_D_BwE')
  await page.waitForTimeout(2000)
await page.locator('#usernameField').fill("tanuja.girish5@gmail.com")
await page.locator('#passwordField').fill("Tanu@1234")  
await page.waitForTimeout(2000)
await page.getByRole('button',{type : 'submit'}).nth(2).click()
await page.waitForTimeout(2000)
//await page.locator("div[class='crossIcon chatBot chatBot-ic-cross']").click()
await page.locator("img.nI-gNb-icon-img").click()
await page.locator("a.nI-gNb-info__sub-link").click()
await page.waitForTimeout(7000)

await page.locator('#attachCV').first().setInputFiles(path.join(__dirname,"../uploads/Tanuja G_SDET_playwright.pdf"))
    await page.pause()
})

