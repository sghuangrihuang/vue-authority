<template>
  <div class='layout'>
    <sidebar></sidebar>
    <div class='main-container'>
      <el-button type="danger" @click='Sign'>Sign Out</el-button>
      <div class='app-main'>
        <router-view :key="key"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from '@/views/sidebar'

export default {
  name: 'layout',
  computed: {
    // 通过设置key 进而重新渲染触发钩子，但每次都重新创建组件
    // 也可以通过数据获取官方提供的数据获取方式
    // https://router.vuejs.org/zh-cn/advanced/data-fetching.html
    key () {
      return this.$route.name !== undefined
        ? this.$route.name + +new Date()
        : this.$route + +new Date()
    }
  },
  methods: {
    Sign () {
      localStorage.token = ''
      localStorage.userInfo = ''
      this.$router.push('/login')
    }
  },
  components: {
    sidebar
  }
}
</script>

<style lang='stylus' scoped>
.main-container
  position relative
  min-height 100%
  margin-left 200px
</style>
