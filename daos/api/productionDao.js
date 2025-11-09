const connect = require('../../config/dbconfig')


const productionDao = {
  table:'production',
  // findMovieByProduction:(res, table, id)=> {
  //   let sql = `SELECT
  //   p.production,
  //   m.title AS movie_title 
  //   FROM
  //       production p
  //   JOIN
  //        movie m ON p.production_id = m.production_id;

  //   connect.query(
  //     sql,
  //     (error, rows) => {
  //       if (!error) {
  //         if (rows.length === 1) {
  //           res.json(rows[0])
  //         } else {
  //           res.json(rows)
  //         }
  //       } else {
  //         console.log('Dao error', error)
  //         res.json({
  //           "message": 'error',
  //           'table': table,
  //           'error': error
  //         })
  //       }
  //     }
  //   )
  // }
}

module.exports = productionDao