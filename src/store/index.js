import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


import mutations from "./mutations";
export default new Vuex.Store({
  state: {
    me: {
      firstName: "Mohammed",
      lastName: "Hamdoune"
    }
  },
  mutations,
  actions: {

  }
});
