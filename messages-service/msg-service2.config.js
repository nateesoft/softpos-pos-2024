module.exports = {
    apps: [{
      name: "msg-service-2",
      script: "messages-service/bin/www",
      env: {
        PORT:8082,
        NODE_ENV:"production"
      }
    }]
  }