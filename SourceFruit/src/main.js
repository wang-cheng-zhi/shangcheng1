// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from "mint-ui"
import 'mint-ui/lib/style.css'
import "./assets/font/iconfont.css"
import "./assets/font/iconfont.eot"
import "./assets/font/iconfont.ttf"
import "./assets/font/iconfont.woff"

import * as fliter from './assets/js/fliter.js'
 
Object.keys(fliter).forEach(key => {
    Vue.filter(key, fliter[key])
})








Vue.config.productionTip = false
Vue.use(MintUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

