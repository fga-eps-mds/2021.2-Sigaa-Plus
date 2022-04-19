console.log("Hello World!")

function salvarMaterias() {
    //capturando os dados das matérias dentro do formulário
    let doc = document.querySelectorAll("#j_id_jsp_303365748_2 > table > tbody:nth-child(4) > tr")
    //laço para percorrer todos os arrays e capturar o nome das matérias
    for (const value of doc) {
        const text = doc[1].children[0].innerText
        console.log(text)
        const disciplinas = [...text]
        console.log(text)
        
    }
    //salvando informações no browser
    // localStorage.setItem('id', disciplinas)
}

//chamar aqui a função salvarMaterias por meio de um click
