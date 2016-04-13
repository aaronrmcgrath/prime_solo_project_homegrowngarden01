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

  // TODO NEED TO STOP SERVER FROM CRASHING WHEN USER ISN'T LOGGED IN

  // if(userID === undefined) {
  //   router.get('/', function(req, res) {
  //     console.log('User not logged in');
  //     return res.send('User not logged in');
  //   });
  // };

  pg.connect(connectionString, function(err, client, done) {
    // var query = client.query('SELECT name FROM gardens WHERE gardens.user = $1;', [userID]);

    var query = client.query('SELECT plants.plant_name, gardens.name, garden_plants.id FROM plants JOIN garden_plants ON plants.id = garden_plants.plant JOIN gardens ON garden_plants.garden = gardens.id WHERE gardens.user = $1;', [userID]);



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


  // POST for creating new plant in DB for all...
  router.post('/', function(req, res, next){

    var savePlant = {
      plant_name: req.body.plant_name
    };
    var results = [];

    console.log('@SERVER data.js ready to save to DB:', savePlant);

    pg.connect(connectionString, function(err, client, done){
      client.query('INSERT INTO plants (plant_name) VALUES ($1) RETURNING id, plant_name;', [savePlant.plant_name],
      function (err, result) {
        done();

        if(err) {
          console.log('Error inserting data: ', err);
          res.send(false);
        } else {
          res.send(result);
        }
      });
    });

  });


  // res.send(res.data);
  // console.log('Server Garden GET! :', res.data);
});


module.exports = router;
