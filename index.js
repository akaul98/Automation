import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: false,
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 768 });
  await page.goto("https://atidantechnologies.keka.com");
  await Promise.all([
    await page.click(
      "body > div > div.login-content.d-flex.flex-column.justify-content-between.overflow-auto.bg-primary > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(2)> button .login-button bg-hover-btn"
    ),
  ]);
  //await page.screenshot({ path: "example.png" });

  //await browser.close();
})();
