// vim: set ft=javascript:


const logger = require('./logger.js');
const runSql = require('./runSql.js');


const getAccountIdFromUsername = async (username) => {
  let account_id_results = await new Promise((resolve, reject) => {
    // TODO: this does not protect well against errors
    try {
      let sql_results = runSql(`SELECT id FROM accounts WHERE username = '${username}'`);
      //sql_results = sql_results.id;
      resolve(sql_results);
    } catch(error) {
      logger.error(error);
      reject(null);
    };
  });
  let account_id = account_id_results[0].id;
  return account_id;
};


module.exports = getAccountIdFromUsername;
