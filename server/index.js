const path = require('path');
const express = require('express');
require('dotenv').config()
const PORT = process.env.PORT || 3000;


const app = express();

app.use(express.static('dist'))

app.get('/test', (req, res) => {
  console.log(`${req.method} recieved at ${req.originalUrl} `)
  res.set(200).send(`Succesful ${req.method} to ${req.originalUrl}`)
})

app.listen(PORT, (err) => {
  !err ? console.log(`Listening on port ${PORT}`) : console.error(err)
  })
