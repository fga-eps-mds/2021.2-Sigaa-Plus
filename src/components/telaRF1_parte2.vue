<template>
    
    <body>
        <div class="container">         
            <h1 class="title">DISCIPLINAS EQUIVALENTES</h1>
            <br>
            <br>

            <table>
                <tr>
                    <th>Código</th>
                    <th>Nome</th>
                    <th>Nível de ensino</th>
                    <th>CH</th>
                </tr>
                <tr id="table">
                    <td>FEF0022</td>
                    <td>ADMINISTRAÇÃO EM EDUCAÇÃO FÍSICA</td>
                    <td>GRADUAÇÃO</td>
                    <td>60</td>
                </tr>
                <tr id="table">
                    <td>IFD0043</td>
                    <td>ASTROFÍSICA</td>
                    <td>GRADUAÇÃO</td>
                    <td>60</td>
                </tr>
                <tr id="table">
                    <td>CEL0019</td>
                    <td>BIOQUIMICA E BIOFISICA</td>
                    <td>GRADUAÇÃO</td>
                    <td>135</td>
                </tr>
            </table>
        </div>
        
    </body>
</template>

<script>

    export default { 
        name: "graficoRF3",
        data () {
      return {
        checkbox: true,
        radioGroup: 1,
        switch1: true
      }
    }
    };

</script>

<style>

body {
    font-family: Arial, sans-serif;
}

.title {
    font-size: 25px;
    color: white;
    background-color: #435382;
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: #FFF;
  text-align: left;
  padding: 8px;
}

tr:nth-child(1) {
  background-color: #dcdce4;
}

#table:nth-child(odd) {
  background-color: #ecf4fc;
}

</style>