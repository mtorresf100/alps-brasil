import Vue from "vue";
import moment from "moment";

const Moment = function (Vue) {
  Object.defineProperties(Vue.prototype, {
    $moment: {
      get() {
        return moment;
      },
    },
  });
}

Vue.use(Moment);
