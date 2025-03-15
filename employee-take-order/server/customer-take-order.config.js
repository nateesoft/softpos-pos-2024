module.exports = {
    apps: [{
      name: "employee-take-order",
      script: "employee-take-order/server/server.js",
      env: {
        WEB_PORT:3333,
        SERVICE_HOST:"http://127.0.0.1:9090/api",
        WEB_FOLDER:"custorder"
      }
    }]
  }