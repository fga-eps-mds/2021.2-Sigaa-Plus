<template>
    
    <body>
        <div class="container">         
            <h1 class="title">BUSCAR DISCIPLINA</h1>
            <br>
            <br>
<tbody>
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
            <br><br>

            <input type="checkbox" id="scales" name="scales">
            <label class="checkbox" for="scales"> Código: </label>
            <input type="text">
            <br><br>

            <input type="checkbox" id="scales" name="scales">
            <label class="checkbox" for="scales"> Nome da disciplina: </label>
            <input type="text">
            <br>
</tbody>
            
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
    color: black;
}

tbody{
    display: table-row-group;
    vertical-align: middle;
}


.title {
    font-size: 25px;
    color: white;
    background-color: #4353b2;
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
}

.container {
    margin:auto;
    width: 50em;
    height: 15em;
    border: 1px solid;
    background: rgb(255, 255, 255);

    display: flexbox;
}
</style>