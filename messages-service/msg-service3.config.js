module.exports = {
    apps: [{
      name: "msg-service-3",
      script: "bin/www",
      env: {
        PORT:8083,
        NODE_ENV:"production"
      }
    }]
  }