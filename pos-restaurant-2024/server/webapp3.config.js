module.exports = {
  apps: [{
    name: "webapp3",
    script: "server.js",
    env: {
      WEB_PORT:3003,
      SERVICE_HOST:"http://127.0.0.1:9093/api",
      WEB_FOLDER:"webapp3"
    }
  }]
}