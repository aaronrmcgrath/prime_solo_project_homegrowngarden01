// SEARCH ROUTE -- Guests or Users search params query DB and send results

var express = require('express');
var router = express.Router();
var connectionString = require('../modules/connection.js');
var pg = require('pg');


// GET for Garden Data
router.get('/', function (req, res) {

  var search = req.params.id;
  console.log('*** @SERVER, search:', search);
  // var results = [];
  
});



module.exports = router;
