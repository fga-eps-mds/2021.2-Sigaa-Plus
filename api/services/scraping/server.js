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
        //Entra na parte de apresentação de cada curso
        const [response] = await Promise.all([
            page.waitForNavigation(),
            page.click(`[href="${selector.href}"]`),
        ]);
        //Entra na parte de curriculo de cada curso
        const linkEnsino = await page.evaluate(() => {
            const ensino = document.querySelector('#menu > ul > li:nth-child(2) > div > ul > li:nth-child(1) > a').click()
        });
        //Entra na parte de relatório da estrutura curricular de cada curso
        await page.waitForNavigation()
        const linkEstruturaCurricular = await page.evaluate(() => {
            const EstruturaCurricular = document.querySelector('#table_lt > tbody > tr:nth-child(3) > td:nth-child(3) > a:nth-child(3)').click()

        });
        await page.waitForNavigation()
        const dadosCurso = await page.evaluate(() => {
            //Captura todos os nomes dos curso que estão cadastrados no SIGAA
            const nomeCurso = document.querySelector('#formulario > table > tbody > tr:nth-child(2) > td')
            const nameCurso = nomeCurso.innerText
            //Captura as materias obrigatórias de cada curso
            const mat = document.querySelectorAll('#formulario > table > tbody > tr:nth-child(17) > td > table:nth-child(3) > tbody > tr.componentes > td:nth-child(1)')
            const matList = [...mat]
            const materias = matList.map(({ innerText }) => ({
                materia: innerText
            }))

            return { nameCurso, materias }
        })

        curso.push(dadosCurso)
        //Volta para página inicial       
        for (let i = 0; i <= 2; i++) {
            await page.goBack()
        }

        exports.EQA = { curso }

        fs.writeFile('dadosDoCurso.json', JSON.stringify(curso, null, 2), err => {
            //           ^^^^^^^ Colocar diretório do arquivo aonde vai ficar salvo(Qualquer duvida olhar no que o Vitor fez ou mandar mensagem para o Hian)
            if (err) throw new Error('something went wrong')
            console.log('well done')
        })
    }
    await page.close()

    await browser.close();

})();