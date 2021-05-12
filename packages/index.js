import Button from './button/index.vue'

const components = [Button]
const install = function (vue) {
  components.forEach(item => {
    vue.component(item.name, item)
  })
}

if (typeof window !== 'undefined' && window.vue) {
  install(window.vue)
}
export default install
