import Mock from 'mockjs'
import loginAPI from './login'

// 登陆
Mock.mock('/login/login', 'post', loginAPI.loginByUsername)

export default Mock
