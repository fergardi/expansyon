import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const vuex = new Vuex.Store({
  state: {
    lang: 'es',
    title: 'ttl_galaxy'
  },
  mutations: {
    title (state, title) {
      state.title = title
    }
  }
})

export default vuex
