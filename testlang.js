const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");
async function langTest() {

    // List of Urls 
    const urls = [
      "https://www.mastercard.com.mx/es-mx/sitemap.html", 
      "https://www.mastercard.com.mx/es-mx/consumidores/encontrar-una-tarjeta.html",
      "https://www.mastercard.com.mx/es-mx/consumidores/encontrar-una-tarjeta/tarjetas-de-credito.html"
      // more URLs
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
   
    }
  
    await driver.quit();
  
  }
  
  langTest();