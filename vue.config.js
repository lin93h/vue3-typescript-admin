module.exports = {
  devServer: {
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: 'https://report-test.fjrst.cn',
        changeOrigin: true,
        ws: true,
        logLevel: 'debug'
      }
    }
  }
}