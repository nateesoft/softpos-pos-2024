module.exports = {
    apps: [{
      name: "pos-app-1",
      script: "pos-restaurant/server/server.js",
      env: {
        WEB_PORT:3001,
        SERVICE_HOST:"http://127.0.0.1:9091/api",
        WEB_FOLDER:"webapp1"
      }
    }]
  }