import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/";

import "./registerServiceWorker";

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

Vue.config.productionTip = false;

import "./style/app.scss";
import "bootstrap/dist/css/bootstrap.min.css";


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
