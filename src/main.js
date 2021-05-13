import Vue from 'vue'
import App from './App.vue'
// import smileUi from 'smile-vue-ui'
import '../packages/smile-css/src/index.scss'
// Vue.use(smileUi)

import Input from '../packages/input/index'
import Switch from '../packages/switch/index'
import Radio from '../packages/radio/index'
import Button from '../packages/button/index'
import Dialog from '../packages/dialog/index.js'
Vue.config.productionTip = false
// Vue.component(smileInput.name, smileInput)
// Vue.component(smileSwitch.name, smileSwitch)
Vue.use(Radio)
Vue.use(Button)
Vue.use(Dialog)
Vue.use(Input)
Vue.use(Switch)
new Vue({
  render: h => h(App)
}).$mount('#app')
