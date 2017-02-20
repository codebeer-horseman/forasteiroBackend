'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = _express2.default.Router();

var requestTime = function requestTime(req, res, next) {
    var d = new Date();
    req.requestTime = d.toDateString() + ' ' + d.toTimeString();
    next();
};

routes.use(requestTime);

exports.default = routes;
//# sourceMappingURL=index.js.map