import Vue from 'vue'
import App from './App.vue'
// import smileUi from 'smile-vue-ui'
import '../packages/smile-css/src/index.scss'
// Vue.use(smileUi)

import smileButton from '../packages/button/index.vue'
import smileDialog from '../packages/dialog/index.vue'
import smileInput from '../packages/input/index.vue'
Vue.config.productionTip = false
Vue.component(smileButton.name, smileButton)
Vue.component(smileDialog.name, smileDialog)
Vue.component(smileInput.name, smileInput)

// Vue.use('smileButton', smileButton)
// Vue.use('smileDialog', smileDialog)
new Vue({
  render: h => h(App)
}).$mount('#app')
