<template>
  <body>
    <div class="container">
      <h1 class="title">CRÉDITOS POR DISCIPLINAS OBRIGATÓRIAS</h1>
      <br />
      <br />
      <div class="progress-bar">
        <p class="progress">{{ percentageObg }}%</p>
        <div
          class="percentage"
          :style="{ width: percentageObg + '%' }"
          style="background-color: rgb(145, 192, 138)"
        ></div>
        <br />
        <br />
        <p class="obrigatoria">CRÉDITOS POR DISCIPLINAS OBRIGATÓRIAS - 232</p>
        <p class="cursados">CRÉDITOS CURSADOS - 32</p>
      </div>
    </div>
    <div class="container">
      <h1 class="title">CRÉDITOS POR DISCIPLINAS OPTATIVAS E MÓDULO LIVRE</h1>
      <br />
      <br />
      <div class="progress-bar">
        <p class="progress">{{ percentageOpt }}%</p>
        <div
          class="percentage"
          :style="{ width: percentageOpt + '%' }"
          style="background-color: rgb(206, 140, 92)"
        ></div>
        <br />
        <br />
        <p class="obrigatoria">
          CRÉDITOS POR DISCIPLINAS OPTATIVAS E MÓDULO LIVRE - 24
        </p>
        <p class="cursados">CRÉDITOS CURSADOS - 6</p>
      </div>
    </div>
    <div class="container">
      <h1 class="title">CRÉDITOS TOTAIS</h1>
      <br />
      <br />
      <div class="progress-bar">
        <p class="progress">{{ percentageTotal }}%</p>
        <div
          class="percentage"
          :style="{ width: percentageTotal + '%' }"
          style="background-color: rgb(135, 92, 206)"
        ></div>
        <br />
        <br />
        <p class="obrigatoria">CRÉDITOS TOTAIS DO CURSO - 256</p>
        <p class="cursados">CRÉDITOS CURSADOS - 38</p>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "telaGraficos",
  data() {
    return {
      percentageObg: "14",
      percentageOpt: "37",
      percentageTotal: "15",
    };
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
}

p {
  font-weight: 500;
}

.title {
  font-size: 18px;
  color: white;
  background-color: #435382;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
}

.progress-bar {
  height: 100%;
  height: 37px;
  left: 9px;
  background-color: #c4d2eb;
  border-radius: 5px;
  position: relative;
  margin: 0 10em 0 10em;
}

.percentage {
  border-radius: 5px;
  height: 100%;
  display: flex;
  position: absolute;
}

.obrigatoria {
  margin-left: 0%;
  margin-top: 37px;
  font-size: 15px;
}

.cursados {
  margin-left: 0%;
  margin-top: 10px;
  font-size: 15px;
}

.progress {
  display: flex;
  position: absolute;
  margin-top: 0.5em;
  font-size: 18.5px;
  font-weight: 500;
  margin-left: 52.5em;
}

.container {
  margin: auto;
  width: 80em;
  height: 15em;
  border: 1px solid #d3d3d3;
  background: rgb(255, 255, 255);
  margin-bottom: 4em;
}
</style>
