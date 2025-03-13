module.exports = {
  apps: [{
    name: "pos-app-2",
    script: "pos-restaurant/server/server.js",
    env: {
      WEB_PORT:3002,
      SERVICE_HOST:"http://127.0.0.1:9092/api",
      WEB_FOLDER:"webapp2"
    }
  }]
}