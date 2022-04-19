console.log("Hello World!")

window.onload = function salvarMaterias() {
    //capturando os dados das matérias dentro do formulário
    let doc = document.querySelectorAll("#j_id_jsp_303365748_2 > table > tbody:nth-child(4) > tr > td:nth-child(1)")
    const matList = [...doc]
    const materias = matList.map(({ innerText }) => ({
        materia: innerText
    }))
}
