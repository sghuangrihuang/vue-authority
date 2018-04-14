const getters = {
  userInfo: state => state.user.userInfo,
  token: state => state.user.token,
  roles: state => state.user.roles,
  addRouters: state => state.permission.addRouters
}
export default getters
