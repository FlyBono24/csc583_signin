import Vue from 'vue'
import Vuex from 'vuex'
import VeeValidate from 'vee-validate'
import VueRouter from 'vue-router'
import store from './store'

Vue.use(VeeValidate)
Vue.use(VueRouter)
import Admin from './components/Admin.vue'
import Visitor from './components/Visitor.vue'
import { Validator } from 'vee-validate';
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/admin', component: Admin },
    { path: '/', component: Visitor }
  ]
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
    
})
