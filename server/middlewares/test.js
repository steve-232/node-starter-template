
module.exports = (req, res, next) => {
  console.log('Test middleware');
  next()
}
