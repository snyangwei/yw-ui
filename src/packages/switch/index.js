import Switch from './switch'

Switch.install = Vue => Vue.component(Switch.name, Switch)

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Switch)
}

export default Switch
