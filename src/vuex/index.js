import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const vuex = new Vuex.Store({
  state: {
    lang: 'es',
    title: 'ttl_route_empire'
  },
  mutations: {
    title (state, title) {
      state.title = title
    }
  }
})

export default vuex
