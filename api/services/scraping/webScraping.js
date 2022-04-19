const puppeteer = require('puppeteer');
const { Cluster } = require('puppeteer-cluster');
const fs = require('fs');

(async () => {
    const cluster = await Cluster.launch({
        concurrency: Cluster.CONCURRENCY_PAGE,
        maxConcurrency: 1,
        monitor: true,
        puppeteerOptions:{
            headless: false,
            args: [
                '--use-gl=egl'
                //"--no-sandbox",
                //'--disable-setuid-sandbox'
            ]
        },
        timeout:3000000
    });

    const equivalencia = []

    const unidades = []

    const capturaUni = async ({page, data: url}) => {
        //acessa página
        await page.goto(url);

        await page.waitForSelector('#l-ensino span')

        await page.click('#l-ensino span')

        await page.evaluate(()=>{
            document.querySelector('#p-ensino .turmas a').click()
        })

        await page.waitForSelector('.formulario tbody tr td select')
        //insere a escolha: graduacao
        await page.select('.formulario tbody tr td select','G')
        
        await page.waitForSelector('[name="formTurma:inputDepto"]')

        await page.waitForSelector('[name ="formTurma:inputPeriodo"]')
        //insere o periodo que deseja visualizar
        await page.select('[name ="formTurma:inputPeriodo"]','2')

        //insere o ano do semestre que deseja visualizar
        const departamentos = await page.evaluate(()=>{

            const departamento = document.querySelectorAll('[name="formTurma:inputDepto"] option')

            const valorDep = [...departamento];
            valorDep.shift()

            const valor = valorDep.map(({value})=> ({
                value: value
            }))

            return valor
        })

        unidades.push(departamentos)

        for(const valor of unidades[0]){
        
            await cluster.queue({url:'https://www.sig.unb.br/sigaa/public/home.jsf',item: valor.value},capturaMaterias);
        
        }
    }

    await cluster.queue('https://www.sig.unb.br/sigaa/public/home.jsf',capturaUni);


    const capturaMaterias = async ({ page, data:{url,item}}) => {
        //const page = await browser.newPage();
        //acessa página
        await page.goto(url);

        await page.waitForSelector('#l-ensino span')

        await page.click('#l-ensino span')

        await page.evaluate(()=>{
            document.querySelector('#p-ensino .turmas a').click()
        })

        await page.waitForSelector('.formulario tbody tr td select')
        //insere a escolha: graduacao
        await page.select('.formulario tbody tr td select','G')
        
        await page.waitForSelector('[name="formTurma:inputDepto"]')

        await page.waitForSelector('[name ="formTurma:inputPeriodo"]')
        //insere o periodo que deseja visualizar
        await page.select('[name ="formTurma:inputPeriodo"]','2')

        //insere o ano do semestre que deseja visualizar
        await page.evaluate(()=>{

            const doc= document.querySelector('[name="formTurma:inputAno"]')
            
            doc.value = "2021"
            console.log(doc)

        })

        await page.waitForSelector('[name="formTurma:inputDepto"]')

        //insere a escolha de depertamento
        await page.select('[name="formTurma:inputDepto"]',item)

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

        for(let selector of links){

            //await page.waitForTimeout(1500)

            await page.waitForSelector(`[id="${selector.id}"]`)

            const [response] = await Promise.all([
                page.waitForNavigation(),
                page.click(`[id="${selector.id}"]`),
            ]);
            
            //verifica se o redirecionamento não caiu na página de erro
            const error = await page.evaluate(() => {

                if(document.body.contains(document.querySelector("#painel-erro"))){
                    return false;
                }
                return true;

            })

            if(error){
                //console.log(response)
            
                const eq = await page.evaluate(()=> {

                    console.log("passou aqui")
                    //buscando os elementos onde se encontram os campos de nome e equivalência das matérias
                    const departamento = document.querySelector('.visualizacao tbody tr:nth-child(3) td')
                    const campoName = document.querySelector("#corpo > table > tbody > tr:nth-child(5) > td")
                    const doc = document.querySelector("#corpo > table > tbody > tr:nth-child(8) > td")
                    console.log(doc)

                    //capturando os valores dos campos de nome da unidade, nome da matéria e equivalência
                    const name = campoName.innerText
                    const cod = doc.innerText
                    const nomeDep = departamento.innerText

                    //formatando o texto de nome da unidade
                    const pos = nomeDep.indexOf('BRA')
                    const nameDep = nomeDep.slice(0,pos+8)
                    

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
                    return {nameDep,name,cod,nameSub}
                })

                equivalencia.push(eq)
            }

            await page.goBack()

        }
        
        exports.EQA = {equivalencia}
        
        fs.writeFile('api/services/scraping/equivalencias.json',JSON.stringify(equivalencia,null,2), err =>{

            if(err) throw new Error('something went wrong')
            console.log('well done')
        })
    }


    cluster.on('taskerror', (err, data, willRetry) => {
        if (willRetry) {
          console.warn(`Encountered an error while crawling ${data}. ${err.message}\nThis job will be retried`);
        } else {
          console.error(`Failed to crawl ${data}: ${err.message}`);
        }
    });
    

    await cluster.idle();
    await cluster.close();

})();