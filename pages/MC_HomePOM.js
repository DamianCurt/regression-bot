const { By, until } = require('selenium-webdriver');
const ChromeDriverUtilities = require('../utilities/ChromeDriverUtilities');
const Config = require('../utilities/Config');
const CountryConfigs = require('../utilities/CountryConfigs');

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

    async navigateHomePageURLs(){
        console.log()
        for(let country in CountryConfigs){
            try {

                if (CountryConfigs.hasOwnProperty(country)) {
                    console.log("-------------------------------------------------------------------");
                    console.log(CountryConfigs[country].urlHomePage);
                    await this.driver.get(CountryConfigs[country].urlHomePage);
                    const webElement = await this.driver.wait(until.elementLocated(By.css('html')), 15000);
                    const langAttributeValue = await webElement.getAttribute('lang');
                    const currentUrlValue = await this.driver.getCurrentUrl();
                    console.log("-------------------------------------------------------------------");
                    console.log(`Navegando la pagina ${CountryConfigs[country].urlHomePage}`);
                    console.log(`El lang de la pagina es ${langAttributeValue.toString()}`);
                    console.log(`Obtuve pagina actual ${currentUrlValue.toString()}`);
                    console.log(`configLang y actualLang son iguales? ${await this.compareLangs(CountryConfigs[country].lang, langAttributeValue.toString())}`);
                    console.log(`configCountry y actualCountry son iguales? ${await this.compareLangs(CountryConfigs[country].urlHomePage, currentUrlValue.toString())}`);
                }
             
                
            } catch (e) {
                console.log(`CAPO, TE DEJO ESTE MENSAJE DE ERROR PA VO! ${e}`);
            }
        }
    }

    async navigateSiteMapURLs(){
        for(let country in CountryConfigs){

        }
    }

    async compareLangs(configLang, actualLang){
        if(configLang.toLowerCase() === actualLang.toLowerCase()){
            return true;
        } else {
            return false;
        }
    }

    async compareCountries(configCountry, actualCountry){
        if(configCountry.toLowerCase() === actualCountry.toLowerCase()){
            return true;
        } else {
            return false;
        }
    }

}

module.exports = MC_HomePOM;