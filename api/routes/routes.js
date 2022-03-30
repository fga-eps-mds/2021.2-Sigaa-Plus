const express = require('express');
const app = express();

const PORT = 3000
const cursos = require("./services/scraping/equivalencias.json")

app.listen(
    PORT,
    () => console.log(`Em: http://localhost:${PORT}`)
)

//Procura as equivalencias da materia
app.get('/equivalencias/:id', (req,res) =>{

    //Identifica a materia
    const id = req.params.id.toUpperCase()
    console.log(id.toUpperCase())

    //Procura a materia dentro do equivalencias.json
    for(var i = 0; i < cursos.length; i++){
        if (id == cursos[i].name){
            curso = cursos[i].nameSub
            console.log(curso)
            if (curso == ""){
                res.send('Não tem equivalente.')
            }else{
                res.send(curso)
            }
            break
        }
    }  
    if (i == cursos.length) res.send('Matéria não encontrada.')
})
