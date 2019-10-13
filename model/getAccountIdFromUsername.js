// vim: set ft=javascript:


const logger = require('./logger.js');
const runSql = require('./runSql.js');


const getAccountIdFromUsername = (username) => {
  let account_id = new Promise((resolve, reject) => {
    try {
      let sql_results = runSql(`SELECT id FROM accounts WHERE username = '${username}'`);
      resolve(results);
    } catch(error) {
      logger.error(error);
      reject(null);
    };
  });
  return account_id;
};
