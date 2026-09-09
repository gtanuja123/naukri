import { test } from '@playwright/test'
import { text } from 'node:stream/consumers'
import path from "node:path"

test("naukri", async ({ page }) => {
//   await page.goto('https://www.naukri.com/nlogin/login')
//   //await page.waitForTimeout(2000)
//   // Wait for the URL network to fully settle before checking elements
//   //await page.waitForLoadState('networkidle');

//   // Wait up to 10 seconds explicitly for the element, providing a clearer error
//   //await page.locator('#usernameField').waitFor({ state: 'visible', timeout: 10000 });

//   await page.locator('#usernameField').fill("tanuja.girish5@gmail.com");
// Use a realistic user agent and window size to prevent bot blocking
  await page.setExtraHTTPHeaders({
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
  });
  await page.setViewportSize({ width: 1280, height: 720 });

  await page.goto('https://www.naukri.com/nlogin/login');
  
  // Use a more dynamic, modern locator approach
  // const usernameInput = page.getByPlaceholder('Enter your active Email ID / Username');
  // await usernameInput.waitFor({ state: 'visible', timeout: 15000 });
  await page.waitForTimeout(2000)
 await page.locator('#usernameField').fill("tanuja.girish5@gmail.com");
 await page.locator('#passwordField').fill("Tanu@1234")
  await page.getByRole('button', { type: 'submit' }).nth(2).click()
  //await page.locator("div[class='crossIcon chatBot chatBot-ic-cross']").click()
  await page.locator("img.nI-gNb-icon-img").click()
  await page.locator("a.nI-gNb-info__sub-link").click()
  await page.waitForTimeout(4000)

  await page.locator('#attachCV').first().setInputFiles(path.join(__dirname, "../uploads/Tanuja G_SDET_playwright.pdf"))
  // await page.pause()
  await page.waitForTimeout(4000)
  // 👇 CAPTURE THE SCREENSHOT HERE 👇
  await page.screenshot({ 
    path: 'test-results/login-success-screenshot.png', 
    fullPage: true 
  });
  await page.close()
})

