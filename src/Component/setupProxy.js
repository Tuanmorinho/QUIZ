const { createProxyMiddleware } = require("http-proxy-middleware")
const { default: APP_CONSTANTS } = require("../Constants/appConstants")

module.exports = app => {
    app.use(
        createProxyMiddleware('/',
            {
                target: APP_CONSTANTS.API_BASE_URL,
                changeOrigin: true
            })
    )
}