const { Builder, Browser, By, until, Actions } = require('selenium-webdriver');

const iniciarTeste = async () => {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get('https://http.cat/');

    await driver.wait(until.elementLocated(By.css("img.contrast-[70%]")), 5000);
    const imagem = await driver.findElement(By.css("img.contrast-[70%]"));

    // Mover até a imagem e clicar
    const actions = driver.actions({ bridge: true });
    await actions.move({ origin: imagem }).click().perform();

   
}

iniciarTeste();