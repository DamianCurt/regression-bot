const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");
async function langTest() {

  // List of Urls 
  const urls = [
    "https://www.mastercard.com.mx/es-mx.html",
    "https://www.mastercard.com.mx/es-mx/sitemap.html",
  ];

  //esta lista no esta usada
  let urlsBodySitemap = [
  ];

  // Launch browser
  let driver = await new Builder().forBrowser("chrome").build();

  // Iterate URLs
  for (let url of urls) {

    // Navigate to Page
    await driver.get(url);

    // Get page source 
    let pageSource = await driver.getPageSource();

    // Extract lang attribute  
    let language = pageSource.match(/html lang="([\w-]+)"/)[1];

    // Print output 
    console.log(url, "-", language);

    
    if (url === "https://www.mastercard.com.mx/es-mx/sitemap.html") {
      for (let i = 0; i < driver.findElements(By.css('.site-map .column-wrapper a')).length; i++) {
        console.log(driver.findElements(By.css('.site-map .column-wrapper a'))[i].innerHTML);
      }
    }
  }

  await driver.quit();

}

langTest();