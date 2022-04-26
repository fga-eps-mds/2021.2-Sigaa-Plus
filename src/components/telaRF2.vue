<template>
  <body class="div">
    <div class="bloco">
      <h1 class="titulo">Disciplinas Cursadas</h1>
      <div class="conteudo">
        <!-- local para colocar o resultado das diciplinas obrigatorias cursadas -->
      </div>
    </div>
    <div class="bloco">
      <h1 class="titulo"> Disciplinas Disponíveis Para o Próximo Semestre</h1>
      <div class="conteudoNcursado">
        <!-- local para colocar o resultado das diciplinas obrigatorias para o proximo semestre -->
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
.div {
  margin: auto;
  width: 90em;
  height: 27em;
}
.bloco {
  width: 255px;
  float: left;
  background-color: #efefea;
  position: relative;
  left: 40px;
  margin-left: 45px;
}
.titulo {
  font-family: Verdana, sans-serif;
  font-size: 12.32px;
  font-variant: small-caps;
  font-weight: bold;
  letter-spacing: 1px;
  color: white;
  background-color: #435382;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
}
.conteudo {
  width: 250px;
  height: 300px;
  background-color: #efefea;
}

.conteudoNcursado{
  width: 250px;
  height: 300px;
  background-color: #efefea;
}
</style>
