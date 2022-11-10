const { createProxyMiddleware } = require('http-proxy-middleware')

const proxy = {
   target: 'https://kulony-backend.herokuapp.com',
   changeOrigin: true
}

module.exports = function(app) {
   app.use(
      '/api',
      createProxyMiddleware(proxy)
   )
}