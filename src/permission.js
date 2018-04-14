import router from './router'
import store from './store'

// 白名单
const whiteList = ['/login']

// 权限判断
function hasRoles (roles, permissionRoles) {
  return roles.some(role => permissionRoles.indexOf(role) >= 0)
}
// 后期处理：asyncRouterMap根据权限进行过滤

router.beforeEach((to, from, next) => {
  if (store.getters.token) { // 判断是否有token
    if (to.path === '/login') { // 直接调到首页
      next({ path: '/' })
    } else {
      if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息
        store.dispatch('GetUserInfo').then(() => { // 获取用户信息
          store.dispatch('GenerateRoutes', 1).then(() => { // 为vuex路由
            router.addRoutes(store.getters.addRouters)
            next({ ...to, replace: true })
          })
        })
      } else {
        if (to.meta && to.meta.role) { // 判断页面是否需要权限
          if (hasRoles(store.getters.roles, to.meta.role)) { // 有权限
            next()
          } else { // 无权限
            next({ path: '/error/401', replace: true })
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
