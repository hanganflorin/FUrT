const {Builder, By, Key, until} = require('selenium-webdriver');
const {Actions} = require('selenium-webdriver/lib/input');
 
(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://www.easports.com/fifa/ultimate-team/web-app/#');

    let xLoginButton = By.xpath('//button[text()="Login"]');

    await driver.wait(until.elementLocated(xLoginButton));

    let eLoginButton = await driver.findElement(xLoginButton);

    const actions = driver.actions();
    const mouse = actions.mouse();
    console.log("MOUSE: ", mouse);

    mouse.move({origin: eLoginButton});

    actions.pause(mouse).move({origin: eLoginButton}).press().release();
    actions.perform();

    // setTimeout(() => {}, 2000);

    // await eLoginButton.click();

    console.log("ELOGINBTN: ", eLoginButton);

    // driver.wait(() => until.elementLocated());
    // await driver.findElement(By.xpath('//button[text()="Login"]')).click();
    // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
})();