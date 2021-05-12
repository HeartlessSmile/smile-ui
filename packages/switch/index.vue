<template>
  <div class="smile-switch" :class="{'is-disabled':disabled,'is-checked':checked}">
    <span class="smile-switch__core" :style="{width,}" @click="handleClick" ref="core">
      <span class="smile-switch__inner"></span>
    </span>
    <input type="checkbox" class="smile-switch__input" :checked="checked" :name="name">
  </div>

</template>
<script>
export default {
  name: 'smile-switch',
  data: function () {
    return {
      checked: false
    }
  },
  model: {
    prop: 'value',
    event: 'change'
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
      this.checked = !this.checked
      this.$emit('change', this.checked ? this.activeValue : this.inactiveValue)
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
    },
    initChecked () {
      if (this.value === this.activeValue) {
        this.checked = true
      } else {
        this.checked = false
      }
    }
  },
  mounted () {
    this.initChecked()
    this.setColor()
  }
}
</script>
