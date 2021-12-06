// Custom utility middleware

module.exports = {
  log: (req, res, next) => {
    console.log(`${req.method} recieved at ${req.originalUrl}
                Params: ${req.params}`)
    next();
  }
}