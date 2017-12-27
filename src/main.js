// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bulma/css/bulma.css'
import 'slick-carousel/slick/slick.css'
import ToggleButton from 'vue-js-toggle-button'
import SweetModal from 'sweet-modal-vue/src/plugin.js'
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate)
var VueFire = require('vuefire')

// explicit installation required in module environments
Vue.use(VueFire)
Vue.use(SweetModal)
Vue.use(ToggleButton)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
