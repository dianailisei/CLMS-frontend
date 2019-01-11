import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Axios.defaults.baseURL = process.env.API_ENDPOINT
window.Axios = Axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
