module.exports = {
    apps: [{
      name: "employee-take-order1",
      script: "employee-take-order/server/server.js",
      env: {
        WEB_PORT:3334,
        SERVICE_HOST:"http://127.0.0.1:9093/api",
        WEB_FOLDER:"custorder1"
      }
    }]
  }