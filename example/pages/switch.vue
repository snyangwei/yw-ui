<template>
  <div class="switch">
      <switch-ui v-model="lightSwitch">开关:</switch-ui> 
  </div>
</template>
<script>
import switchUi from '@/packages/switch/switch'
export default {
    components: {
        switchUi
    },
    data () {
        return {
            lightSwitch: false
        }
    }
}
</script>
<style>
.switch {
    width: 100px;
    height: 100px;
    background-color: #0f0;
}
</style>
