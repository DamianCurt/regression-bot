const { Builder } = require('selenium-webdriver');

class ChromeDriverUtilities {
    
    static getDriver() {
        return new Builder().forBrowser('chrome').build();
    }
    
}

module.exports = ChromeDriverUtilities;