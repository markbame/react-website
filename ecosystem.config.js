module.exports = {
  apps : [

    {
      name      : "API",
      script    : "api-server.js",
      instances  : 4,
      exec_mode  : "cluster",
      env: {
        COMMON_VARIABLE: "true"
      },
      env_production : {
        NODE_ENV: "production"
      }
    },


  ]
}
