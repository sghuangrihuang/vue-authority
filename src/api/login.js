// import { post } from '../utils/fetch'
import axios from 'axios'

export function loginByUsername (username, password) {
  const data = {
    username,
    password
  }
  // return post('/login/login', data)
  return axios({
    url: '/login/login',
    method: 'post',
    data
  })
}
