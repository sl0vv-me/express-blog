import Vue from 'vue'
import Router from 'vue-router'

import * as components from '@components/_components'

Vue.use(Router)
export default new Router({
  routes: [
   {
     path: '/signup',
     component: components.Signup
   }
  ]
})
