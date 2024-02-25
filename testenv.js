const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");
async function test() {

  let driver = await new Builder().forBrowser('chrome').build();

  // Home page lang test 
  await driver.get('https://www.mastercard.com.mx/es-mx.html');
  let homePageSource = await driver.getPageSource();
  let homeLang = homePageSource.match(/html lang="([\w-]+)"/)[1];
  console.log('Home Page:', homeLang);

  // Sitemap page lang test
  await driver.get('https://www.mastercard.com.mx/es-mx/sitemap.html');
  let sitemapPageSource = await driver.getPageSource();
  let sitemapLang = sitemapPageSource.match(/html lang="([\w-]+)"/)[1];
  console.log('Sitemap Page:', sitemapLang);

  // Sitemap URLs
  await driver.get("https://www.mastercard.com.mx/es-mx/sitemap.html");

  // Get page source 
  const pageSource = await driver.getPageSource();

  // Extract content-par element 
  const contentPar = pageSource.match(/<div class="content-par responsivegrid">([\s\S]*)<\/div>/)[1];

  // Get all URLs inside it
  const urlRegex = /<a[^>]*href="([^"]+)"/g;
  const urls = [];
  let match;
  while (match = urlRegex.exec(contentPar)) {
    urls.push(match[1]);
  }

  // Print extracted URLs
  console.log(urls);


  await driver.quit();

}

test();