const { By, until } = require('selenium-webdriver');
const ChromeDriverUtilities = require('../utilities/ChromeDriverUtilities');
const Config = require('../utilities/Config');

class MC_HomePOM {

    constructor(driver){
        this.driver = driver;
        this.url = Config.HomePageUrl;
    }

    async navigateTo(){
        await this.driver.get(this.url);
    }

    async getHomePageTitle(){
        return await this.driver.getTitle();
    }

    async acceptCookies(){
        console.log("accepting mc cookies");
        let acceptCookiesModalButton = await this.driver.wait(until.elementLocated(By.css('#onetrust-accept-btn-handler')), 5000);
        acceptCookiesModalButton.click();
    }

    async getHomePageWelcomeMessage(){
        // ToDo: investigar para cambiar el selector... yo estaba intentando con p .dxp-title-eyebrow .dxp-font-size-sm y no funcionaba... pegue el selector copiado y va
        const webElement = await this.driver.wait(until.elementLocated(By.css('#content > div > div:nth-child(1) > div > dxp-banner > div > dxp-video-banner > div > div > div.overlay-content > div.text-container.overlay-content-animation > p')), 5000);
        console.log(`getting home page welcome message`);
        return webElement.getText();
    }

}

module.exports = MC_HomePOM;