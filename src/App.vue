<template>
  <div id="app">
    <smile-button type="primary" @click="visible= true">点击</smile-button>
    <smile-dialog v-model="visible" />
    <smile-switch v-model="value"></smile-switch>
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      value: true,
      visible: false
    }
  },
  methods: {
    handleClick (key) {
    },
    handelChange (value) {
      console.log(value)
    }
  }
}
</script>

<style lang="scss">
</style>
