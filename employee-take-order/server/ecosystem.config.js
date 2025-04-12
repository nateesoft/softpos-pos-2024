module.exports = {
    apps: [{
      name: "employee-take-order",
      script: "employee-take-order/server/server.js",
      env: {
        WEB_PORT:3333,
        SERVICE_HOST:"http://127.0.0.1:9090/api",
        WEB_FOLDER:"custorder"
      }
    },
    {
      name: "employee-take-order",
      script: "employee-take-order/server/server.js",
      env: {
        WEB_PORT:3334,
        SERVICE_HOST:"http://127.0.0.1:9091/api",
        WEB_FOLDER:"custorder"
      }
    },
    {
      name: "employee-take-order",
      script: "employee-take-order/server/server.js",
      env: {
        WEB_PORT:3335,
        SERVICE_HOST:"http://127.0.0.1:9092/api",
        WEB_FOLDER:"custorder"
      }
    },
    {
      name: "employee-take-order",
      script: "employee-take-order/server/server.js",
      env: {
        WEB_PORT:3336,
        SERVICE_HOST:"http://127.0.0.1:9093/api",
        WEB_FOLDER:"custorder"
      }
    }]
  }