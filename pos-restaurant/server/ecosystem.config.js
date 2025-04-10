module.exports = {
    apps: [{
      name: "pos-app",
      script: "pos-restaurant/server/server.js",
      env: {
        WEB_PORT:3000,
        SERVICE_HOST:"http://127.0.0.1:9091/api",
        SOCKET_HOST:"http://127.0.0.1:8081",
        WEB_FOLDER:"webapp",
        MACNO: "001"
      }
    },
    {
      name: "pos-app1",
      script: "pos-restaurant/server/server.js",
      env: {
        WEB_PORT:3001,
        SERVICE_HOST:"http://127.0.0.1:9091/api",
        SOCKET_HOST:"http://127.0.0.1:8081",
        WEB_FOLDER:"webapp",
        MACNO: "002"
      }
    },
    {
      name: "pos-app2",
      script: "pos-restaurant/server/server.js",
      env: {
        WEB_PORT:3002,
        SERVICE_HOST:"http://127.0.0.1:9092/api",
        SOCKET_HOST:"http://127.0.0.1:8082",
        WEB_FOLDER:"webapp",
        MACNO: "001"
      }
    },
    {
      name: "pos-app3",
      script: "pos-restaurant/server/server.js",
      env: {
        WEB_PORT:3003,
        SERVICE_HOST:"http://127.0.0.1:9093/api",
        SOCKET_HOST:"http://127.0.0.1:8083",
        WEB_FOLDER:"webapp",
        MACNO: "001"
      }
    }]
  }
  