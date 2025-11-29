//config is for connecting to database  (put it in git.ignore)
const mysql = require('mysql2')                    

const pool = mysql.createPool({                     
  connectionLimit:10,                              
  host: 'localhost',                               
  user: 'root',                                     
  password: 'root',                                
  database: 'movielistdb'                          
})                                                  

module.exports = pool                               
