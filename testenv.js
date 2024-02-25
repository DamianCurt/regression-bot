// Import the necessary Selenium WebDriver modules
const {Builder, By, Key, until} = require('selenium-webdriver');

// Define the class name of the div element containing the URLs
const divClassName = 'content-par.responsivegrid';

// Define the function to extract URLs from the div element
async function extractUrls() {
    // Create a WebDriver instance
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Navigate to the webpage containing the div element
        await driver.get('https://www.mastercard.com.mx/es-mx/sitemap.html');
        
        // Wait for the div element to be present
        await driver.wait(until.elementLocated(By.css('.' + divClassName)), 10000);
        
        // Find the div element by its class name
        let divElement = await driver.findElement(By.css('.' + divClassName));
        
        // Find all anchor elements (links) within the div
        let linkElements = await divElement.findElements(By.css('a'));
        
        // Extract and log the URLs from the anchor elements
        for (let i = 0; i < linkElements.length; i++) {
            let url = await linkElements[i].getAttribute('href');
            if (url) {
                console.log('URL:', url);
            }
        }
    } finally {
        // Close the WebDriver instance
        await driver.quit();
    }
}

// Call the function to extract URLs
extractUrls();
