// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
// import VueRouter from '.vue-router';
import App from './App';
import router from './router';
// import store from './store';

Vue.config.productionTip = false

/* eslint-disable no-new */
// Vue.use(VueRouter);

// const router = new VueRouter({
  
//   routes,       
// });


new Vue({
  el: '#app',
  router,
  // store,
  components: { App },
  template: '<App/>'
})
