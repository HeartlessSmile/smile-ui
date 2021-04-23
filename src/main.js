import Vue from 'vue'
import App from './App.vue'
import smileUi from '../packages/index'
import '../packages/smile-css/src/index.scss'
Vue.config.productionTip = false
Vue.use(smileUi)
new Vue({
  render: h => h(App)
}).$mount('#app')
