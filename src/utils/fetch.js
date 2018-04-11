import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 请求拦截器
axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})

/**
 * 封装post请求
 * @param {string} url 请求地址
 * @param {object} params 参数
 * @returns {Promise}
 */

export function post (url, params = {}, config = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, params, config)
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

/**
 * 封装get请求
 * @param {string} url 请求地址
 * @param {object} params 参数
 * @returns {Promise}
 */

export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

/**
 * 封装patch请求
 * @param {string} url 请求地址
 * @param {object} data 参数
 * @returns {Promise}
 */

export function patch (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

/**
 * 封装put请求
 * @param {string} url 请求地址
 * @param {object} data 参数
 * @returns {Promise}
 */

export function put (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

export default {
  post (url, params, config) {
    return post(url, params, config)
  },
  get (url, params) {
    return get(url, params)
  }
}
