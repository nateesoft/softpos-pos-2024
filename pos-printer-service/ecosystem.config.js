module.exports = {
    apps: [{
      name: "printer-service",
      script: "./bin/www",
      env: {
        NODE_ENV: "production"
      }
    }]
  }