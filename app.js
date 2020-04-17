
const puppeteer = require('puppeteer');

async function getPic() {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  //adfly
  await page.goto('http://raboninco.com/HTC8');
  await page.waitFor(12000)
  await page.close()

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

  //shorte.st
  const page6 = await browser.newPage();
  await page6.goto('http://gestyy.com/w9HlSE');
  await page6.waitFor(12000)
  await page6.close()

  const page7 = await browser.newPage();
  await page7.goto('http://gestyy.com/w9HlDc');
  await page7.waitFor(10000)
  await page7.close()

  const page8 = await browser.newPage();
  await page8.goto('http://gestyy.com/w9HlF3');
  await page8.waitFor(10000)
  await page8.close()

  const page9 = await browser.newPage();
  await page9.goto('http://gestyy.com/w9HlG6');
  await page9.waitFor(10000)
  await page9.close()

  const page10 = await browser.newPage();
  await page10.goto('http://gestyy.com/w9HlH9');
  await page10.waitFor(10000)


  //await page1.screenshot({path: 'google.png'});
  await browser.close();
  console.log("ya se termino");
  
}


getPic();
