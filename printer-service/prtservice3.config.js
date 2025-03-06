module.exports = {
    apps: [{
      name: "prtservice3",
      script: "./bin/www",
      env: {
        PORT:8083,
        NODE_ENV:"production"
      }
    }]
  }