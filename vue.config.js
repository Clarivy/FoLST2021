module.exports = {
  chainWebpack: config=>{
    config.plugins.delete('prefetch')
  },
  productionSourceMap: false,
  "transpileDependencies": [
    "vuetify"
  ],
  pwa: {
    name: 'FoLST 2021',
    workboxPluginMode: 'InjectManifest',
    themeColor: '#3F51B5',
    msTileColor: '#3F51B5',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestOptions: {
      background_color: "#ffffff"
    },
    workboxOptions: {
      swSrc: './src/sw.js',
      swDest: 'service-worker.js',
    },
  }
}
