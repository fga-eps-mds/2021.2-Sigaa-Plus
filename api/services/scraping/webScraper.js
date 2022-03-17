const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.sig.unb.br/sigaa/public/home.jsf');
  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();