var options = {pgFormating: true};
var pgp = require("pg-promise")(options);
//var pg = require('pg');
//var cn = "postgres://pqledthgbikogv:FpaEP1BlRfsdiC2eMj9U3VRU3c@ec2-107-21-223-72.compute-1.amazonaws.com:5432/d7n3dns77sefo6?ssl=true";
var cn = {
  host: 'ec2-107-21-223-72.compute-1.amazonaws.com',
  port:5432,
  database:'d7n3dns77sefo6',
  user:'pqledthgbikogv',
  password:'FpaEP1BlRfsdiC2eMj9U3VRU3c',
  ssl: true    // user name;
    // password: - add password, if needed;
};


var db = pgp(cn);



// db.query("select * from users")
//   .then(function(data){
//     console.log('data:',data);
//   })
//   .catch(function(error){
//     console.log('Error',error);
//   });

//   db.query("select * from users")
//   .then(function(data){
//     console.log('data:',data);
//   })
//   .catch(function(error){
//     console.log('Error',error);
//   });

module.exports = db;




// var pg = require('pg');
// var connectionString = process.env.DATABASE_URL || 'postgres://pqledthgbikogv:FpaEP1BlRfsdiC2eMj9U3VRU3c@ec2-107-21-223-72.compute-1.amazonaws.com:5432/d7n3dns77sefo6?ssl=true';

// var client = new pg.Client(connectionString);
// // client.connect();

// exports.db = client.connect();
// console.log('sqlscript.db', exports.db);
// exports.test = function(){console.log('hello');};

// var result = [];
// pg.connect(connectionString, function(err){
//   if(err){
//     console.log('error found',err);
//   }
//   var query = client.query("SELECT * FROM users");
//   query.on('row',function(row){
//     result.push(row);
//   });

//   query.on('end',function(){
//     client.end();
//   })
// });

// var query = client.query('CREATE TABLE IF NOT EXISTS users(id SERIAL PRIMARY KEY, username VARCHAR(40) not null, password VARCHAR(40) not null, name VARCHAR(40) not null, address VARCHAR(40) not null, phone integer, email VARCHAR(40) not null)');
// var queryEmployeeTable = client.query('CREATE TABLE IF NOT EXISTS employees(id SERIAL PRIMARY KEY, username VARCHAR(40) not null, password VARCHAR(40) not null, name VARCHAR(40) not null)');
// var queryTaskTable = client.query('CREATE TABLE IF NOT EXISTS tasks(id SERIAL PRIMARY KEY, user_id integer REFERENCES users (id), employee_id integer, date VARCHAR(40) not null, time VARCHAR(40) not null)');
// var queryUserSessionsTable = client.query('CREATE TABLE IF NOT EXISTS user_sessions(id SERIAL PRIMARY KEY, session_id VARCHAR(40),user_id integer REFERENCES users (id))');
// var queryEmployeeSessionsTable = client.query('CREATE TABLE IF NOT EXISTS employee_sessions(id SERIAL PRIMARY KEY, session_id VARCHAR(40), employee_id integer REFERENCES employees (id))');
// query.on('end', function () { console.log('Create Users Table') });
// queryEmployeeTable.on('end', function () { console.log('Created Employees Table') });
// queryUserSessionsTable.on('end', function(){console.log('Created User Sessions Table');});
// queryEmployeeSessionsTable.on('end', function(){console.log('Created Employee Sessions Table');});
// queryTaskTable.on('end', function () {
//   console.log('Created Tasks Tables');
//   client.end();
// });
