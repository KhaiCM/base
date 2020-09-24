import Vue from "vue";
import axios from "axios";
import App from "./App";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapVue from 'bootstrap-vue';
import "@/assets/css/main.css";
import store from './store';
// import VeeValidate from 'vee-validate';
import veevalidate from './util/veevalidate'

Vue.config.productionTip = false;

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Vue.use(VeeValidate);
Vue.use(axios);
Vue.use(BootstrapVue);

new Vue({
  el: "#app",
  router,
  store,
  components: {
    App
  },
  template: "<App/>"
});
