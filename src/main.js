import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import VueI18n from 'vue-i18n'
import VueFire from 'vuefire'
import Vuecidity from 'vuecidity'
import '../node_modules/vuecidity/dist/lib/vuecidity.min.css'

// uses
Vue.use(VueI18n)
Vue.use(VueFire)
Vue.use(Vuecidity)

/* eslint-disable no-new */
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
