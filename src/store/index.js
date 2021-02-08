import Vue from 'vue'
import Vuex from 'vuex'
import localForage from "localforage";
import VuexPersist from "vuex-persist";
import createStorageSync from 'vuex-storage-sync'

// Store functionality
import modules from './modules'

Vue.use(Vuex)

const vuexPersistEmitter = () => {
  return store => {
    store.subscribe(mutation => {
      if (mutation.type === "RESTORE_MUTATION") {
        store._vm.$root.$emit("storageReady");
      }
    });
  };
};

const debug = process.env.NODE_ENV !== "production";

localForage.config({
  name: process.env.VUE_APP_INDEX_DB_NAME || 'new_application',
  version: 1.0,
  storeName: process.env.VUE_APP_INDEX_DB_NAME || 'new_application',
  description: "Almacena de forma offline algunos atributos de la base de datos."
});

const vuexLocalStorage = new VuexPersist({
  strictMode: true,
  asyncStorage: true,
  key: process.env.VUE_APP_INDEX_DB_NAME || 'new_application',
  storage: localForage,
  modules: ['app']
});

// Create a new store
const store = new Vuex.Store({
  mutations: {
    RESTORE_MUTATION: vuexLocalStorage.RESTORE_MUTATION // this mutation **MUST** be named "RESTORE_MUTATION"
  },
  modules: {
    ...modules
  },
  plugins: [
    createStorageSync({
      // Allowed to snapshoting modules
      modules: modules,
    }),
    vuexPersistEmitter(),
    vuexLocalStorage.plugin,
  ],
  strict: debug
})


export default store
