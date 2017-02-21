var express = require('express');
var router = express.Router();
var User = require('./model')

/* GET user listing. */
router.route('/users')

.get(function(req, res, next) {
	User.collection().fetch().then(function(todos) {
		res.json(todos.toJSON());
    });
})

.post(function (req, res) {
    Users.forge(req.body)
    .save()
    .then(function (user) {
      res.json({error: false, data: {id: user.get('id')}});
    })
    .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
    }); 
  });

module.exports = router;
