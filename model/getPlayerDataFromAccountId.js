// vim: set ft=javascript:


const logger = require('./logger.js');
const runSql = require('./runSql.js');


const getPlayerDataFromAccountId = (account_id) => {

  let player_data = new Promise((resolve, reject) => {
    try {
      let sql_results = runSql(`SELECT * FROM players WHERE id = '${account_id}'`);
      resolve(sql_results);
    } catch(error) {
      // TODO: Improve handling for if a player doesn't exist
      logger.warn(error);
      reject(null);
    };
  });
  return player_data;
};
