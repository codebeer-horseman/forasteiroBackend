var knex = require('knex')({
  client: 'pg',
  connection: {
    host     : 'localhost',
    user     : 'postgres',
    password : 'postgres',
    database : 'forasteiro',
    charset  : 'utf8'
  }
});

module.exports = knex;