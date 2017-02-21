var privateKey = require('../../bin/jwt');

var express = require('express');
var router = express.Router();
var User = require('../user/model');
var jwt = require('jsonwebtoken');

/* GET user listing. */
router.route('/authenticate')

.post(function (req, res) {
  User.forge({username: req.body.username, password: req.body.password}).fetch()
  .then(function(user) {
    if (!user) {
      res.status(404).json({error: true, data: {}});
    }
    else {
      if (user.password != req.body.password) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } else {

          // if user is found and password is right
          // create a token
          var token = jwt.sign(user, privateKey.secret, {
            expiresIn : 60*60*24 // expires in 24 hours
          });

          res.json({
            success: true,
            token: token
          });
        }
      }
    })
  .catch(function (err) {
    res.status(500).json({error: true, data: {message: err.message}});
  }); 
});

module.exports = router;
