const { Builder, Browser, By, Key, until } = require('selenium-webdriver')

const iniciarTeste = async () => {
    let driver = await new Builder().forBrowser(Browser.CHROME).build()

    await driver.get('https://google.com');

    const input = await driver.findElement(By.css("textarea"));
    await input.sendKeys("goku");
await input.sendKeys(Key.RETURN);


await driver.close();
}

iniciarTeste();