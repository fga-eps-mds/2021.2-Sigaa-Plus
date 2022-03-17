const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        args: [
            '--use-gl=egl'
            //"--no-sandbox",
            //'--disable-setuid-sandbox'
        ]
    });
    
    const page = await browser.newPage();
    //acessa página
    await page.goto('https://www.sig.unb.br/sigaa/public/home.jsf');

    await page.waitForSelector('#l-ensino span')

    await page.click('#l-ensino span')

    await page.evaluate(()=>{
       const doc = document.querySelector('#p-ensino .curso-graduacao a').click()
    })
    // await page.click('[type="submit"]')

    await page.waitForTimeout(1000)

    const links = await page.evaluate(()=>{
        console.log("tudo certo")

        //captura todos os hiperlinks dos elementos relacionados a visualização de detalhes das matérias
        const doc = document.querySelectorAll('.listagem tbody a')
        //console.log(doc[3].attributes[0].nodeValue)
        var matches = document.body.querySelectorAll('a');
        const docList = [...doc]

        const list = docList.map(({href})=> ({
            href: href
        }))

        return list
    })

    // await browser.close();

})();
