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

    await page.waitForNavigation()

    const links = await page.evaluate(() => {
        //console.log("tudo certo")

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
            //console.log("tudo certo"),
            page.waitForNavigation(),

            page.click(`[href="${selector.href}"]`),


        ]);
        const linkEnsino = await page.evaluate(() => {
            //console.log("tudo certo")

            const ensino = document.querySelector('#menu > ul > li:nth-child(2) > div > ul > li:nth-child(1) > a').click()



        });
        await page.waitForNavigation()
        const linkEstruturaCurricular = await page.evaluate(() => {
            //console.log("tudo certo")

            const EstruturaCurricular = document.querySelector('#table_lt > tbody > tr:nth-child(3) > td:nth-child(3) > a:nth-child(3)').click()

        });
        await page.waitForNavigation()
        const dadosCurso = await page.evaluate(() => {
            //console.log("tudo certo")

            //captura todos os hiperlinks dos elementos relacionados a visualização de detalhes das matérias
            const nomeCurso = document.querySelector('#formulario > table > tbody > tr:nth-child(2) > td')
            const nameCurso = nomeCurso.innerText 

            return { nameCurso }

        })
        curso.push(dadosCurso)
        //Volta para página inicial
        //await page.waitForTimeout(1000)

        for (let i = 0; i <= 2; i++) {
            await page.goBack()
        }

        exports.EQA = { curso }

        //console.log(curso)

        fs.writeFile('dadosDoCurso.json', JSON.stringify(curso, null, 2), err => {
            //           ^^^^^^^ Colocar diretório do arquivo aonde vai ficar salvo(Qualquer duvida olhar no que o Vitor fez ou mandar mensagem para o Hian)
            if (err) throw new Error('something went wrong')
            console.log('well done')
        })
    }
    await page.close()

    await browser.close();

})();
