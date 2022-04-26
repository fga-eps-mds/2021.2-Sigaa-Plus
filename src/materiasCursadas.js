console.log("Hello World!")

if(document.body.contains(document.querySelector(".infoAltRem"))){
   
    let p = []
    fetch('https://secret-scrubland-39947.herokuapp.com/dadosDoCurso')
    .then(resp => resp.json())
    .then(data=> p = data)
    
    
    const recebe = []
    const recebe2 = []
    const ja = []
    const todo = []
    const posiLista = []
    const noCurso = []
    let conta = 0
    const cursoU = localStorage.getItem('curso');
    
    
    
    
    let btn = document.createElement("button");
    btn.innerHTML = "Salvar";
    btn.style.cssText = 'position:absolute;top:105px;left:150px;width:100px;height:24px;background-color: #404E82; color: white;border:0px  solid #ddd;';
    
    btn.onclick = function () {
    
        
    
        let doc = document.querySelectorAll("#j_id_jsp_303365748_2 > table > tbody:nth-child(4) > tr > td:nth-child(1)")
        const matList = [...doc]
        const materias = matList.map(({ innerText }) => ({
            materia: innerText
        }))
        console.log(materias)
    
        localStorage.setItem("materias", JSON.stringify(materias))
        console.log('Matérias salvas com sucesso');
    
        //----Retornando matérias salvas no local storage----
        const disciplinas = JSON.parse(localStorage.getItem('materias'));
        //----Converte as matérias salvas no local storage para objeto----
        let matObjeto = disciplinas;
    
        //=====================================================================
        // Parte que vai comparar as materias
        const recebe = []
        const recebe2 = []
        const ja = []
        const todo = []
        const posiLista = []
        let conta = 0
        const cursoU =localStorage.getItem('curso');
        let nomeCur
    
        // essa parte vai buscar o curso na lista do dadosDoCurso.json
        //OBS: tem que testar com o dadosDoCurso.JSon. Eu fiz uma lista para testar (variavel p) quando fizer com os dados do arquivo é so trocar o p pelo nome da variavel que vai receber os dados da lista, acho que vai precisar usar o JSON.parse(variavel) senao ele nao vai ficar como um vetor de objetos.
    
        //Essa parte vai converter os nomes dos curso para o padrão que foi decidido (ate o segundo -)
        for (let k = 0; k < p.length; k++) {
            //Essa parte vai converter os nomes dos curso para o padrão que foi decidido (ate o segundo -)
            const noCurso = []
    
            for (let i = 0; i < p[k].nameCurso.length; i++) {
    
                if (p[k].nameCurso[i] != '-') {
                    noCurso[i] = p[k].nameCurso[i]
                    
                } else {
                    conta++
                    if (conta == 2) {
                        conta = 0
                        break
                    } else {
    
                        noCurso[i] = p[k].nameCurso[i]
    
                    }
                }
    
            }
            nomeCur = noCurso.join([separador = ''])
    
            //se o nome do curso do da posição do vetor for igual ao do usuario ele continua
            if (nomeCur == cursoU) {
                
                //aqui ele vai pegar so a parte do codigo da materia ex:(FGA0001) das materias que o usuario ja fez
                for (let i = 0; i < matObjeto.length; i++) {
                    for (let j = 0; j < 7; j++) {
                        recebe[j] = matObjeto[i].materia[j]
                        
                        ja[i] = recebe.join([separador = ''])
                        
                    }
                }
                //aqui ele vai pegar so a parte do codigo da materia ex:(FGA0001) das materias do fluxo do curso
                for (let i = 0; i < p[k].materias.length; i++) {
                    for (let j = 0; j < 7; j++) {
                        recebe2[j] = p[k].materias[i].materia[j]
                        todo[i] = recebe2.join([separador = ''])
                    }
                }
                let contador = 0
                //aqui ele vai comprar as 2 listas e vai fazer a lista de materias que ainda nao foram feitas pelo usuario
                for (let i = 0; i < todo.length; i++) {
                    for (let j = 0; j < ja.length; j++) {
                        
                        if (ja[j] != todo[i]) {
                            if (j == ja.length - 1) {
                                posiLista[contador] = p[k].materias[i].materia
                                contador++
                            }
                        } else {
                            break
                        }
                    }
    
                }
    
                break
    
            };
        }
    
        localStorage.setItem("matRest", JSON.stringify(posiLista));
        const listaComparada = JSON.parse(localStorage.getItem('matRest'));
        const listaComparada1 = listaComparada
        console.log(listaComparada1)
    };
    document.body.appendChild(btn);
}
// ----Retornando matérias salvas no local storage----
// const disciplinas = JSON.parse(localStorage.getItem('materias'));
// console.log(disciplinas);