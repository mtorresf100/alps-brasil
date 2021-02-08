import Vue from "vue";
import { extend, ValidationObserver, ValidationProvider, localize } from "vee-validate";
import es from 'vee-validate/dist/locale/es.json';
import * as rules from "vee-validate/dist/rules";

localize('es', es);

Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

Vue.component("validation-provider", ValidationProvider);
Vue.component("validation-observer", ValidationObserver);
