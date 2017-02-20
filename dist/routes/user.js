'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _User = require('../models/User/User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', function (req, res) {
    _User2.default.forge().fetchAll().then(function (users) {
        res.json(users.toJSON());
    });
});

exports.default = router;
//# sourceMappingURL=user.js.map