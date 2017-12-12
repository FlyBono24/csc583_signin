const express = require('express'),
      router = express.Router(),
      user = require('../models/user')

router.post('/', (req, res) => {
  visitor = new user({
    displayName: req.body.displayName,
    email: req.body.email,
    telephone: req.body.telephone,
    company: req.body.company,
    officialVisit: req.body.officialVisit || false,
    escortRequired: req.body.escortRequired || false,
    escortName: req.body.escortName
  })

  user.create(visitor, (err) => {
    if(err) {
      console.log(err);
      return res.status(410).send()
    }
  })
})

// Find all visitors
router.get('/admin', (req, res) => {
  user.find({}, (err, users) => {
    res.send(users)
  })
})

module.exports = router 
//module.exports.checkAuth = checkAuth
