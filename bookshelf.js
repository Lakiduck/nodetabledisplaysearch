const knex = require('knex')(require('./knexfile'));

const bookshelf = require('bookshelf')(knex);

modules.exports = 'bookshelf'
