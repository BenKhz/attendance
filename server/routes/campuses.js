const router = require('express').Router();
const controllers = require('../controllers/controllers.js')

router
  .get('/', controllers.getCampuses)
  .post('/', controllers.addCampuses)

module.exports = router;