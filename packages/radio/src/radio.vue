<template>
  <div>radio</div>
</template>
<script>
export default {
  name: 'smile-radio',
  props: {
    value: {
      type: [Boolean, String, Number],
      default: false
    }
  },
  methods: {
    onClick (e) {
      if (!this.disabled) {
        this.$emit('click', e)
      }
    }
  }
}
</script>
