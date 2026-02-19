const { Builder, Browser, By, Key, until } = require('selenium-webdriver')

const iniciarTeste = async () => {
    let driver = await new Builder().forBrowser(Browser.CHROME).build()

    await driver.get("https://http.cat" );
    const urls = await driver.findElements(By.css('li a'));
    console.log (urls.length);
     
    for(var elementos of urls){
        console.log(elementos)
    }
await driver.close();
}

iniciarTeste();