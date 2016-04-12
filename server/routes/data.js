// DATA ROUTE -- CRUD for DB

var express = require('express');
var router = express.Router();
var connectionString = require('../modules/connection.js');
var pg = require('pg');


// GET for Garden Data
router.get('/:id', function (req, res) {

  var userID = req.params.id;
  console.log('*SERVER userID for getGarden:', userID);
  var results = [];

  pg.connect(connectionString, function(err, client, done) {
    // var query = client.query('SELECT name FROM gardens WHERE gardens.user = $1;', [userID]);

    var query = client.query('SELECT plants.plant_name, gardens.name FROM plants JOIN garden_plants ON plants.id = garden_plants.plant JOIN gardens ON garden_plants.garden = gardens.id WHERE gardens.user = $1;', [userID]);

    query.on('row', function(row) {
      results.push(row);
      console.log('Server Garden GET! :', results);
    });

    query.on('err', function(err) {
      console.log(err);
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
});


module.exports = router;
