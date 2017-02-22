var config = require('../../bin/config')
var bookshelf = require('bookshelf')(config);

bookshelf.plugin('visibility');

var User = bookshelf.Model.extend({
  tableName: 'users',
  hidden: ['token']
});

module.exports = User;