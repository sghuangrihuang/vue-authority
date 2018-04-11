<template>
  <div>
    <el-button type='primary' @click='loginIn'>登录</el-button>
    <div class="flex">
      <div class="item">1</div>
      <div class="item">1</div>
      <div class="item">1</div>
      <div class="item">1</div>
      <div class="item">1</div>
      <div class="item">1</div>
      <div class="item">1</div>
    </div>
  </div>
</template>

<script>
import { loginByUsername } from '@/api/login'

export default {
  name: 'login',
  methods: {
    loginIn () {
      loginByUsername('admin', '1').then((res) => {
        localStorage.token = 'token1'
        localStorage.userInfo = JSON.stringify(res.data)
        this.$router.push({ path: '/' })
      })
    }
  }
}
</script>

<style scoped>
.flex {
  display: flex;
  flex-wrap: wrap;
}
.item {
  flex: 0 0 20%;
  width: 20%;
  height: 0;
  padding-bottom: 20%;
  margin: 2.5%;
  background: red;
  box-sizing: border-box;
}
</style>
