<template>
    <body>
        <div class="container">
            <p class="progress">14%</p>            
            <h1 class="title">CRÉDITOS POR DISCIPLINAS OBRIGATÓRIAS</h1>
            <br>
            <br>
            <div class="progress-bar">
                <div class="percentage">
            </div>      
            <br>
            <br>
            <p class="obrigatoria">CRÉDITOS POR DISCIPLINAS OBRIGATÓRIAS - 232</p>
            <p class="cursados">CRÉDITOS CURSADOS - 32</p>             
            </div>
        </div>
    </body>
</template>

<script>

    export default { 
        name: "graficoRF3" 
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