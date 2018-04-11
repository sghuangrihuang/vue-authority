<template>
  <el-col class='sidebar' :span="4">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>user</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index='1.0'>
            <router-link to='/user'>user</router-link>
          </el-menu-item>
          <el-menu-item index='1.1'>
            <router-link to='/user1'>user1</router-link>
          </el-menu-item>
          <el-menu-item index='1.2'>
            <router-link to='/user2'>user2</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="user">
        <i class="el-icon-menu"></i>
        <span slot="title">user</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</template>

<script>
export default {
  name: 'sidebar'
}
</script>

<style lang='stylus' scoped>
.sidebar
  position fixed
  width 200px
  top 0
  left 0
  height 100%
  overflow-x auto
  ul
    border none
  a
    display block
</style>
