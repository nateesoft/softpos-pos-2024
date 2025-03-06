module.exports = {
    apps: [{
      name: "prtservice2",
      script: "./bin/www",
      env: {
        PORT:8082,
        NODE_ENV:"production"
      }
    }]
  }