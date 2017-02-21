var knex = require('knex')({
  client: 'pg',
  connection: {
    host     : 'host',
    user     : 'user',
    password : 'password',
    database : 'database',
    charset  : 'utf8'
  }
});

module.exports = knex;