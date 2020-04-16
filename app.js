
const puppeteer = require('puppeteer');

async function getPic() {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  await page.goto('http://raboninco.com/HTC8');
  await page.waitFor(12000)
  //await page.screenshot({path: 'google.png'});

  const page1 = await browser.newPage();
  await page1.goto('http://raboninco.com/HTWJ');
  await page1.waitFor(12000)
  //await page1.screenshot({path: 'google.png'});
  await browser.close();
  console.log("ya se termino");
  
}

getPic();