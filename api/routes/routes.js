const express = require('express');
const app = express();
const valor = require("../../api/services/scraping/equivalencias.json")

const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
    res.header({"Access-Control-Allow-Origin": "*"});
    next();
}) 

app.get('/equivalencias', (req,res) =>{
    res.send(valor)
})


app.listen(PORT,() => {
    console.log(`Escutando na porta ${PORT}`)
})