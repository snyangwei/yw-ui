<template>
  <div class="switch">
    <div class="title">less测试</div>
    <span><slot></slot></span>

    <div :class="[{closed: !checked}, 'switch-box']"
      @click="handleChange(value)">
      <span :class="{closed: !checked}"></span>
    </div>

    <input
    type="checkbox"
    @change="handleChange"
    :true-value="activeValue"
    :false-value="inactiveValue"
    :disabled="disabled"
    :value="value">
  </div>
</template>

<script>
export default {
  name: 'ywSwitch',
  data () {
    return {}
  },
  props: {
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    activeValue: {
      type: [Boolean, String, Number],
      default: true
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    checked () {
      return this.value === this.activeValue
    }
  },
  methods: {
    handleChange (value) {
      this.$emit('input', !this.checked ? this.activeValue : this.inactiveValue)
    }
  }
}
</script>

<style lang="less" scoped>
.switch {
  display: inline-block;
  .title {
    color: #000;
    font-size: 20px;
  }
}

.switch > span,
.switch > div {
    float: left;
}
.switch input {
    display: none;
}

.switch-box {
  width: 40px;
  height: 20px;
  background-color: rgb(19, 206, 102);
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 0 2px;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  margin-left: 6px;
}

.switch-box.closed {
    background-color: rgb(255, 73, 73);
}

.switch-box span {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: inline-block;
    background-color: #fff;
    position: absolute;
    left: 22px;
    transition: 200ms;
}

.switch-box span.closed {
      left: 2px;
}
</style>
