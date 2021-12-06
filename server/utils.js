// Custom utility middleware

module.exports = {
  log: (req, res, next) => {
    console.log(`${req.method} recieved at ${req.originalUrl}\n Query string: ${Object.entries(req.query)}\n Params : ${Object.entries(req.params)}`)
    req.body ? console.log(` Body: ${Object.entries(req.body)}`) : console.log(" Body : ");
    req.data ? console.log(` Data: ${Object.entries(req.data)}`) : console.log(" Data : ");
    next();
  }
}