// CONNECTION file


var pg = require('pg');
var connectionString = '';

if(process.env.DATABASE_URL != undefined) {
  pg.defaults.ssl = true;
  connetionString = process.env.DATABASE_URL;
} else {
  connectionString = 'postgres://localhost:5432/homegrown'
  //TEST DB
  // connectionString = 'postgres://localhost:5432/homegrownTest'

}

// TODO *** CREATE DB HERE! So when hosted it will create dynamically ***

// CREATE DB AND TABLES IF DB DOES NOT EXIST
/*
pg.connect(connectionString, function(err, client, done){

  // var user = 'CREATE TABLE IF NOT EXISTS "user" (id SERIAL PRIMARY KEY, username varchar(80) NOT NULL, password varchar(100) NOT NULL, first_name varchar(80) NOT NULL, last_name varchar(80));';

  if (err) {
    console.log('Error connecting to DB!', err);
    // TODO end process with error code
  } else {
    var query = client.query('CREATE TABLE IF NOT EXISTS "user" ' +
    '(id SERIAL PRIMARY KEY,' +
    'username varchar(80) NOT NULL,' +
    'password varchar(100) NOT NULL,' +
    'first_name varchar(80) NOT NULL,' +
    'last_name varchar(80));' +
    'CREATE TABLE IF NOT EXISTS "gardens" ( ' +
    'id SERIAL PRIMARY KEY,' +
    '"user" int NOT NULL,' +
    'name varchar(80));' +
    'CREATE TABLE IF NOT EXISTS plant_type' +
    '(id SERIAL PRIMARY KEY,' +
    'type varchar(80));'
    'CREATE TABLE IF NOT EXISTS plants' +
    '(id SERIAL PRIMARY KEY,' +
    'plant_name varchar(80),' +
    'plant_type in )'
  );

  query.on('end', function() {
    console.log('successfully ensured schema exists');
    done();
  });

  query.on('error', function() {
    console.log('Error creating schema!');
    // TODO exit(1)
    done();
  });
  }
});
*/

module.exports = connectionString;
