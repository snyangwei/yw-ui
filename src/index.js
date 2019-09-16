import { version } from '../package.json'
import ywHelloWorld from './packages/helloWorld/index.js'
import ywSwitch from './packages/switch/index.js'

const components = [
  ywHelloWorld,
  ywSwitch
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
  version,
  install,
  ywHelloWorld,
  ywSwitch
}
