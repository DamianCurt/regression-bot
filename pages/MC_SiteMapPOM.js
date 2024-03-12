const { By, until } = require('selenium-webdriver');
const ChromeDriverUtilities = require('../utilities/ChromeDriverUtilities');
const Config = require('../utilities/Config');
const CountryConfigs = require('../utilities/CountryConfigs.json');

class MC_SiteMapPOM {

    constructor(driver){
        this.driver = driver;
    }

    async testLangFromSiteMapURLs(){
        for (let countryConfig of CountryConfigs) {
            console.log("-----------------------------------------------------------------------");
            console.log(`Navegando el site map url ${countryConfig.urlSiteMap}`)
            this.driver.get(countryConfig.urlSiteMap);
            const webElement =  await this.driver.wait(until.elementLocated(By.css('html')), 300000);
            const langAttributeValue = await webElement.getAttribute('lang');
            const currentUrlValue =  await this.driver.getCurrentUrl();
            console.log("-----------------------------------------------------------------------");
            console.log(`El lang de la pagina es ${langAttributeValue}`);
            console.log(`Obtuve pagina actual ${currentUrlValue}`);
            console.log(`configLang y actualLang son iguales? ${countryConfig.lang.toLowerCase() === langAttributeValue.toLowerCase()}`);
            console.log(`configCountry y actualCountry son iguales? ${countryConfig.urlSiteMap.toLowerCase() === currentUrlValue.toLowerCase()}`);
            console.log(`LANG is included in any part of the current URL ${currentUrlValue.toLowerCase().includes(langAttributeValue.toLowerCase())}`);
        };
    }

    // TODO: method to navigate all the urls on the body of the sitemap
    async testLangFromAllBodyUrlsFromGivenSiteMap(){
        // selector is .site-map .column-wrapper a
        for (let countryConfig of CountryConfigs) {
            console.log("-----------------------------------------------------------------------");
            console.log(`3) Navegando el Body del site map url ${countryConfig.urlSiteMap}`)
            this.driver.get(countryConfig.urlSiteMap);
            console.log("-----------------------------------------------------------------------");
            const siteMapBodyLinkElements =  await this.driver.wait(until.elementsLocated(By.css('.site-map .column-wrapper a')), 300000);
            for(let link of siteMapBodyLinkElements){
                this.driver.get(link.getAttribute('href'));
                const webElement =  await this.driver.wait(until.elementLocated(By.css('html')), 15000);
                const langAttributeValue = await webElement.getAttribute('lang');
                const currentUrlValue =  await this.driver.getCurrentUrl();
                console.log(`El lang de la pagina es ${langAttributeValue}`);
                console.log(`Obtuve pagina actual ${currentUrlValue}`);
                console.log(`LANG is included in any part of the current URL ${currentUrlValue.toLowerCase().includes(langAttributeValue.toLowerCase())}`);
            }
        }
    }

}

module.exports = MC_SiteMapPOM;