module.exports = {
    apps: [{
      name: "prtservice1",
      script: "./bin/www",
      env: {
        PORT:8081,
        NODE_ENV:"production"
      }
    }]
  }