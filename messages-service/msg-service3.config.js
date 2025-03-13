module.exports = {
    apps: [{
      name: "msg-service-3",
      script: "messages-service/bin/www",
      env: {
        PORT:8083,
        NODE_ENV:"production"
      }
    }]
  }