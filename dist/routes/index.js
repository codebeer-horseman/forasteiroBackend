'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', function (req, res) {
    res.render('index', { title: 'Pug - Fun', currentTime: req.requestTime });
});

router.use('/users', _user2.default);

exports.default = router;
//# sourceMappingURL=index.js.map