import { createApp } from 'vue'
import telaRF2 from './components/telaRF2.vue'
import tela from './components/tela.vue'
import telaGraficos from './components/telaGraficos.vue'
//import App from './App.vue'


createApp(telaRF2).mount(".fluxo")
createApp(tela).mount(".equivalencia")
createApp(telaGraficos).mount(".graficos")


