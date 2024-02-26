const {Builder, By, until} = require('selenium-webdriver');

// Define the class name of the div element containing the URLs
const divClassName = 'content-par.responsivegrid';

// Array to store extracted URLs
let extractedUrls = [];

// Define the function to extract URLs from the div element
async function extractUrls() {
    // Create a WebDriver instance
    let driver = await new Builder().forBrowser('chrome').build();
    
        // Navigate to the webpage containing the div element
        await driver.get('https://www.mastercard.com.mx/es-mx/sitemap.html');
        
        // Wait for the div element to be present
        let elementClass = await driver.wait(until.elementLocated(By.css('.' + divClassName)), 30000);
        console.log(elementClass);

        // Find the div element by its class name
        let divElement = await driver.findElement(By.css('.' + divClassName));
        console.log(divElement);
        
        // Find all anchor elements (links) within the div
        let linkElements = await divElement.findElements(By.css('a'));
        console.log(linkElements)
        
        // Extract and store the URLs from the anchor elements
        for (let i = 0; i < linkElements.length; i++) {
            let url = await linkElements[i].getAttribute('href');
            if (url) {
                console.log('URL:', url);
                extractedUrls.push(url);
            }
        }
    
        // Close the WebDriver instance
        await driver.quit();
    
}

// Call the function to extract URLs
extractUrls().then(() => {
    console.log("All extracted URLs have been printed to the console.");
    console.log("All URLs in the array:", extractedUrls);
}).catch((error) => {
    console.error("Error:", error);
});
