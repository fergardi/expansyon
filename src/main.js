import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import VueI18n from 'vue-i18n'
import VueFire from 'vuefire'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css'

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

/* eslint-disable no-new */
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
