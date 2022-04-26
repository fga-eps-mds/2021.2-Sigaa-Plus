<template>
  <div>
    <!-- <img alt="Sigaa plus" src="./assets/logoSigaaPlus.png" /> -->

    <br />
    <telaRF1_parte1 />
    <br />
    <telaRF1_parte2 />
    <br />
    <telaGraficos />
    <br />
    <telaRF2 />
  </div>
</template>

<script>
import telaGraficos from "./components/telaGraficos.vue";
import telaRF2 from "./components/telaRF2.vue";
import telaRF1_parte1 from "./components/telaRF1_parte1.vue";
import telaRF1_parte2 from "./components/telaRF1_parte2.vue";

export default {
  name: "App",
  components: {
    telaGraficos,
    telaRF2,
    telaRF1_parte1,
    telaRF1_parte2,
  },
};
</script>

<style>
* {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}

img {
  width: 400px;
  height: 400px;
}
/*
div {
  margin: auto;
  width: 90em;
  height: 27em;
  background-color: rgb(235, 235, 235);
}*/
</style>
