<template>
  <div class="telaVue">
    <input type ="text" placeholder="digite o nome da matéria aqui" v-model="pesquisa">
    <h1>Resultado:</h1>
    
    <p>{{equivalencias}}</p>
    <button v-on:click ="fetching">pesquisa</button>
  </div>
</template>

<script>
export default {
    el:"#telaVue",
    name: 'telaVue',
    data() {
        return{
            pesquisa: "",
            equivalencias: "",
            resSearch: ""
        }
    },

    watch:{
        pesquisa(val){
                
            this.capture(val)
        }
    },
    methods: {
        
        async fetching(){
            const url = `http://localhost:9090/equivalencias/${this.pesquisa}`
            fetch(url)
            
            .then(resp => resp.text())
            .then(data => data)
            .then(data => this.equivalencias = data)
        },
        async capture(){
            
            const search = this.equivalencias
            this.resSearch = search
            if(search == undefined){
                this.resSearch = "Nenhum resultado encontrado"
            }else if(search.nameSub === ""){
                this.resSearch = "Resultado encontrado. Não há equivalências"
            }else{
                this.resSearch = search.nameSub    
            }
        },
    }
}
</script>

<style>
/*
h1{
    color: white;
}
input{
    width: 20em;
    height: 3.5em;
    border-radius: 2em;
    margin-bottom: 2em;
    
}
p{
    color: white;
}
*/
</style>
