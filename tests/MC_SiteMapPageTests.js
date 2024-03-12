const ChromeDriverUtilities = require('../utilities/ChromeDriverUtilities');
const MC_SiteMapPOM = require('../pages/MC_SiteMapPOM');
const assert = require('assert');

const Config = require('../utilities/Config');

describe('MC Site Map TESTS', function () {

    this.timeout(30000);
    let driver;
    let siteMapPageObjectModel;

    before(async function () {
        driver = ChromeDriverUtilities.getDriver();
        siteMapPageObjectModel = new MC_SiteMapPOM(driver);
    });

    it('Navigates to all body the Site Map URLs', async function (){
        await siteMapPageObjectModel.navigateSiteMapURLs();
        
    });

    after(async function () {
        await driver.quit();
    });

});