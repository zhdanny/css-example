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
  lintOnSave: process.env.NODE_ENV !== 'production',
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
