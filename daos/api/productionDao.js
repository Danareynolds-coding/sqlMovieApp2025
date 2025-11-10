const connect = require('../../config/dbconfig')


const productionDao = {
  table:'production',
  findMovieByProduction:(res, table, id)=> {
    let sql = `SELECT
    p.production_id,
    p.production,
    m.movie_id,
    m.title AS movie_title 
    FROM
        production AS p
    JOIN
         movie AS m ON p.production_id = m.production_id
    WHERE
         p.production_id = ?`

    connect.query(
      sql,
      [id],
      (error, rows) => {
        if (!error) {
          if (rows.length === 1) {
            res.json(rows[0])
          } else {
            res.json(rows)
          }
        } else {
          console.log('Dao error', error)
          res.json({
            "message": 'error',
            'table': table,
            'error': error
          })
        }
      }
    )
  }
}

module.exports = productionDao