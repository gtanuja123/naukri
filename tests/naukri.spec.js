import { test } from '@playwright/test'
// import { text } from 'node:stream/consumers'
// import path from "node:path"

// test("naukri", async ({ page }) => {
//   await page.goto('https://www.naukri.com/nlogin/login')
//   //await page.waitForTimeout(2000)
//   // Wait for the URL network to fully settle before checking elements
//   await page.waitForLoadState('networkidle');

//   // Wait up to 10 seconds explicitly for the element, providing a clearer error
//   //await page.locator('#usernameField').waitFor({ state: 'visible', timeout: 10000 });

//   await page.locator('#usernameField').fill("tanuja.girish5@gmail.com");
//   await page.locator('#passwordField').fill("Tanu@1234")
//   await page.waitForTimeout(2000)
//   await page.getByRole('button', { type: 'submit' }).nth(2).click()
//   await page.waitForTimeout(2000)
//   //await page.locator("div[class='crossIcon chatBot chatBot-ic-cross']").click()
//   await page.locator("img.nI-gNb-icon-img").click()
//   await page.locator("a.nI-gNb-info__sub-link").click()
//   await page.waitForTimeout(7000)

//   await page.locator('#attachCV').first().setInputFiles(path.join(__dirname, "../uploads/Tanuja G_SDET_playwright.pdf"))
//   await page.pause()
// })



//const { chromium } = require('playwright-extra');
const stealth = require('puppeteer-extra-plugin-stealth')();
chromium.use(stealth);

(async () => {
  const browser = await chromium.launch({ headless: true }); // Can try headless: false if blocked
  const page = await browser.newPage();
  await page.goto('https://naukri.com');
  // Your code here
  await browser.close();
})();