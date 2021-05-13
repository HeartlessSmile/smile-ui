<template>
  <div class="smile-tabs">
    <div class="smile-tabs__nav" ref="nav">
      <div ref="line" class="smile-tabs__line"></div>
      <div class="smile-tabs__item" :class="[activeName == item.name? 'is-active' : '']" @click="changeTab($event,item,index)" v-for="(item,index) in childList" :key="index">{{item.label}}</div>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'smile-tabs',
  data () {
    return {
      childList: [] // 将初始化tab赋值给activeKey
    }
  },
  model: {
    prop: 'activeName',
    event: 'input'
  },
  // 获取子组件传过来的激活tab
  props: {
    activeName: {
      type: String,
      default: '1'
    }
  },
  mounted () {
    // 循环tab标签
    this.childList = this.$children
    setTimeout(() => {
      this.scrollToActiveTab()
      this.$children.map((item) => {
        if (item.name === this.activeName) {
          item.show = true
        } else {
          item.show = false
        }
      })
    }, 0)
  },
  methods: {

    // 切换tab触发事件
    changeTab (event, item, index) {
      this.$emit('input', item.name)
      this.$emit('tab-click', item, index)// 将切换tab的事件暴露给父组件
    },
    // 初始化时tab状态设置与相应内容显示
    updateNav () {
      this.$children.map(function (item, index) {
        if (item.name === self.activeKey) {
          item.show = true
          this.$nextTick(function () {
            this.scrollToActiveTab(false)
          })
        } else {
          item.show = false
        }
      })
    },
    scrollToActiveTab (transition = true) {
      const activeTab = this.$el.querySelector('.is-active')
      const navel = this.$refs.nav
      if (!activeTab) return
      const navTabBounding = navel.getBoundingClientRect()

      const activeTabBounding = activeTab.getBoundingClientRect()
      const width = activeTabBounding.width - 32
      const left = activeTabBounding.left + 16 - navTabBounding.left
      this.$refs.line.style.width = width + 'px'
      this.$refs.line.style.transform = 'translateX(' + left + 'px)'
      if (transition) {
        this.$refs.line.style.transition = 'transform .3s'
      } else {
        this.$refs.line.style.transition = 'transform 0s'
      }
    }

  },
  watch: {
    // 监听当前tab,显示相应内容
    activeName () {
      this.$nextTick(function () {
        this.scrollToActiveTab()
      })
      this.$children.map((item) => {
        if (item.name === this.activeName) {
          item.show = true
        } else {
          item.show = false
        }
      })
    }
  }
}
</script>
