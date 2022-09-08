import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
// import TodoList from "./components/TodoList.vue";

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
