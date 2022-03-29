<template>
<div>
  <img alt="Sigaa plus" src="./assets/logoSigaaPlus.png">
  
  <tela/>
  <graficoRF3 />
</div>
</template>

<script>

import tela from './components/tela.vue'
import graficoRF3 from './components/graficoRF3.vue'

export default {
  name: 'App',
  components: {

    tela,
    graficoRF3
  }
}
</script>

<style>
*{
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img{
  width:400px;
  height:400px;
}

div{
  margin:auto;
  width: 50em;
  height: 30em;
  background-color: black;
  border-radius: 2em;
}

</style>
