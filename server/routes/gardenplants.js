// GARDEN PLANT ROUTE -- CRUD for DB - STORES NEW PLANTS TO USER'S GARDEN

var express = require('express');
var router = express.Router();
var connectionString = require('../modules/connection.js');
var pg = require('pg');



// SECOND POST after creating new plant, updates specific garden
router.post('/', function(req, res, next){

  console.log('TESTING garden_plants save to DB - req.body: ', req.body);
  var req = req.body;

  var gardenPlant = {
    garden: req.res.garden_id,
    plant: req.res.plant_id,
    date_planted: req.res.date_planted
  };
  var results = [];

  console.log('@SERVER data.js save plant to SPECIFIC Garden:', gardenPlant);

  pg.connect(connectionString, function(err, client, done){
    client.query('INSERT INTO garden_plants (garden, plant, date_planted) VALUES ($1, $2, $3) RETURNING id;', [gardenPlant.garden, gardenPlant.plant, gardenPlant.date_planted],
    function (err, result) {
      done();

      if(err) {
        console.log('Error inserting data: ', err);
        res.send(false);
      } else {
        console.log(result.rows);
        res.json(result.rows); // Sending back An object in an array in an object as a key of res in the mother object... work on later
      }
    });
  });

});


module.exports = router;
