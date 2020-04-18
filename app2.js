const puppeteer = require("puppeteer");
const fs = require("fs");
const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'));

let links = fs.readFileSync("links.txt", "utf-8");
links = links.split(/\s+/);

async function view() {
  const browser = await puppeteer.launch({args: ['--no-sandbox']});

  for (let i = 0; i < links.length; i++) {
    const page = await browser.newPage();
    await page.goto(links[i]);
    console.log(`pagina actual: ${links[i]}`);
    await page.screenshot({path: `${__dirname}/public/${i}.jpg`})
    await page.waitFor(15000);
    await page.close();
  }
 
  await browser.close();
  console.log("ya se termino");
}

app.listen(3000, () => {
  console.log('server up in port 3000');
})
view();


