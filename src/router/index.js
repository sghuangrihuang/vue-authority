import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/Layout/Layout'

function _import (file) {
  return require('@/views/' + file + '.vue').default
}

Vue.use(Router)

// 路由
export const constantRouterMap = [
  { path: '/login', name: 'login', component: _import('login/index') },
  { path: '/404', name: '404', component: _import('error/404') },
  { path: '/401', name: '401', component: _import('error/401') },
  {
    path: '',
    redirect: 'home',
    component: Layout,
    children: [
      { path: 'home', name: 'home', component: _import('home/index') }
    ]
  }
]

export default new Router({
  routes: constantRouterMap
})

// 异步路由
export const asyncRouterMap = [
  {
    path: '/user',
    component: Layout,
    redirect: '/user/index',
    children: [
      { path: 'index', name: 'user', meta: { role: ['admin', 'editor'] }, component: _import('user/index') }
    ]
  },
  {
    path: '/user1',
    component: Layout,
    redirect: '/user1/index',
    children: [
      { path: 'index', name: 'user1', meta: { role: ['admin'] }, component: _import('user/user1') }
    ]
  },
  {
    path: '/user2',
    component: Layout,
    redirect: '/user2/index',
    children: [
      { path: 'index', name: 'user2', meta: { role: ['editor'] }, component: _import('user/user2') }
    ]
  },
  {
    path: '/error',
    component: Layout,
    children: [
      { path: '401', component: _import('error/401'), name: 'page401', meta: { title: 'page401', noCache: true } },
      { path: '404', component: _import('error/404'), name: 'page404', meta: { title: 'page404', noCache: true } }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]
