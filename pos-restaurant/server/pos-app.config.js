module.exports = {
    apps: [{
      name: "pos-app",
      script: "pos-restaurant/server/server.js",
      env: {
        WEB_PORT:3000,
        SERVICE_HOST:"http://127.0.0.1:9090/api",
        WEB_FOLDER:"webapp"
      }
    }]
  }