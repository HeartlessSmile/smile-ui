<template>
  <div class="smile-input" :class="{'is-disabled':disabled}">
    <input :name="name" class="smile-input__inner" :placeholder="placeholder" :type="type" :disabled="disabled" :value="value" @input="handelInput">
  </div>

</template>
<script>
export default {
  name: 'smile-input',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    }
  },
  modal: {
    prop: 'value',
    event: 'input'
  },
  methods: {
    handelInput (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>
