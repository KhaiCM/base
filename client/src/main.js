import Vue from "vue";
import axios from "axios";
// import VueRouter from '.vue-router';
import App from "./App";
import router from "./router";
// import {
//   BootstrapVue,
//   IconsPlugin
// } from 'bootstrap-vue/dist/bootstrap-vue.esm'
import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap-vue/dist/bootstrap-vue.css';
import "@/assets/css/main.css";
// import store from './store';

Vue.config.productionTip = false;

// Vue.use(VueRouter);
// Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)

// const router = new VueRouter({

//   routes,
// });

new Vue({
  el: "#app",
  router,
  // store,
  components: {
    App
  },
  template: "<App/>"
});
