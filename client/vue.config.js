module.exports = {
  //https://cli.vuejs.org/config/
  productionSourceMap: false,
  //https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwaage/@vue/cli-plugin-pwa/v/3.0.0-rc.1
  pwa: {
    name: "Jefferson Center for the Arts",
    themeColor: "#ffffff",
    msTileColor: "#000000",
    iconPaths: {
      favicon32: "img/icons/favicon-32x32.png",
      favicon16: "img/icons/favicon-16x16.png",
      appleTouchIcon: "img/icons/apple-touch-icon-152x152.png",
      maskIcon: "img/icons/safari-pinned-tab.svg",
      msTileImage: "img/icons/icon-144x144.png"
    },
    //https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin
    workboxOptions: {
      navigateFallback: "/index.html",
      exclude: [/\.map$/, /^manifest.*\.js(?:on)?$/,/img\/media/,/img\/icons/,/img\/video/,/^google/,/^robots/,/^sitemap/]
    }
  }
};
