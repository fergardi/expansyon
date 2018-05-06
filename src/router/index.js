import Vue from 'vue'
import Router from 'vue-router'
import store from '@/vuex'

Vue.use(Router)

let router = new Router({
  routes: [
    { path: '/', redirect: '/empire' },
    { path: '/galaxy', name: 'ttl_route_galaxy', component: () => import('@/views/galaxy') },
    { path: '/empire', name: 'ttl_route_empire', component: () => import('@/views/empire') }
  ]
})

router.beforeEach((to, from, next) => {
  store.commit('title', to.name)
  next()
})

export default router
