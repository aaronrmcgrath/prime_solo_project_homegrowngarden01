// REGISTER USERS

var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');

// module with bcrypt functions and DB connections
var encryptLib = require('../modules/encryption');
var connection = require('../modules/connection');
var pg = require('pg');


// Handles request for HTML file
router.get('/', function(req, res, next) {
  res.sendFile(path.resolve(__dirname, '../public/assets/views/register.html'));
});

// Hnadles POST request with new user data
router.post('/', function(req, res, next) {

  var saveUser = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    username: req.body.username,
    password: encryptLib.encryptPassword(req.body.password)
  };

  console.log('New User: ', saveUser);

  pg.connect(connection, function(err, client, done) {
    client.query('INSERT INTO users (first_name, last_name, username, password) VALUES ($1, $2, $3, $4) RETURNING id;',
    [saveUser.firstname, saveUser.lastname, saveUser.username, saveUser.password],
    function(err, result) {
      client.end();

      if(err) {
        console.log('Error inserting data: ', err);
      } else {
        res.redirect('/');
      }
    });
  });

});

module.exports = router;
