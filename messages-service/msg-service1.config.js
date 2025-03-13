module.exports = {
    apps: [{
      name: "msg-service-1",
      script: "messages-service/bin/www",
      env: {
        PORT:8081,
        NODE_ENV:"production"
      }
    }]
  }