// vim: set ft=javascript:


const logger = require('./logger.js');
const runSql = require('./runSql.js');


const getPlayerDataFromAccountId = async (account_id) => {

  let player_data_results = await new Promise((resolve, reject) => {
    try {
      let sql_results = runSql(`SELECT * FROM players WHERE id = '${account_id}'`);
      resolve(sql_results);
    } catch(error) {
      // TODO: Improve handling for if a player doesn't exist
      logger.warn(error);
      reject(null);
    };
  });
  let player_data = player_data_results[0]
  return player_data;
};


module.exports = getPlayerDataFromAccountId;
