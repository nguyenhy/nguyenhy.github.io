const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const isProduction = process.env.NODE_ENV === 'production'

const vueConfig = {
  chainWebpack: config => {
    config.externals({
      'vue': 'Vue',
      "vue-router": "VueRouter",
    })
  },
  configureWebpack: {
    plugins: [
    ]
  }
}

// vueConfig.configureWebpack.plugins.push(
//   new BundleAnalyzerPlugin()
// )


module.exports = vueConfig
