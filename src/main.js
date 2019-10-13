import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.config.productionTip = false

import list from './components/list.vue'
import cart from './components/cart.vue'

const routes = [
  {path:'/list',component:list},
  {path:'/cart',component:cart},
  {path:'/',redirect:'/list'},
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
