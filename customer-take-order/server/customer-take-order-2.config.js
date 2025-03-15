module.exports = {
    apps: [{
      name: "customer-take-order2",
      script: "customer-take-order/server/server.js",
      env: {
        WEB_PORT:3335,
        SERVICE_HOST:"http://127.0.0.1:9092/api",
        WEB_FOLDER:"custorder2"
      }
    }]
  }