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

    await page.evaluate(() => {
        const doc = document.querySelector('#p-ensino .curso-graduacao a').click()
    })
    // await page.click('[type="submit"]')

    await page.waitForTimeout(1000)

    const links = await page.evaluate(() => {
        console.log("tudo certo")

        //captura todos os hiperlinks dos elementos relacionados a visualização de detalhes das matérias
        const doc = document.querySelectorAll('.listagem tbody a')
        //console.log(doc[3].attributes[0].nodeValue)
        var matches = document.body.querySelectorAll('a');
        const docList = [...doc]

        const list = docList.map(({ attributes }) => ({
            href: attributes[0].nodeValue
        }))

        return list
    })

    const curso = []

    for (let selector of links) {
        const [response] = await Promise.all([
            console.log("tudo certo"),
            page.waitForNavigation(),
            //console.log(`[href="${selector.href}"]`),
            page.click(`[href="${selector.href}"]`),
            //await page.waitForTimeout(100000),

        ]);
        const linkEnsino = await page.evaluate(() => {
            console.log("tudo certo")

            const ensino = document.querySelector('#menu > ul > li:nth-child(2) > div > ul > li:nth-child(1) > a').click()
            //page.waitForNavigation()


        });
        await page.waitForNavigation()
        const linkEstruturaCurricular = await page.evaluate(() => {
            console.log("tudo certo")

            const EstruturaCurricular = document.querySelector('#table_lt > tbody > tr:nth-child(3) > td:nth-child(3) > a:nth-child(3)').click()

        });


        await page.waitForTimeout(100000)
    }

    // await browser.close();

})();
