module.exports = {
    apps: [{
      name: "orderapp2",
      script: "server.js",
      env: {
        WEB_PORT:3335,
        SERVICE_HOST:"http://192.168.1.197:9092/api",
        WEB_FOLDER:"orderapp2"
      }
    }]
  }