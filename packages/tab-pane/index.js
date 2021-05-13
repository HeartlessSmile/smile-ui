import Compnent from '../tabs/src/tab-pane.vue'

/* istanbul ignore next */
Compnent.install = function (Vue) {
  Vue.component(Compnent.name, Compnent)
}

export default Compnent
