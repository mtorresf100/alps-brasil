import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

Vue.axios.defaults.withCredentials = true;
Vue.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
Vue.axios.defaults.headers.common["Accept"] = "application/json";
Vue.axios.defaults.headers.common["Content-Type"] = "application/json";

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  Vue.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
}

window.CancelToken = Vue.axios.CancelToken;
window.source = null;
