//config is for connecting to database  (put it in git.ignore)
const mysql = require('mysql2')                     //20 add sql

const pool = mysql.createPool({                     //21 mk pool 21-27
  connectionLimit:10,                               //22
  host: 'localhost',                                //23
  user: 'root',                                     //24
  password: 'root',                                 //25
  database: 'movielistdb'                           //26
})                                                  //27

module.exports = pool                               //28 pool (not server this time)
