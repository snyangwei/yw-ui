<template>
  <div id="app">
    <yw-hello-world :color="color" :msg="msg"></yw-hello-world>
    <yw-switch
    v-model="lightSwitch">开关:</yw-switch>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      color: 'blue',
      msg: 'hello world',
      lightSwitch: false
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
