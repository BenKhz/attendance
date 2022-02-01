const router = require('express').Router();
const controllers = require('../controllers/controllers.js')

router
  .post('/login', controllers.login)
  .post('/signup', controllers.signUp)

module.exports = router;