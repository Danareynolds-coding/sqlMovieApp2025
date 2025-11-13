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
  },                                                

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
          console.log(`Dao Error: ${error}`)
          res.json({
            "message": 'error',
            'table': `${table}`,
            'error': error
          })
        }
      }
    )
  },                                                      

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
          console.log(`Dao Error: ${error}`)
          res.json({
            "message": 'error',
            'table': `${table}`,
            'error': error
          })
        }
      }
    )
  },
  create: (req, res, table) => {
    //Object.key returns array of keys
    if (Object.keys(req.body).length === 0) {
      res.json({
        "error": true,
        "message": "no fields to create"
      })
    } else {
      const fields = Object.keys(req.body)
      const values = Object.values(req.body)
      connect.execute(
        `INSERT INTO ${table} SET ${fields.join(' = ?,')} = ?`,
        values, 
        (error, dbres) => {
          if (!error) {
            res.json({
              last_id: dbres.insertId
            })
          } else {
            console.log(`${table}Dao error: `, error)
          }
        }
      )
    }
  }
}


module.exports = daoCommon                                //46