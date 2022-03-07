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
        fetch('http://localhost:3000/equivalencias')
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
</style>