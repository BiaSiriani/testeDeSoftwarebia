const { Builder, Browser, By, Key, until } = require('selenium-webdriver')

const iniciarTeste = async () => {
    let driver = await new Builder().forBrowser(Browser.CHROME).build()

    await driver.get("https://http.cat" );
    const urls = await driver.findElements(By.css('li a'));
    console.log (urls.length);
     
    const hrefs = [];

    for(var elementos of urls){
        var url = await elementos.getAttribute('href');
        hrefs.push(url);
    }
    console .log(hrefs);
    for (var url of hrefs){
        await driver.get(url);
        const descricao = await driver.findElement(By.css('div.max-w-3xl')).getText();
        console.log(descricao);
    }
await driver.close();
}

iniciarTeste()