// CONNECTION file

var connectionString = '';

if(process.env.DATABASE_URL != undefined) {
  connetionString = process.env.DATABASE_URL + 'ssl';
} else {
  connectionString = 'postgres://localhost:5432/homegrown'
}

// TODO *** CREATE DB HERE! So when hosted it will create dynamically ***

module.exports = connectionString;
