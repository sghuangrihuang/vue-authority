<template>
  <div class="login-wrapper">
    <el-input type="text" placeholder="请输入用户名" v-model="username" clearable>
      <template slot="prepend">用户名</template>
    </el-input>
    <br>
    <el-input type="password" placeholder="请输入密码" v-model="password" clearable>
      <template slot="prepend">密▲码</template>
    </el-input>
    <br>
    <el-button type='primary' @click='loginIn' size='medium'>登录</el-button>
    <div>
      <p>username:admin password:any</p>
      <p>username:editor password:any</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username: 'admin',
      password: '123456'
    }
  },
  methods: {
    loginIn () {
      let fromData = {
        username: this.username,
        password: this.password
      }
      this.$store.dispatch('LoginIn', fromData).then(() => {
        this.$router.push({ path: '/' })
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
.login-wrapper {
  position: fixed;
  width: 520px;
  display: flex;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
  flex-direction: column;
}
</style>
