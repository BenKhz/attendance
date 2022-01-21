// Custom utility middleware
const ws = require('ws');

module.exports = {
  log: (req, res, next) => {
    console.log(`${req.method} recieved at ${req.originalUrl}\n Query string: ${Object.entries(req.query)}\n Params : ${Object.entries(req.params)}`)
    req.body ? console.log(` Body: ${Object.entries(req.body)}`) : console.log(" Body : ");
    req.data ? console.log(` Data: ${Object.entries(req.data)}`) : console.log(" Data : ");
    next();
  },
  createWsServer: (optionsObj) => {
    const wsServer = new ws.Server(optionsObj)
    wsServer.on('hook', (sockets, req) => {
      sockets.forEach(socket => {
        socket.send(JSON.stringify(req))
      })
    })
    wsServer.on('connection', (socket) => {
      socket.on('message', (msg) => {
        socket.send("pong")
      })
      console.log("Connection event!")
    })
    return wsServer;
  }
}