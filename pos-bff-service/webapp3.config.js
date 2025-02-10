module.exports = {
  apps: [{
    name: "webapp3",
    script: "server.js",
    env: {
      WEB_PORT:3003,
      SERVICE_HOST:"http://192.168.1.197:9093/api",
      WEB_FOLDER:"webapp3"
    }
  }]
}