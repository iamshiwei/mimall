import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import axios from "axios";
import VueAxios from "vue-axios";
import env from './env'

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

console.log(env.baseURL)
axios.defaults.baseURL = env.baseURL;
axios.defaults.timeout = 8000;
// 接口错误拦截
axios.interceptors.response.use(function (response) {
  let res = response.data;
  if (res.status == 0) {
    return res.data;
  } else if (res.status == 10) {
    window.location.href = "/#/login";
  } else {
    alert(res.msg);
  }
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
