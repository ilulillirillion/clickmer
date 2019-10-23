// vim: set ft=javascript:


const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const runSql = require('./runSql.js');


var app = express();
app.set('port', 5000);

const session = require('./session.js');
app.use(session);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//app.use(express.static(path.join(__dirname, '../functional_client/')));
app.use(express.static(path.join(__dirname, '../client/')));

app.get('/test', function(request, response) {
  //return response.sendFile(path.join(__dirname, '../functional_client/test.html'));
  if (request.session.loggedin) {
    return response.sendFile(path.join(__dirname, '../client/test.html'));
  } else {
    response.send('Please login to view this page!');
  };
});


app.get('/register', function(request, response) {
  return response.sendFile(path.join(__dirname, '../client/registration.html'));
});

app.post('/register', async function(request, response) {
  logger.info('Registering new player.');
  const username = request.body.username;
  const password = request.body.password;
  if (username && password) {
    let add_account_results = await new Promise((resolve, reject) => {

      try {
        resolve(runSql(
            `INSERT INTO accounts (username, password, email) VALUE ('${username}', '${password}', 'test@test.com')`));
      } catch {
        logger.error(error);
        reject(null);
      };

    });
    logger.debug(`Added new account to database: <${add_account_results}>.`);
    request.session.loggedin = true;
    request.session.username = username;
    return response.redirect('/test');
  };
  response.end();
});

app.get('/login', function(request, response) {
  //return response.sendFile(path.join(__dirname, '../functional_client/login.html'));
  return response.sendFile(path.join(__dirname, '../client/login.html'));
});

app.post('/authenticate', async function(request, response) {
  let username = request.body.username;
  let password = request.body.password;
  if (username && password) {
    //let matched_accounts =  await new Promise((resolve, reject) => {
    let matched_id =  await new Promise((resolve, reject) => {
      try {
        let results = runSql(
            //`SELECT * FROM accounts WHERE username = '${username}' AND password = '${password}'`);
            `SELECT id FROM accounts WHERE username = '${username}' AND password = '${password}'`);
        resolve(results);
      } catch(error) {
        logger.warn(error);
      };
    });
    //if (matched_accounts.length > 0) {
    if (matched_id) {
      request.session.loggedin = true;
      request.session.username = username;
      request.session.account_id = matched_id
      return response.redirect('/test');
    } else {
      return response.send('Incorrect username and/or password!');
    };
    //response.end();
  };
  return response.end();
});

module.exports = app;
