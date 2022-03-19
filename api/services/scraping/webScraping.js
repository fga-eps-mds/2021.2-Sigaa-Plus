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
        document.querySelector('#p-ensino .turmas a').click()
    })

    await page.waitForSelector('.formulario tbody tr td select')
    //insere a escolha: graduacao
    await page.select('.formulario tbody tr td select','G')
    
    await page.waitForSelector('[name="formTurma:inputDepto"]')
    //insere a escolha de depertamento
    await page.select('[name="formTurma:inputDepto"]','673')

    await page.waitForSelector('[name ="formTurma:inputPeriodo"]')
    //insere o periodo que deseja visualizar
    await page.select('[name ="formTurma:inputPeriodo"]','2')

    //insere o ano do semestre que deseja visualizar
    await page.evaluate(()=>{
        const doc= document.querySelector('[name="formTurma:inputAno"]')

        doc.value = "2021"
        console.log(doc)
    })

    await page.click('[type="submit"]')

    await page.waitForTimeout(1000)

    const links = await page.evaluate(()=>{
        console.log("tudo certo")

        //captura todos os hiperlinks dos elementos relacionados a visualização de detalhes das matérias
        const doc = document.querySelectorAll('.agrupador a')
        
        //console.log(doc[3].attributes[0].nodeValue)

        const docList = [...doc]

        const list = docList.map(({attributes})=> ({
            id: attributes[0].nodeValue
        }))

        return list
    })

    const equivalencia = []

    for(let selector of links){

        const [response] = await Promise.all([
            page.waitForNavigation(),
            page.click(`[id="${selector.id}"]`),
        ]);

            //console.log(response)

        const eq = await page.evaluate(()=> {

            console.log("passou aqui")
            //buscando os elementos onde se encontram os campos de nome e equivalência das matérias
            const campoName = document.querySelector("#corpo > table > tbody > tr:nth-child(5) > td")
            const doc = document.querySelector("#corpo > table > tbody > tr:nth-child(8) > td")
            console.log(doc)

            //capturando os valores dos campos de nome e equivalência
            const name = campoName.innerText
            const cod = doc.innerText

            let node;
            
            //verificando se existe um valor para equivalência
            if(doc.childElementCount > 0){
                node = doc.childNodes[1].getAttribute('title')
            }

            let nameSub = ''
            //caso exista um valor para equivalência, armazena o nome da matéria equivalente na variavel nameSub
            if(node != null){
                nameSub = node
            }
            return {name,cod,nameSub}
        })

        equivalencia.push(eq)

        await page.goBack()
    }

    exports.EQA = {equivalencia}

    console.log(equivalencia)

    await page.close()
    
    fs.writeFile('./api/services/scraping/equivalencias.json',JSON.stringify(equivalencia,null,2), err =>{

        if(err) throw new Error('something went wrong')
        console.log('well done')
    })

})();