import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import store from './vuex/store'
import routes from './router'
import VueMaterial from 'vue-material'

import axios from './interceptors'
import '../node_modules/vue-material/dist/vue-material.css'
import './assets/css/material-icons.css'

axios.defaults.baseURL = '/mobile/api'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

Vue.config.productionTip = false
Vue.use(axios)
Vue.use(VueRouter)
Vue.use(VueMaterial)

const router = new VueRouter({
  routes: routes()
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if ((to.path !== '/login') && (!localStorage.getItem('access-token') || localStorage.getItem('access-token') === 'undefined' || localStorage.getItem('access-token') === null)) {
//       next({
//         path: '/login',
//         query: {redirect: to.fullPath}
//       })
//     } else {//
//        next()
//     }
//   } else {
//     next()
//   }
// })
