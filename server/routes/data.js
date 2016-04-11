// DATA ROUTE -- CRUD for DB

var express = require('express');
var router = express.Router();
var connectionString = require('../modules/connection.js');
var pg = require('pg');


// GET for Garden Data
router.get('/', function (req, res) {

  // var userID = req.params.id;
  console.log(req.params.id);
  /*var results = [];

  pg.connect(connectionString, function(err, client, done) {
    var query = client.query('SELECT * FROM gardens WHERE user = $1', [userID]);

    query.on('row', function(row) {
      results.push(row);
      console.log('Server Garden GET! :', results);
    });
    query.on('end', function() {
      done();
      return res.json(results);
    });
    if(err) {
      console.log(err);
    }
  });


  // res.send(res.data);
  // console.log('Server Garden GET! :', res.data);
  */
});


module.exports = router;
