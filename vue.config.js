const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const vueConfig = {
    chainWebpack: config => {
        config.externals({
            'vue': 'Vue',
            "vue-router": "VueRouter",
        })
    },
    configureWebpack: {
        plugins: [
            new BundleAnalyzerPlugin()
        ]
    }
}


module.exports = vueConfig