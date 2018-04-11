// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import './assets/css/font-awesome.css'
import './mock'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './permission'

Vue.use(Element, { size: 'small' })
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
