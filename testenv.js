const { Builder, By, until } = require('selenium-webdriver');

// Define the class name of the div element containing the URLs
const divClassName = 'content-par.responsivegrid';
const homePage = 'https://www.mastercard.com.mx/es-mx.html';
const sitemapPage = 'https://www.mastercard.com.mx/es-mx/sitemap.html';

// Array to store extracted URLs
let extractedUrls = [];

// Define the function to extract URLs from the div element
async function regressionLangTestallsite() {
    // Create a WebDriver instance
    let driver = await new Builder().forBrowser('chrome').build();

    // Navigate to the webpage containing the div element
    await driver.get(sitemapPage);

    // Wait for the div element to be present
    await driver.wait(until.elementLocated(By.css('.' + divClassName)), 10000);

    // Find the div element by its class name
    let divElement = await driver.findElement(By.css('.' + divClassName));

    // Find all anchor elements (links) within the div
    let linkElements = await divElement.findElements(By.css('a'));

    // Extract and store the URLs from the anchor elements
    for (let i = 0; i < linkElements.length; i++) {
        let url = await linkElements[i].getAttribute('href');
        if (url) {
            console.log('URL:', url);
            extractedUrls.push(url);
        }
    }

    /*// Iterate URLs
    for (let page of extractedUrls) {

        // Navigate to Page
        await driver.get(page);

        // Get page source 
        let pageSource = await driver.getPageSource();

        // Extract lang attribute  
        let language = pageSource.match(/html lang="([\w-]+)"/)[1];

        // Print output 
        console.log(page, "-", language);
    }*/

    // Close the WebDriver instance
    await driver.quit();
}

// Call the function to extract URLs
regressionLangTestallsite().then(() => {
    console.log("All extracted URLs have been printed to the console.");
    console.log("All extracted URLs with constant URLs:", extractedUrls);
}).catch((error) => {
    console.error("Error:", error);
});
