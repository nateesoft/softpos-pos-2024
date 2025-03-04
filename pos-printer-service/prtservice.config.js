module.exports = {
    apps: [{
      name: "prtservice",
      script: "./bin/www",
      env: {
        PORT:8080,
        NODE_ENV:"production"
      }
    }]
  }