const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

// describe viene a ser como una suite de test cases
describe('Sample Test Suite', function() {
    let driver;

    // esto es lo que se llama hook, se va a correr antes de cada it
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    // todo lo que esta dentro del bloque 'it' es un test case dentro de una suite 
    it('should open Google', async function() {
        await driver.get('https://www.google.com');
        const title = await driver.getTitle();
        assert.strictEqual(title, 'Google');
    });

    it('should search for "Selenium"', async function() {
        await driver.findElement(By.name('q')).sendKeys('Selenium', Key.RETURN);
        await driver.wait(until.titleContains('Selenium'), 5000);
        const title = await driver.getTitle();
        assert.strictEqual(title, 'Selenium - Buscar con Google');
    });

    // esto tambien es lo que se llama hook, este se corre despues de cada it
    after(async function() {
        await driver.quit();
    });
});
