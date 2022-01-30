const dbUtils = require('../db/utils.js')

module.exports = {
  getCampuses: (req, res) => {
    dbUtils.getCampuses((err, campuses) => {
      !err ? res.status(200).send(campuses) : res.send(500, err)
    })
  },
  addCampuses: (req, res) => {
    res.send("added to campuses")
  },
  getCohorts: (req, res) => {
    dbUtils.getCohorts((err, cohorts) => {
      !err ? res.status(200).send(cohorts) : res.send(500, err)
    })
  },
  addCohorts: (req, res) => {
    res.send("added to campuses")
  },
}