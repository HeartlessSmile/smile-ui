<template>
  <component :is="_elTag" class="el-radio-group" role="radiogroup">
    <slot></slot>
  </component>
</template>
<script>

export default {
  name: 'smile-radio-group',
  componentName: 'smile-radio-group',
  props: {
    value: {},
    size: String,
    fill: String,
    disabled: Boolean
  },

  computed: {
    _elFormItemSize () {
      return (this.elFormItem || {}).elFormItemSize
    },
    _elTag () {
      return (this.$vnode.data || {}).tag || 'div'
    },
    radioGroupSize () {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size
    }
  },
  mounted () {
    // 当radioGroup没有默认选项时，第一个可以选中Tab导航
    const radios = this.$el.querySelectorAll('[type=radio]')
    const firstLabel = this.$el.querySelectorAll('[role=radio]')[0]
    if (![].some.call(radios, radio => radio.checked) && firstLabel) {
      firstLabel.tabIndex = 0
    }
  },
  created () {
    this.$on('handleChange', value => {
      this.$emit('change', value)
    })
  },
  methods: {
  }
}
</script>
