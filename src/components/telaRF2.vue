<template>
  <body class="div">
    <div class="bloco-left">
      <h1 class="titulo-01">DISCIPLINAS CURSADAS</h1>
      <h1 class="subtitulo-left01">DISCIPLINAS OBRIGATÓRIAS</h1>
      <div class="conteudo01-left">

      </div>
      <h1 class="subtitulo-left02">DISCIPLINAS OPTATIVAS</h1>
      <div class="conteudo02-left">
        <!-- local para colocar o resultado das diciplinas optativas cursadas -->
      </div>
    </div>
    <div class="bloco-right">
      <h1 class="titulo-02">DISCIPLINAS DISPONÍVEIS PARA O PRÓXIMO SEMESTRE</h1>
      <h1 class="subtitulo-right01">DISCIPLINAS OBRIGATÓRIAS</h1>
      <div class="conteudo01-right">
        <div v-for="dads in cursosDados" :key="dads.id">
          <p>{{dads.nameCurso}}</p>
        </div>
      </div>
      <h1 class="subtitulo-right02">DISCIPLINAS OPTATIVAS</h1>
      <div class="conteudo02-right">
        <!-- local para colocar o resultado das diciplinas optativas para o proximo semestre -->
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
        console.log(this.cursosDados, "test")       
    },
};
</script>

<style>
.bloco-left {
  width: 650px;
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

.subtitulo-left01 {
  font-size: 22px;
  font-weight: bold;
  color: rgb(0, 0, 0);
  background-color: #c4c4c4;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
}

.conteudo01-left {
  width: 650px;
  height: 350px;
  background-color: #efefea;
}

.subtitulo-left02 {
  font-size: 22px;
  font-weight: bold;
  color: rgb(0, 0, 0);
  background-color: #c4c4c4;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
}

.conteudo02-left {
  width: 650px;
  height: 350px;
  background-color: #efefea;
}

.bloco-right {
  width: 650px;
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

.subtitulo-right01 {
  font-size: 22px;
  font-weight: bold;
  color: rgb(0, 0, 0);
  background-color: #c4c4c4;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
}

.conteudo01-right {
  width: 650px;
  height: 350px;
  background-color: #efefea;
}

.subtitulo-right02 {
  font-size: 22px;
  font-weight: bold;
  color: rgb(0, 0, 0);
  background-color: #c4c4c4;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
}

.conteudo02-right {
  width: 650px;
  height: 350px;
  background-color: #efefea;
}

.div {
  margin: auto;
  width: 90em;
  height: 27em;
}
</style>
