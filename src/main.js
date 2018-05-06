import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import Vuecidity from 'vuecidity'
import '../node_modules/vuecidity/dist/lib/vuecidity.min.css'

// uses
Vue.use(Vuecidity)
Vue.use(VueFire)

/* eslint-disable no-new */
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
