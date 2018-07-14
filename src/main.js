import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import VueI18n from 'vue-i18n'
import VueFire from 'vuefire'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css'
import { auth } from '@/services/firebase'
import store from '@/vuex'

// uses
Vue.use(Vuesax, {
  theme: {
    colors: {
      primary: '#2196f3',
      success: '#4caf50',
      danger: '#b71c1c',
      warning: '#ffc107',
      dark: '#9c27b0'
    }
  }
})
Vue.use(VueI18n)
Vue.use(VueFire)

const messages = {
  es: require('@/lang/es.json'),
  en: require('@/lang/en.json')
}

const i18n = new VueI18n({
  locale: 'es',
  messages
})

// login
auth.onAuthStateChanged(status => {
  if (auth.currentUser !== null) {
    store.commit('uid', auth.currentUser.uid)
  }
})

/* eslint-disable no-new */
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  i18n
})
