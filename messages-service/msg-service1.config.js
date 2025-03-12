module.exports = {
    apps: [{
      name: "msg-service-1",
      script: "./bin/www",
      env: {
        PORT:8081,
        NODE_ENV:"production"
      }
    }]
  }