<template>
  <body>
    <div class="container">
      <h1 class="title">BUSCAR DISCIPLINA</h1>
      <br />

      <tbody>
        <input type="checkbox" id="nivel" name="nivel" />
        <label class="checkbox" for="nivel"> &nbsp;Nível: </label>
        <select name="cars" id="cars" style="font-size: 15px">
          <option value="formacao_comp">FORMAÇÃO COMPLEMENTAR</option>
          <option value="graduacao">GRADUAÇÃO</option>
          <option value="especializacao">LATO SENSU - ESPECIALIZAÇÃO</option>
          <option value="residencia">LATO SENSU - RESIDÊNCIA</option>
          <option value="stricto">STRICTO SENSU</option>
          <option value="mestrado">MESTRADO</option>
          <option value="doutorado">DOUTORADO</option>
        </select>
        <br /><br />

        <input type="checkbox" id="scales" name="scales" />
        <label1 class="checkbox" for="scales"> &nbsp;Código: </label1>
        <input type="text" />
        <br /><br />

        <input type="checkbox" id="scales" name="scales" />
        <label2 class="checkbox" for="scales">
          &nbsp;Nome da disciplina:
        </label2>
        <input type="text" size="135" />
        <br />
      </tbody>
    </div>
  </body>
</template>

<script>
export default {
  name: "telaRF1_parte1",
  data() {
    return {
      checkbox: true,
      radioGroup: 1,
      switch1: true,
    };
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  color: black;
}

tbody {
  display: table-row-group;
  vertical-align: middle;
}

label {
  display: inline-block;
  font: 18px Arial;
  float: left;
  margin-right: 187px;
}

label1 {
  display: inline-block;
  font: 18px Arial;
  float: left;
  margin-right: 170px;
}

label2 {
  display: inline-block;
  font: 18px Arial;
  float: left;
  margin-right: 75px;
}

input {
  min-width: 35px;
  min-height: 20px;
  float: left;
}

select {
  float: left;
  width: 20em;
  height: 25px;
  background-color: #e2e2e2;
}

.title {
  font-size: 25px;
  color: white;
  background-color: #4353b2;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
}

/*
.container1 {
  margin: auto;
  width: 50em;
  height: 11.5em;
  border: 1px solid #d3d3d3;
  background: rgb(255, 255, 255);

  display: flexbox;
}*/
</style>
