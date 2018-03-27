// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../mui-master/dist/css/mui.css'
import NavBar from './components/common/navbar.vue'
import VuePreview from 'vue-preview'
Vue.config.productionTip = false
/* eslint-disable no-new */
// 必须声明
// 安装插件
Vue.use(Mint)
Vue.use(VuePreview)
Vue.component('navBar', NavBar)
Axios.defaults.baseURL = 'https://easy-mock.com/mock/5aaa4eeeb6dae8304b4e832f/ZGS/'

Vue.prototype.$axios = Axios

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
