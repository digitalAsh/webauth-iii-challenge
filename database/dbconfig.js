//this file looks to the knexfile.js 

const knex = require('knex');

const knexConfig = require('../knexfile.js');

module.exports = knex(knexConfig.development)