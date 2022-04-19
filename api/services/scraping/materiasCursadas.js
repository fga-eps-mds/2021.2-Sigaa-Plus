let doc = document.querySelectorAll("#j_id_jsp_303365748_2 > table > tbody:nth-child(4) > tr > td:nth-child(1)")
const matList = [...doc]
const materias = matList.map(({ innerText }) => ({
    materia: innerText
}))
console.log(materias)

localStorage.setItem("materias", JSON.stringify(materias))
console.log('Matérias salvas com sucesso');

//----Retornando matérias salvas no local storage----
// const disciplinas = JSON.parse(localStorage.getItem('materias'));
// console.log(disciplinas);