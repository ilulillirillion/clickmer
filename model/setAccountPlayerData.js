// vim: set ft=javascript:


const runSql = require('./runSql.js');


const setAccountPlayerData = (account_id, player) => {

  let results = new Promise((resolve, reject) => {
    try {
      let sql_results = runSql(`INSERT INTO players (id, uuid) VALUES ('${account_id}', '${player.uuid}')`);
      resolve(sql_results);
    } catch(error) {
      logger.warn(error);
      reject(null);
    };
  });
};


module.exports = setAccountPlayerData;
