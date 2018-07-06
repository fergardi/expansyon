import Vue from 'vue'
import Router from 'vue-router'
import store from '@/vuex'

Vue.use(Router)

let router = new Router({
  routes: [
    { path: '/', redirect: '/galaxy' },
    { path: '/login', name: 'ttl_route_login', component: () => import('@/views/login') },
    { path: '/galaxy', name: 'ttl_route_galaxy', component: () => import('@/views/galaxy') },
    { path: '/cosmos', name: 'ttl_route_cosmos', component: () => import('@/views/cosmos') },
    { path: '/empire', name: 'ttl_route_empire', component: () => import('@/views/empire') },
    { path: '/infrastructure', name: 'ttl_route_infrastructure', component: () => import('@/views/infrastructure') },
    { path: '/bestiary', name: 'ttl_route_bestiary', component: () => import('@/views/bestiary') },
    { path: '/tree', name: 'ttl_route_tree', component: () => import('@/views/tree') },
    { path: '*', redirect: '/' }
  ]
})

router.beforeEach((to, from, next) => {
  store.commit('title', to.name)
  next()
})

export default router
