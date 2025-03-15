module.exports = {
    apps: [{
      name: "customer-take-order1",
      script: "customer-take-order/server/server.js",
      env: {
        WEB_PORT:3334,
        SERVICE_HOST:"http://127.0.0.1:9093/api",
        WEB_FOLDER:"custorder1"
      }
    }]
  }