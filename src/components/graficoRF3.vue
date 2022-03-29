<template>
  <div class="container">
      <p class="progress">25%</p>
      <div>
        <h1 class="title">CRÉDITOS POR DISCIPLINAS OPTATIVAS E MÓDULO LIVRE</h1>
      </div>
      <div class="progress-bar">
        <div class="percentage"></div>
      </div>
    
    <div class="credit">
      <p>CRÉDITOS POR DISCIPLINAS OPTATIVAS E MODULO LIVRE - XX</p>
      <p>CRÉDITOS CURSADOS - XX</p>
    </div>
    </div>
  
</template>

<script>
export default { name: "progressBar" };
</script>

<style>
body {
  font-family: Arial, sans-serif;
}
.title {
  font-size: 25px;
  color: white;
  background-color: #4353b2;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
}
.progress-bar {
  margin-left: 10%;
  margin-right: 10%;
  height: 50px;
  background-color: #c4d2eb;
  border: 1px solid;
  border-radius: 5px;
  position: relative;
}
.percentage {
  background-color: rgb(206, 140, 92);
  border-radius: 5px;
  height: 100%;
  width: 25%;
  display: flex;
  position: absolute;
}
.credit {
  margin-left: 10%;
  margin-top: 40px;
  font-size: 20px;
}
.progress {
  display: flex;
  position: absolute;
  margin-left: 91%;
  margin-top: 96px;
  font-size: 25px;
}
.container {
    border: 1px solid;
}
</style>