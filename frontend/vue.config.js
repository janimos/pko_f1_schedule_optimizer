const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/',
  outputDir: '../src/main/resources/static', // Adjust the path according to your project structure
  assetsDir: 'static',
  filenameHashing: true,
  productionSourceMap: false, // Turn off source maps in production for security and performance

  devServer: {
    port: 8081,
    proxy: {
      '/schedules': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  }
});
