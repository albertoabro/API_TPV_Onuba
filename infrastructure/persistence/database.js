const Sequelize = require('sequelize');
const path = require('path');

require('dotenv').config({path: path.resolve(__dirname,'../.env')});
const {DB_URI, DB_URI_TEST, NODE_ENV} = process.env;
const connectionString = NODE_ENV === 'test'
? DB_URI_TEST
: DB_URI

console.log(connectionString);
const sequelize = new Sequelize(connectionString);

module.exports = sequelize;