module.exports = {
    apps: [{
      name: "orderapp1",
      script: "server.js",
      env: {
        WEB_PORT:3334,
        SERVICE_HOST:"http://192.168.1.197:9091/api",
        WEB_FOLDER:"orderapp1"
      }
    }]
  }