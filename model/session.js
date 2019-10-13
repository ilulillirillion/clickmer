// vim: set ft=javascript:


const session = require('express-session')({
  secret: process.env.CLICKMER_SESSION_SECRET,
  resave: true,
  saveUninitialized: true
});


module.exports = session;
