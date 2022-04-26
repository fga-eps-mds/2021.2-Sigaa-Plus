
// criando função para salvar as matérias ao clicar no botão


const nomeCurso = document.querySelector('#agenda-docente > table > tbody > tr:nth-child(2) > td:nth-child(2)')
let contar = 0
const nameCurso = nomeCurso.innerText
const nCurso = []


//Como tem cursos com nomes iguais tem que pegar a especializacao do curso, então ele vai salvar ate o segundo ¨-¨
for (let i = 0; i < nameCurso.length; i++) {
    if (nameCurso[i] != '-') {
        nCurso[i] = nameCurso[i]
    } else {
        contar++
        if (contar == 2) {
            contar = 0;
            break
        } else {
            nCurso[i] = nameCurso[i]
        }
    }
}
let nomeC = nCurso.join([separador = ''])
localStorage.setItem("curso",(nomeC))
//const cursoU = JSON.parse(localStorage.getItem('curso'));
console.log('Curso salvo com sucesso');

