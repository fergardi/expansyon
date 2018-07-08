import Vue from 'vue'
import Router from 'vue-router'
import store from '@/vuex'

Vue.use(Router)

let router = new Router({
  routes: [
    { path: '/', redirect: '/galaxy' },
    { path: '/login', name: 'ttl_route_login', component: () => import('@/views/login') },
    { path: '/galaxy', name: 'ttl_route_galaxy', component: () => import('@/views/galaxy') },
    { path: '/army', name: 'ttl_route_army', component: () => import('@/views/army') },
    { path: '/empire', name: 'ttl_route_empire', component: () => import('@/views/empire') },
    { path: '/hangar', name: 'ttl_route_hangar', component: () => import('@/views/hangar') },
    { path: '/infrastructure', name: 'ttl_route_infrastructure', component: () => import('@/views/infrastructure') },
    { path: '/shop', name: 'ttl_route_shop', component: () => import('@/views/shop') },
    { path: '/artifacts', name: 'ttl_route_artifacts', component: () => import('@/views/artifacts') },
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
