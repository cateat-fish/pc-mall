import Vue from "vue";
import App from './App.vue';
import router from './router.js';
import store from './store';
import PopUp from 'vc-popup';
import Distpicker from 'v-distpicker'
 
Vue.component('v-distpicker', Distpicker)
import 'vc-popup/lib/style.css';
import 'swiper/css/swiper.min.css';

Vue.use(PopUp);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
