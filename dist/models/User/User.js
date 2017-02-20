'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bookshelf = require('../bookshelf');

var _bookshelf2 = _interopRequireDefault(_bookshelf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Example User Model.
 */
var User = _bookshelf2.default.Model.extend({
  tableName: 'users'
});

exports.default = User;
//# sourceMappingURL=User.js.map