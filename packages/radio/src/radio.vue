<template>
  <label class="smile-radio" :class="[
      { 'is-disabled': isDisabled },
      { 'is-focus': focus },
      { 'is-checked': model === label }
    ]" role="radio" :aria-checked="model === label" :aria-disabled="isDisabled" @keydown.space.stop.prevent="model = isDisabled ? model : label">
    <span class="smile-radio__input" :class="[{ 'is-checked': model === label }]">
      <span class="smile-radio__inner"></span>
      <input ref="radio" class="smile-radio__original" :value="label" type="radio" aria-hidden="true" v-model="model" @focus="focus = true" @blur="focus = false" @change="handleChange" :name="name" :disabled="isDisabled">
    </span>
    <span class="smile-radio__label" @keydown.stop>
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>
<script>
import Emitter from '../../../src/mixins/emitter'

export default {
  name: 'smile-radio',
  componentName: 'smile-radio',
  mixins: [Emitter],
  props: {
    value: {},
    label: {},
    disabled: Boolean,
    name: String,
    border: Boolean,
    size: String
  },

  data () {
    return {
      focus: false
    }
  },
  computed: {
    isGroup () {
      let parent = this.$parent
      while (parent) {
        if (parent.$options.componentName !== 'smile-radio-group') {
          parent = parent.$parent
        } else {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this._radioGroup = parent
          return true
        }
      }
      return false
    },
    isDisabled () {
      return this.isGroup
        ? this._radioGroup.disabled || this.disabled || (this.elForm || {}).disabled
        : this.disabled || (this.elForm || {}).disabled
    },
    model: {
      get () {
        return this.isGroup ? this._radioGroup.value : this.value
      },
      set (val) {
        if (this.isGroup) {
          this.dispatch('smile-radio-group', 'input', [val])
        } else {
          this.$emit('input', val)
        }
        this.$refs.radio && (this.$refs.radio.checked = this.model === this.label)
      }
    }
  },
  methods: {
    handleChange () {
      this.$nextTick(() => {
        this.$emit('change', this.model)
        this.isGroup && this.dispatch('smile-radio-group', 'handleChange', this.model)
      })
    }
  }
}
</script>
