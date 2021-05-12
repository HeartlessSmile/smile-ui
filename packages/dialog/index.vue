<template>
<transition name="dialog-fade">
  <div class="smile-dialog__wrapper" v-show="visible" @click.self="handleClose">
    <div class="smile-dialog" :style="{width,marginTop:top}">
      <div class="smile-dialog__header">
        <slot v-if="showClose" name="title">
          <span class="smile-dialog__title">{{title}}</span>
        </slot>
        <slot v-if="showClose" name="close">
          <span class="smile-dialog__close" @click="handleClose">x</span>
        </slot>
      </div>
      <div class="smile-dialog__content">
        <slot>我是content</slot>
      </div>
      <div v-if="showFooter" class="smile-dialog__footer">
        <slot name="footer">
          <span @click="handleClose" class="smile-dialog__footer__close">取消</span>
          <smile-button @click="handleSure" type="primary" class="smile-dialog__footer__sure">确认</smile-button>
        </slot>
      </div>
    </div>
  </div>
</transition>
</template>
<script>
export default {
  name: 'smile-dialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '标题'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    showClose: {
      type: Boolean,
      default: true
    },
    showFooter: {
      type: Boolean,
      default: true
    }
  },
  model: {
    prop: 'visible',
    event: 'close'
  },
  methods: {
    handleClose () {
      this.$emit('close', false)
    },
    handleSure () {
      this.$emit('sure')
    }
  }
}
</script>
