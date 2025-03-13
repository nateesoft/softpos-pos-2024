module.exports = {
    apps: [{
      name: "msg-service",
      script: "messages-service/bin/www",
      env: {
        PORT:8080,
        NODE_ENV:"production"
      }
    }]
  }