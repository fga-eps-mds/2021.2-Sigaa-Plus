// este arquivo ainda está em desenvolvimento

// pegando o elemento div do html que esta no arquivo telaRF2.vue
const dadosDCurso = document.querySelector('.conteudo02-left')

// assesar a API de forma sincrona
async function consultarDados () {
    const retorno = await fetch('http://localhost:3000/dadosDoCurso')
    const dadosJson = await  retorno.json()
    console.log(dadosJson)
}
// roda o metodo
consultarDados ()

