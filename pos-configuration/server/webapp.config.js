module.exports = {
    apps: [{
      name: "webapp",
      script: "server.js",
      env: {
        WEB_PORT:3000,
        SERVICE_HOST:"http://127.0.0.1:9090/api",
        WEB_FOLDER:"webapp"
      }
    }]
  }