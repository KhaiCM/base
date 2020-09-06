import Vue from "vue";
import axios from "axios";
import App from "./App";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/css/main.css";
import store from './store';
import VeeValidate from 'vee-validate';

Vue.config.productionTip = false;

Vue.use(VeeValidate);
Vue.use(axios);

new Vue({
  el: "#app",
  router,
  store,
  components: {
    App
  },
  template: "<App/>"
});
