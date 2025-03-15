module.exports = {
    apps: [{
      name: "customer-take-order3",
      script: "customer-take-order/server/server.js",
      env: {
        WEB_PORT:3336,
        SERVICE_HOST:"http://127.0.0.1:9091/api",
        WEB_FOLDER:"custorder3"
      }
    }]
  }