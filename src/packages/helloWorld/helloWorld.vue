<template>
  <h1 :style="{color: color}">{{msg}}</h1>
</template>

<script>
export default {
  name: 'ywHelloWorld',
  props: {
    color: {
      type: String,
      default: 'pink'
    },
    msg: {
      type: String,
      default: 'Hello World!'
    }
  },
  data () {
    return {}
  }
}
</script>

<style>
</style>
