const router = require('express').Router();
const controllers = require('../controllers/controllers.js')

router
  .get('/', controllers.getCohorts)
  .post('/', controllers.addCohorts)

module.exports = router;