/**
 * Mixin for loading states
 */

const AxiosInterceptorMixin = {
  install(Vue) {
    Vue.mixin({
      mounted() {
        const token = this.$store ? this.$store.getters['user/getToken'] : null;
        if (token) {
          this.axios.defaults.headers.common['Authorization'] = token
        }
      },
    })
  }
}

export default AxiosInterceptorMixin;
