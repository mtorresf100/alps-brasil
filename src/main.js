import Vue from 'vue'

import "./plugins"

import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify';

//Mixins
import GlobalMixins from "./mixins";
Vue.use( GlobalMixins );

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
