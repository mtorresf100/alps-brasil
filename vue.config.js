module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  productionSourceMap: process.env.NODE_ENV !== 'production',
  publicPath: process.env.VUE_APP_PUBLIC_PATH,
  pages: {
    "index": {
      // entry for the page
      entry: 'src/main.js',
      title: process.env.VUE_APP_TITLE,
    }
  },
  integrity: true,
  pwa: {
    name: process.env.VUE_APP_TITLE,
    themeColor: '#ffffff',
    msTileColor: '#594d95',
    assetsVersion: process.env.VUE_APP_VERSION,
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestOptions: {
      short_name: process.env.VUE_DRAWER_TITLE,
      background_color: '#FFFFFF',
      icons: [
        {
          'src': './img/icons/android-chrome-36x36.png',
          'sizes': '36x36',
          'type': 'image/png'
        },
        {
          'src': './img/icons/android-chrome-48x48.png',
          'sizes': '48x48',
          'type': 'image/png'
        },
        {
          'src': './img/icons/android-chrome-72x72.png',
          'sizes': '72x72',
          'type': 'image/png'
        },
        {
          'src': './img/icons/android-chrome-96x96.png',
          'sizes': '96x96',
          'type': 'image/png'
        },
        {
          'src': './img/icons/android-chrome-144x144.png',
          'sizes': '144x144',
          'type': 'image/png'
        },
        {
          'src': './img/icons/android-chrome-192x192.png',
          'sizes': '192x192',
          'type': 'image/png',
        },
        {
          'src': './img/icons/android-chrome-256x256.png',
          'sizes': '256x256',
          'type': 'image/png',
        },
        {
          'src': './img/icons/android-chrome-384x384.png',
          'sizes': '384x384',
          'type': 'image/png',
        },
        {
          'src': './img/icons/android-chrome-512x512.png',
          'sizes': '512x512',
          'type': 'image/png',
        },
        {
          'src': './img/icons/android-chrome-maskable-36x36.png',
          'sizes': '36x36',
          'type': 'image/png',
          'purpose': 'maskable'
        },
        {
          'src': './img/icons/android-chrome-maskable-48x48.png',
          'sizes': '48x48',
          'type': 'image/png',
          'purpose': 'maskable'
        },
        {
          'src': './img/icons/android-chrome-maskable-72x72.png',
          'sizes': '72x72',
          'type': 'image/png',
          'purpose': 'maskable'
        },
        {
          'src': './img/icons/android-chrome-maskable-96x96.png',
          'sizes': '96x96',
          'type': 'image/png',
          'purpose': 'maskable'
        },
        {
          'src': './img/icons/android-chrome-maskable-144x144.png',
          'sizes': '144x144',
          'type': 'image/png',
          'purpose': 'maskable'
        },
        {
          'src': './img/icons/android-chrome-maskable-192x192.png',
          'sizes': '192x192',
          'type': 'image/png',
          'purpose': 'maskable'
        },
        {
          'src': './img/icons/android-chrome-maskable-256x256.png',
          'sizes': '256x256',
          'type': 'image/png',
          'purpose': 'maskable'
        },
        {
          'src': './img/icons/android-chrome-maskable-384x384.png',
          'sizes': '384x384',
          'type': 'image/png',
          'purpose': 'maskable'
        },
        {
          'src': './img/icons/android-chrome-maskable-512x512.png',
          'sizes': '512x512',
          'type': 'image/png',
          'purpose': 'maskable'
        },
      ],
    },
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: './src/service-worker.js',
      exclude: [/\.map$/],
      // dontCacheBustURLsMatching: /^\/(js|css).+[A-Za-z0-9]{8}\.(js|css)$/,
      maximumFileSizeToCacheInBytes: 5 * 1024 ** 2,
    },
  }
}
