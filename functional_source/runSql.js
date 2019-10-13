// vim: set ft=javascript:


const mysql = require('mysql');
const logger = require('./logger.js');


/*
const runSql = (query, callback) {

  logger.debug(`Getting from database with query: <${query}>.`);
  
  let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.CLICKMER_MYSQL_PASSWORD,
    datase: 'clickmer'
  });
  
  connection.query(query, function(error, results, fields) {
    logger.debug(`error: <${error}>, results: <${results}>, fields: <${fields}>.`);
    return callback(results);
  });

};
*/


//const runSql = (query, callback) {
const runSql = async (query) => {

  logger.debug(`Getting from database with query: <${query}>.`);
  
  let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.CLICKMER_MYSQL_PASSWORD,
    database: 'clickmer'
  });
 
  let finish_query = new Promise((resolve, reject) => {
    connection.query(query, function(error, results, fields) {
      logger.debug(`error: <${error}>, results: <${results}>, fields: <${fields}>.`);
      //return callback(results);
      resolve(results);
    });
  });

  let results = await finish_query;
  return results;

};


module.exports = runSql;
