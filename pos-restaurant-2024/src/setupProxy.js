require('dotenv').config();
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    const serviceHost = process.env.SERVICE_HOST
    app.use(
        '/api',
        createProxyMiddleware({
            target: `${serviceHost}`,
            changeOrigin: true,
        })
    );
};
