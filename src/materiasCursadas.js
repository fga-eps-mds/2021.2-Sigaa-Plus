console.log("Hello World!")

if(document.body.contains(document.querySelector(".infoAltRem"))){
    // criando botão para acionar a função
    let btn = document.createElement("button");
    btn.innerHTML = "Salvar";
    btn.style.cssText = 'position:absolute;top:105px;left:150px;width:100px;height:24px;background-color: #404E82; color: white;border:0px  solid #ddd;';
    // criando função para salvar as matérias ao clicar no botão
    btn.onclick = function () {
        let doc = document.querySelectorAll("#j_id_jsp_303365748_2 > table > tbody:nth-child(4) > tr > td:nth-child(1)")
        const matList = [...doc]
        const materias = matList.map(({ innerText }) => ({
            materia: innerText
        }))
        console.log(materias)
        // salvando matérias em um json no localStorage
        localStorage.setItem("materias", JSON.stringify(materias))
        console.log('Matérias salvas com sucesso');
        alert("Matérias salvas com sucesso")
    };
    document.body.appendChild(btn);
}
// ----Retornando matérias salvas no local storage----
// const disciplinas = JSON.parse(localStorage.getItem('materias'));
// console.log(disciplinas);