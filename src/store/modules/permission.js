import { asyncRouterMap, constantRouterMap } from '@/router'

const permission = {
  state: {
    // 初始化路由信息
    routers: constantRouterMap,
    // 添加路由信息
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    },
    CLEAR_ROUTERS: (state) => {
      state.routers = constantRouterMap
      state.addRouters = []
    }
  },
  actions: {
    // 设置路由
    GenerateRoutes ({commit}, data) {
      return new Promise((resolve, reject) => {
        commit('SET_ROUTERS', asyncRouterMap)
        resolve()
      })
    },
    // 清空路由
    ClearRoutes ({commit}) {
      commit('CLEAR_ROUTERS')
    }
  }
}

export default permission
