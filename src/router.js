import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import User from  './views/User.vue';
import Login from  './views/Login.vue';
import MsgCenter from  './views/MsgCenter';
import Search from  './views/Search';
import Detail from  './views/Detail';
import Order from  './views/Order';
import Address from  './views/Address';
import Cart from  './views/Cart';
import CategoryList from  './views/CategoryList';
import UserCollection from  './views/UserCollection';

Vue.use(Router);

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home},
    { path: '/user', name: 'user', component: User},
    { path: '/login', name: 'login', component: Login  },
    { path: '/msgCenter', name: 'msgCenter', component:MsgCenter  },
    { path: '/search', name: 'search', component:Search  },
    { path: '/detail', name: 'detail', component:Detail  },
    { path: '/order', name: 'order', component:Order  },
    { path: '/address', name: 'address', component:Address  },
    { path: '/cart', name: 'cart', component:Cart},
    { path: '/categoryList', name: 'categoryList', component:CategoryList},
    { path: '/userCollection', name: 'userCollection', component:UserCollection},
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
});
