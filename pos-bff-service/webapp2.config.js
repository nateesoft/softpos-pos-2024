module.exports = {
  apps: [{
    name: "webapp2",
    script: "server.js",
    env: {
      WEB_PORT:3002,
      SERVICE_HOST:"http://192.168.1.197:9092/api",
      WEB_FOLDER:"webapp2"
    }
  }]
}