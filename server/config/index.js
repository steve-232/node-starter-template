const env = process.env.NODE_ENV;
let obj = {};

if (env === 'dev') {
  // do something
} else if (env === 'stagging' ) {
  // do something
} else if (env === 'production') {
  // do something
}

module.exports = obj;
