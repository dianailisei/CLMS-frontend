import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue);
const schedule = Axios.create({
  baseURL: 'https://localhost:44385'
});
const attendance = Axios.create({
  baseURL: 'https://localhost:44319'
});
const trivia = Axios.create({
  baseURL: 'https://localhost:44337'
});

window.Schedule = schedule
window.Attendance = attendance
window.Trivia = trivia
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

