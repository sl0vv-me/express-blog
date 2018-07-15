import Vue from 'vue'
import router from './router'
import axios from 'axios'
import qs from 'qs'
import VueAxios from 'vue-axios'

import App from './App'
import * as elements from '@components/_elements'

for (let name in elements) Vue.component('c-' + name.toLowerCase(), elements[name])

const apiAxios = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  validateStatus: null
})
apiAxios.interceptors.request.use(req => {
  // Do something before request is sent
  req.data = qs.stringify(req.data)
  return req;
});
Vue.use(VueAxios, apiAxios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { 
    App
  },
  template: '<App/>'
})
