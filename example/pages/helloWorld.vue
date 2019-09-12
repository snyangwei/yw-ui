<template>
  <div class="hello-world">
      <hello-world :color="color" :msg="msg"></hello-world>  
  </div>
</template>
<script>
import helloWorld from '@/packages/helloWorld/helloWorld'
export default {
    components: {
        helloWorld
    },
    data () {
        return {
            color: 'red',
            msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>

<style>
</style>
