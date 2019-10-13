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

app.use(express.static(path.join(__dirname, '../functional_client/')));

app.get('/', function(request, response) {
  return response.sendFile(path.join(__dirname, '../functional_client/test.html'));
});

app.get('/login', function(request, response) {
  return response.sendFile(path.join(__dirname, '../functional_client/login.html'));
});

app.post('/authenticate', async function(request, response) {
  let username = request.body.username;
  let password = request.body.password;
  if (username && password) {
    let matched_accounts =  await new Promise((resolve, reject) => {
      try {
        let results = runSql(
            `SELECT * FROM accounts WHERE username = '${username}' AND password = '${password}'`);
        resolve(results);
      } catch(error) {
        logger.warn(error);
      };
    });
    if (matched_accounts.length > 0) {
      request.session.loggedin = true;
      request.session.username = username;
      return response.redirect('/');
    } else {
      return response.send('Incorrect username and/or password!');
    };
    //response.end();
  };
  return response.end();
});

module.exports = app;
