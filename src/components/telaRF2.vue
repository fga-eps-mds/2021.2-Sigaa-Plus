<template>
  <body class="div">
    <div class="bloco">
      <h1 class="titulo">DISCIPLINAS CURSADAS</h1>
      <h1 class="subtitulo">DISCIPLINAS OBRIGATÓRIAS</h1>
      <div class="conteudo">
        <!-- local para colocar o resultado das diciplinas obrigatorias cursadas -->
      </div>
      <h1 class="subtitulo">DISCIPLINAS OPTATIVAS</h1>
      <div class="conteudo">
        <!-- local para colocar o resultado das diciplinas optativas cursadas -->
      </div>
    </div>
    <div class="bloco">
      <h1 class="titulo">DISPONÍVEIS PARA O PRÓXIMO SEMESTRE</h1>
      <h1 class="subtitulo">DISCIPLINAS OBRIGATÓRIAS</h1>
      <div class="conteudo">
        <!-- local para colocar o resultado das diciplinas obrigatorias para o proximo semestre -->
      </div>
      <h1 class="subtitulo">DISCIPLINAS OPTATIVAS</h1>
      <div class="conteudo">
        <!-- local para colocar o resultado das diciplinas optativas para o proximo semestre -->
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "telaRF2",
};
</script>

<style>
.bloco {
  width: 450px;
  float: left;
  background-color: #efefea;
  position: relative;
  left: 40px;
  margin-left: 45px;
}
.titulo {
  font-size: 20px;
  font-weight: bold;
  color: white;
  background-color: #435382;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
}
.subtitulo {
  font-size: 18px;
  font-weight: bold;
  color: rgb(0, 0, 0);
  background-color: #c4c4c4;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
}
.conteudo {
  width: 450px;
  height: 250px;
  background-color: #efefea;
}
.div {
  margin: auto;
  width: 90em;
  height: 27em;
}
</style>
