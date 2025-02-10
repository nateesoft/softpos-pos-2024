module.exports = {
    apps: [{
      name: "orderapp3",
      script: "server.js",
      env: {
        WEB_PORT:3336,
        SERVICE_HOST:"http://192.168.1.197:9093/api",
        WEB_FOLDER:"orderapp3"
      }
    }]
  }