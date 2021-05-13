<template>
  <div class="smile-switch" :class="{'is-disabled':disabled,'is-checked':checked}">
    <span class="smile-switch__core" :style="{width,}" @click="handleClick" ref="core">
      <span class="smile-switch__inner"></span>
    </span>
    <input type="checkbox" class="smile-switch__input" ref="input" :name="name">
  </div>

</template>
<script>
export default {
  name: 'smile-switch',
  data: function () {
    return {
    }
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {
      default: false
    },
    width: {
      default: '40px'
    },
    activeColor: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    inactiveColor: {
      type: String,
      default: 'text'
    },
    activeValue: {
      default: true
    },
    inactiveValue: {
      default: false
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick () {
      if (this.disabled) {
        return false
      }
      const val = this.checked ? this.inactiveValue : this.activeValue
      this.$emit('change', val)
      this.$emit('input', val)
      this.$nextTick(() => {
        this.$refs.input.checked = this.checked
      })
      this.setColor()
    },
    handelInput (e) {
      this.$emit('input', e.target.value)
    },
    setColor () {
      if (this.activeColor || this.inactiveColor) {
        const color = this.checked ? this.activeColor : this.inactiveColor
        this.$refs.core.style.backgroundColor = color
        this.$refs.core.style.borderColor = color
      }
    }
  },
  computed: {
    checked () {
      return this.value === this.activeValue
    }
  },
  watch: {
    checked () {
      this.$refs.input.checked = this.checked
      this.setColor()
    }
  },
  mounted () {
    this.setColor()
    this.$refs.input.checked = this.checked
  }
}
</script>
