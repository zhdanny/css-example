module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      }
    }
  },
  devServer: {
    allowedHosts: [
      '.djtest.cn'
    ],
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/api': '',
        }
      }
    }
  }
}
