import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/galaxy' },
    { path: '/galaxy', name: 'Galaxy', component: () => import('@/views/galaxy') }
  ]
})
