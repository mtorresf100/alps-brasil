import AxiosInterceptorMixin from "./axios";

export default {
  install(Vue) {
    Vue.use( AxiosInterceptorMixin );
  }
}
