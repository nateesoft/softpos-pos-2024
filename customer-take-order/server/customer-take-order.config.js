module.exports = {
    apps: [{
      name: "customer-take-order",
      script: "customer-take-order/server/server.js",
      env: {
        WEB_PORT:3333,
        SERVICE_HOST:"http://127.0.0.1:9090/api",
        WEB_FOLDER:"custorder"
      }
    }]
  }