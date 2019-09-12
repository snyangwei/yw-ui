import HelloWorld from './packages/helloWorld/index.js'
import Switch from './packages/switch/index.js'

const components = [
  HelloWorld,
  Switch
]

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  HelloWorld,
  Switch
}
