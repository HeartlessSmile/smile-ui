import Compnent from './src/tabs'

/* istanbul ignore next */
Compnent.install = function (Vue) {
  Vue.component(Compnent.name, Compnent)
}

export default Compnent
