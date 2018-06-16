module.exports = {
  apps : [{
    name   : "node-template",
    script : "./server/index.js",
    env: {
      "PORT": 3001,
      "NODE_ENV": "production"
    },
  }]
}
