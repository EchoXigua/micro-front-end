const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    output: {
      library: 'vueApp',
      libraryTarget: 'umd'
    }
  },
  devServer: {
    port: 4000,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
})
