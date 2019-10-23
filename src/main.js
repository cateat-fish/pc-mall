import Vue from "vue";
import App from './App.vue';
import router from './router.js';
import store from './store';
 
import NoData from "./components/NoData/NoData.vue"
Vue.component('NoData',NoData)

import 'swiper/css/swiper.min.css';


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
