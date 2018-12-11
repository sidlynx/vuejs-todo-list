import Vue from "vue";
import Router from "vue-router";
import routes from "./routes/index";
Vue.use(Router);


let router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  next();
  /*
  let connected = !!localStorage.getItem("uuid");
  if (connected) {
    if (to.name === "guest") { next({ name: "home" }); }
    else { next(); }
  }
  else {
    if (to.name !== "guest") { next({ name: "guest" }); }
    else { next(); }
  }
  */
})

export default router;
