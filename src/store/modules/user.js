import { loginByUsername } from '@/api/login'

const user = {
  state: {
    userInfo: {},
    token: '' || localStorage.getItem('token'),
    roles: []
  },
  // commit触发
  mutations: {
    SET_USERINFO (state, userInfo) {
      state.userInfo = userInfo
    },
    SET_ROLES (state, roles) {
      state.roles = roles
    },
    SET_TOKEN (state, token) {
      state.token = token
    }
  },
  // this.$store.dispatch(eventName, params)触发
  actions: {
    // 登录
    LoginIn ({commit}, userInputData) {
      return new Promise((resolve, reject) => {
        loginByUsername(userInputData.username, userInputData.password).then((res) => {
          const data = res.data
          localStorage.token = 'token1'
          localStorage.userInfo = JSON.stringify(data)
          commit('SET_USERINFO', data)
          commit('SET_TOKEN', data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 退出登录
    // 后续会根据token进行退出登录
    LoginOut ({commit}) {
      localStorage.token = ''
      localStorage.userInfo = {}
      commit('SET_USERINFO', {})
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
    },
    // 获取用户信息
    // 后续会根据token进行操作，以及代码优化，BUG调整
    GetUserInfo ({commit}) {
      return new Promise((resolve, reject) => {
        let userInfo = localStorage.getItem('userInfo')
        const data = userInfo ? JSON.parse(userInfo) : ''
        commit('SET_USERINFO', data)
        commit('SET_ROLES', data.roles)
        resolve()
      })
    }
  }
}

export default user
