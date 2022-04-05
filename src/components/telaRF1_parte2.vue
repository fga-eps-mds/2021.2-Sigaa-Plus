<template>
    
    <body>
        <div class="container2">         
            <h1 class="title">DISCIPLINAS EQUIVALENTES</h1>

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
        name: "telaRF1_parte2",
    };

</script>

<style>

body {
    font-family: Arial, sans-serif;
    color: black;
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
  background-color: #c4c4c4;
}

#table:nth-child(odd) {
  background-color: #edf1f8;
}

.container2 {
    margin:auto;
    width: 50em;
    height: 15em;
    border: 1px solid;
    background: rgb(255, 255, 255);
}

</style>
