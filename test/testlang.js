const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");
async function langTest() {
  // List of Urls
  const urls = [
    "https://www.mastercard.com.mx/es-mx/vision/quienes-somos/empleos.html",
    "https://www.mastercard.com.mx/es-mx/vision/quienes-somos/diversidad-inclusion.html",
    "https://www.mastercard.com.mx/es-mx/vision/quienes-somos/diversidad-proveedores.html",
    "https://www.mastercard.com.mx/es-mx/vision/quienes-somos/ubicaciones-globales.html",
  ];

  //esta lista no esta usada
  let urlsBodySitemap = [];

  // Launch browser
  let driver = await new Builder().forBrowser("chrome").build();

  // Iterate URLs
  for (let i = 0; i < urls.length; i++) {
    let url = urls[i];
    // Navigate to Page
    await driver.get(url);

    // Get page source
    let pageSource = await driver.getPageSource();

    // Extract lang attribute
    let language = pageSource.match(/html lang="([\w-]+)"/)[1];

    // Print output with list number
    console.log(`${i + 1}) ${url} - ${language}`);
  }

  await driver.quit();
}

langTest();
