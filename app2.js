const puppeteer = require("puppeteer");
const fs = require("fs");

let links = fs.readFileSync("links.txt", "utf-8");
links = links.split(/\s+/);


async function view() {
  const browser = await puppeteer.launch({ headless: false });

  for (let i = 0; i < links.length; i++) {
    const page = await browser.newPage();
    await page.goto(links[i]);
    console.log(`pagina actual: ${links[i]}`);
    await page.waitFor(15000);
    await page.close();
  }
 
  await browser.close();
  console.log("ya se termino");
}

view();


