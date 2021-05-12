<template>
  <div id="app">
    <smile-button type="primary" @click="visible= true">点击</smile-button>
    <smileDialog v-model="visible" />
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      value: '1',
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
