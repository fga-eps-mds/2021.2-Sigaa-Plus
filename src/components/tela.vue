<template>
  <div class="telaVue">
    <input type ="text" placeholder="digite o nome da matéria aqui" v-model="pesquisa">
    <h1>Resultado:</h1>
    
    <p>{{resSearch}}</p>

  </div>
</template>

<script>
export default {
    el:"#telaVue",
    name: 'telaVue',
    data() {
        return{
            pesquisa: "",
            equivalencias: [],
            resSearch: ""
        }
    },
    mounted(){
        fetch('https://secret-scrubland-39947.herokuapp.com/equivalencias')
        .then(resp => resp.json())
        .then(data => this.equivalencias = data)
        
    },
    watch:{
        pesquisa(val){
                
            this.capture(val)
        }
    },
    methods: {
        async capture(text){
            
            const search = this.equivalencias.find(data => data.name == text.toUpperCase())
            if(search == undefined){
                this.resSearch = "Nenhum resultado encontrado"
            }else if(search.nameSub === ""){
                this.resSearch = "Resultado encontrado. Não há equivalências"
            }else{
                this.resSearch = search.nameSub    
            }
        }
    }
}
</script>

<style>
.telaVue {
  margin: auto;
  width: 60em;
  height: 40em;
  background-color: rgb(235, 235, 235);
}
/*
h1{
    color: white;
}*/
input{
    width: 20em;
    height: 3.5em;
    border-radius: 2em;
    margin-bottom: 2em;
    
}
/*p{
    color: white;
}
*/
</style>