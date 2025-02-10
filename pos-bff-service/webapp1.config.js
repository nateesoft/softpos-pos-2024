module.exports = {
    apps: [{
      name: "webapp1",
      script: "server.js",
      env: {
        WEB_PORT:3001,
        SERVICE_HOST:"http://192.168.1.197:9091/api",
        WEB_FOLDER:"webapp1"
      }
    }]
  }