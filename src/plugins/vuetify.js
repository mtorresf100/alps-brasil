import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import "@/sass/main.sass";
import es from 'vuetify/es5/locale/es';
import theme from "./theme";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: theme,
      dark: theme
    },
  },
  lang: {
    locales: { es },
    current: 'es',
  },
  icons: {
    iconfont: 'mdi',
  }
});
