module.exports = {
    apps: [{
      name: "employee-take-order2",
      script: "employee-take-order/server/server.js",
      env: {
        WEB_PORT:3335,
        SERVICE_HOST:"http://127.0.0.1:9092/api",
        WEB_FOLDER:"custorder2"
      }
    }]
  }