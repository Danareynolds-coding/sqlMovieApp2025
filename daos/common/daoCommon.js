const connect = require('../../config/dbconfig')     

const daoCommon = {
  //methods to query db
  findAll: (res, table) => {
    //sql 2 args 1.sql query 2. call back action
    connect.query(
      `SELECT * FROM ${table};`,
      (error, rows) => {
        if (!error) {
          if (rows.length === 1) {
            res.json(rows[0])
          } else {
            res.json(rows)
          }
        } else {
          console.log(`Dao Error: ${error}`)
          res.json({
            "message": 'error',
            'table': `${table}`,
            'error': error
          })
        }
      }
    )
  },                                                //67

  findById: (res, table, id) => {
    connect.query(
      `SELECT * FROM ${table} WHERE ${table}_id = ${id};`,
      (error, rows) => {
        if (!error) {
          if (rows.length === 1) {
            res.json(rows[0])
          } else {
            res.json(rows)
          }
        } else {
          console.log(`DAO Error: ${error}`)
          res.json({
            "message": 'error',
            'table': `${table}`,
            'error': error
          })
        }
      }
    )
  },                                                      //105

  sort: (res, table, sorter) => {
    connect.query(
      `SELECT * FROM ${table} ORDER BY ${sorter};`,
      (error, rows) => {
        if (!error) {
          if (rows.length === 1) {
            res.json(rows[0])
          } else {
            res.json(rows)
          }
        } else {
          console.log(`DAO Error: ${error}`)
          res.json({
            "message": 'error',
            'table': `${table}`,
            'error': error
          })
        }
      }
    )
  }
}


module.exports = daoCommon                                //46