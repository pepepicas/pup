
const puppeteer = require('puppeteer');

async function getPic() {
  const browser = await puppeteer.launch({ args: ['--no-sandbox']});
  const page = await browser.newPage();
  await page.goto('http://raboninco.com/HTC8');
  await page.waitFor(12000)
  await page.close()
  //await page.screenshot({path: 'google.png'});

  const page2 = await browser.newPage();
  await page2.goto('http://raboninco.com/HTWJ');
  await page2.waitFor(10000)
  await page2.close()

  const page3 = await browser.newPage();
  await page3.goto('http://raboninco.com/HUcj');
  await page3.waitFor(10000)
  await page3.close()

  const page4 = await browser.newPage();
  await page4.goto('http://raboninco.com/HUdp');
  await page4.waitFor(10000)
  await page4.close()

  const page5 = await browser.newPage();
  await page5.goto('http://raboninco.com/HUjq');
  await page5.waitFor(10000)

  //await page1.screenshot({path: 'google.png'});
  await browser.close();
  console.log("ya se termino");
  
}


getPic();
