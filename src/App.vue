<template>
  <div id="app">
    <!-- <smile-button type="primary" @click="visible= true">点击</smile-button>
    <smile-dialog v-model="visible" />
    <smile-switch v-model="value"></smile-switch>
    <smile-input /> -->
    <smile-radio-group v-model="value">
      <smile-radio label="1">备选项</smile-radio>
      <smile-radio label="2">备选项</smile-radio>
    </smile-radio-group>

     <!-- <smile-radio v-model="value" label="2">kkk</smile-radio> -->

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
