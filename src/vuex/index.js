import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const vuex = new Vuex.Store({
  state: {
    lang: 'es',
    title: 'ttl_route_login',
    uid: 'wYjCn812F7hxQsOF8VMdTe1cgGp2'
  },
  mutations: {
    title (state, title) {
      state.title = title
    },
    uid (state, uid) {
      state.uid = uid
    }
  }
})

export default vuex
