import HelloWorld from './helloWorld'

HelloWorld.install = Vue => Vue.component(HelloWorld.name, HelloWorld)

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(HelloWorld)
}

export default HelloWorld
