// Update with your config settings.
var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : 'root',
    database : 'DB'
  }
})

module.exports = {

  client: 'pg',
  connection: process.env.localhost || { user: 'root', database: 'DB' }

};
