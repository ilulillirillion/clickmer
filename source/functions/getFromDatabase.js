// vim: set ft=javascript:


const logger = require('../misc/winston_logger.js');
const mysql = require('mysql');


function getFromDatabase(query, query_args, callback) {
  logger.debug(`Getting from database with query: <${query}>.`);
  let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.CLICKMER_MYSQL_PASSWORD,
    //database: 'nodelogin'
    database: 'clickmer'
  });
  connection.query(query, query_args, function(error, results, fields) {
    logger.info(`error: <${error}>, results: <${results}>, fields: <${fields}>.`);
    return callback(results);
  });
};


module.exports = getFromDatabase;
