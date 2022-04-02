<template>
    
    <body>
        <div class="container">         
            <h1 class="title">BUSCAR DISCIPLINA</h1>
            <br>
            <br>

            <input type="checkbox" id="nivel" name="nivel">
            <label class="checkbox" for="nivel"> Nível: </label>
            <select name="cars" id="cars">
                <option value="formacao_comp">FORMAÇÃO COMPLEMENTAR</option>
                <option value="graduacao">GRADUAÇÃO</option>
                <option value="especializacao">LATO SENSU - ESPECIALIZAÇÃO</option>
                <option value="residencia">LATO SENSU - RESIDÊNCIA</option>
                <option value="stricto">STRICTO SENSU</option>
                <option value="mestrado">MESTRADO</option>
                <option value="doutorado">DOUTORADO</option>
            </select>
            <br>

            <input type="checkbox" id="scales" name="scales">
            <label class="checkbox" for="scales"> Código: </label>
            <input type="text">
            <br>

            <input type="checkbox" id="scales" name="scales">
            <label class="checkbox" for="scales"> Nome da disciplina: </label>
            <input type="text">
            <br>
        </div>
        
    </body>
</template>

<script>

    export default { 
        name: "graficoRF3",
        data () {
      return {
        checkbox: true,
        radioGroup: 1,
        switch1: true
      }
    }
    };

</script>

<style>

body {
    font-family: Arial, sans-serif;
}

.title {
    font-size: 25px;
    color: white;
    background-color: #4353b2;
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
}

.progress-bar {
    height: 100%;
    width: 70%;
    height: 37px;
    left: 9px;
    background-color: #c4d2eb;
    border: 1px solid;
    border-radius: 5px;
    position: relative;
}

.percentage {
    background-color: rgb(206, 140, 92);
    border-radius: 5px;
    height: 100%;
    width: 14%;
    display: flex;
    position: absolute;
}

.obrigatoria {
    margin-left: 0%;
    margin-top: 37px;
    font-size: 20px;
}

.cursados {
    margin-left: 0%;
    margin-top: 10px;
    font-size: 20px;
}

.progress {
    display: flex;
    position: absolute;
    margin-top: 96px;
    font-size: 25px;
    margin-left: 47%;
}

.container {
    margin:auto;
    width: 50em;
    height: 15em;
    border: 1px solid;
    background: rgb(255, 255, 255);
}
</style>