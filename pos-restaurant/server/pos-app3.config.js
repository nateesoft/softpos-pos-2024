module.exports = {
  apps: [{
    name: "pos-app-3",
    script: "pos-restaurant/server/server.js",
    env: {
      WEB_PORT:3003,
      SERVICE_HOST:"http://127.0.0.1:9093/api",
      WEB_FOLDER:"webapp3"
    }
  }]
}