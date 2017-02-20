'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _config = require('./config.json');

var _config2 = _interopRequireDefault(_config);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _middlewares = require('./middlewares');

var _middlewares2 = _interopRequireDefault(_middlewares);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use((0, _cors2.default)());
app.use(_bodyParser2.default.json());
app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));

app.use(_middlewares2.default);
app.use('/', _routes2.default);

app.listen(_config2.default.port, function () {
    console.log('Server started on PORT ' + _config2.default.port);
});

exports.default = app;
//# sourceMappingURL=index.js.map