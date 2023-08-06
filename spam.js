
const puppeteer = require("puppeteer");
async function scrape(url)
{
    const browser = await puppeteer.launch({headless: false});
     const page = await browser.newPage();
     await page.goto(url);
    
     await page.waitForSelector('#pane-side > div > div > div > div:nth-child(11) > div > div > div._3OvU8 > div._3vPI2 > div.zoWT4 > span',{timeout:100000 });
     const target = await page.$('#pane-side > div > div > div > div:nth-child(11) > div > div > div._3OvU8 > div._3vPI2 > div.zoWT4 > span');
     
     await target.click();
     const inp = await page.$("#main > footer > div._2BU3P.tm2tP.copyable-area > div > span:nth-child(2) > div > div._2lMWa > div.p3_M1 > div > div._13NKt.copyable-text.selectable-text");
     for (let i = 0; i<500; i++)
     {await inp.type(" Hi");
      await page.keyboard.press("Enter");
    }
     
}

scrape ("https://web.whatsapp.com");


