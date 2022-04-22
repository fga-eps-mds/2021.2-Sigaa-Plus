<template>
  <body class="div">
    <div class="bloco-left">
      <h1 class="titulo-01">DISCIPLINAS JÁ CURSADAS</h1>
      <div class="conteudo01-left">
        <div v-for="dads in cursosDados" :key="dads.id">
          <p id="tex1">{{dads.nameCurso}}</p>
        </div>
      </div>
      
    </div>
    <div class="bloco-right">
      <h1 class="titulo-02">DISCIPLINAS AINDA NÃO CURSADAS</h1>
      <div class="conteudo02-right">
        <div v-for="dads in cursosDados" :key="dads.id">
          <p id="tex2">{{dads.nameCurso}}</p>
        </div>
      </div>
  
    </div>
  </body>
</template>

<script>

export default {
    el:"#telaRF2",
    name: 'telaRF2',

    data() {
        return{
          cursosDados: []
        }
    },

    mounted() {    
      fetch(`http://localhost:3000/dadosDoCurso`)
        .then(resp => resp.json())
        .then(data => this.cursosDados = data)
    },
};
</script>

<style>

.bloco-left {
  width: 653px;
  float: left;
  background-color: #efefea;
}

.titulo-01 {
  font-size: 22px;
  font-weight: bold;
  color: white;
  background-color: #435382;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
}

.conteudo01-left {
  border-style: solid;
  border-width: 1px;
  border-color: #949494;
  width: 650px;
  height: 650px;
  background-color: #efefea;
  max-width: 100%;
  overflow: scroll
}

#tex1 {
  font-size: 20px;
  font-weight: bold;
  line-height: 2em;
}

.bloco-right {
  width: 653px;
  float: right;
  background-color: #efefea;
}

.titulo-02 {
  font-size: 22px;
  font-weight: bold;
  color: white;
  background-color: #435382;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
}

.conteudo02-right {
  border-style: solid;
  border-width: 1px;
  border-color: #949494;
  width: 650px;
  height: 650px;
  background-color: #efefea;
  max-width: 100%;
  overflow: scroll
}

#tex2 {
  font-size: 20px;
  font-weight: bold;
  line-height: 2em;
}

.div {
  margin: auto;
  width: 90em;
  height: 27em;
}
</style>
