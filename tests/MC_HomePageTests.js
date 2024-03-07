const ChromeDriverUtilities = require('../utilities/ChromeDriverUtilities');
const MC_HomePOM = require('../pages/MC_HomePOM');
const assert = require('assert');

const Config = require('../utilities/Config');

describe('MC ', function (){

    this.timeout(30000);
    let driver;
    let homePageObjectModel;

    before(async function () {
        driver = ChromeDriverUtilities.getDriver();
        homePageObjectModel = new MC_HomePOM(driver);
        await homePageObjectModel.navigateTo();
    });

    it('El home page title deberia ser ' + Config.HomePageTitle, async function () {
        await homePageObjectModel.acceptCookies();
        const homePageTitle = await homePageObjectModel.getHomePageTitle();
        assert.strictEqual(homePageTitle, Config.HomePageTitle);
    });

    it('El welcome message deberia ser ' + Config.HomePageWelcomeMessage, async () => {
        const welcomeMessage = await homePageObjectModel.getHomePageWelcomeMessage();
        assert.strictEqual(welcomeMessage, Config.HomePageWelcomeMessage);
    });

    it('Viendo que onda con este test ', async function () {
        await homePageObjectModel.acceptCookies();
        await homePageObjectModel.navigateHomePageURLs();
    });

    after(async function () {
        await driver.quit();
    });

});