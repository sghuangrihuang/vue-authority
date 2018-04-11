import router from './router'
import { asyncRouterMap } from '@/router'

// 白名单
const whiteList = ['/login']

var userInfo = localStorage.getItem('userInfo')

// 页面重新刷新会把原本的vue-router重新初始化一般，这里就强制
// 后期会采用vuex进行存储Routes
// 后期处理：asyncRouterMap根据权限进行过滤
if (userInfo && typeof userInfo === 'string') {
  userInfo = JSON.parse(userInfo)
  if (userInfo.roles) {
    router.addRoutes(asyncRouterMap)
  }
}

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  const roles = localStorage.getItem('roles')
  localStorage.getItem('userInfo')
  if (token) { // 判断是否有token
    if (to.path === '/login') { // 直接调到首页
      next({ path: '/' })
    } else {
      if (!roles) { // 判断当前用户是否已拉取完user_info信息
        localStorage.roles = JSON.parse(localStorage.getItem('userInfo')).roles
        router.addRoutes(asyncRouterMap) // 动态添加可访问路由表
        next({ ...to, replace: true })
      } else {
        if (to.meta && to.meta.role) { // 判断页面是否需要权限
          const toRole = to.meta.role
          if (toRole.indexOf(roles) !== -1) { // 有权限
            next()
          } else { // 无权限
            next({ path: '/error/401' })
          }
        } else { // 无需权限访问直接跳入
          next()
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) { // 白名单直接跳入，否则无限重定向
      next()
    } else {
      next('/login')
    }
  }
})
