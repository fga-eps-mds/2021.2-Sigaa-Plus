<template>
<div>
  <img alt="Sigaa plus" src="./assets/logoSigaaPlus.png">
  
 <!-- <tela/> -->  
  <progressBar/>
</div>
</template>

<script>

//import tela from './components/tela.vue'
import progressBar from './components/progressBar.vue'

export default {
  name: 'App',
  components: {
   // tela,
    progressBar
  }
}
</script>

<style>
*{
  font-family: Arial, sans-serif;
  margin: 0;
}
#app {
  font-family: Arial, sans-serif;
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
