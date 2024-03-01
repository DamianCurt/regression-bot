const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

const Config = require('../utilities/Config');

// describe viene a ser como una suite de test cases
describe('Sample Test Suite', function() {
    let driver;

    // esto es lo que se llama hook, se va a correr antes de cada it
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    // todo lo que esta dentro del bloque 'it' es un test case dentro de una suite 
    it('Should open MC home page', async function() {
        await driver.get('https://www.mastercard.com.mx/es-mx.html');
        const title = await driver.getTitle();
        assert.strictEqual(title, 'Mastercard - Una empresa tecnológica global en la industria de pagos');
    });

    it('should search for "BIENVENIDO A MASTERCARD"', async function() {
        const webElement = await driver.wait(until.elementLocated(By.className('dxp-title-eyebrow')), 10000);
        const bienvenida = await webElement.getText();
        assert.strictEqual(bienvenida, 'BIENVENIDO A MASTERCARD');
    });

    // esto tambien es lo que se llama hook, este se corre despues de cada it
    after(async function() {
        await driver.quit();
    });
});
