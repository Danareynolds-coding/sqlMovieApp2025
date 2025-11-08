const connect = require("../../config/dbconfig");

const movieDao = {
  table: "movie",
  findMovieInfo: (res, table) => {
    const sql = `SELECT m.movie_id, m.title, m.runtime, m.nationality, m.yr_released, g.genre, a.last_name,a.first_name, d.last_name, d.first_name, m.poster,
      
      CASE
        WHEN m.budget IS NULL THEN ''
        ELSE m.budget
        END budget,
      CASE
        WHEN m.gross IS NULL THEN ''
        ELSE m.gross
        END gross
 
        FROM movie m
        INNER JOIN
           movie_to_actor AS mta ON m.movie_id = mta.movie_id
        INNER JOIN 
          actor AS a ON mta.actor_id = a.actor_id
        INNER JOIN
           movie_to_director AS mtd ON m.movie_id = mtd.movie_id
        INNER JOIN 
          director AS d ON mtd.director_id = d.director_id
        INNER JOIN
           movie_to_genre AS mtg ON m.movie_id = mtg.movie_id
        INNER JOIN 
          genre AS g ON mtg.genre_id = g.genre_id
        
        ORDER BY m.movie_id, m.title;`

    connect.query(sql, (error, rows) => {
      if (!error) {
        if (rows.length === 1) {
          res.json(...rows);
        } else {
          res.json(rows);
        }
      } else {
        console.log(`DAO Error: ${error}`);
        res.json({
          message: "error",
          table: `${table}`,
          error: error,
        }); 
      }
    });
  },
};

module.exports = movieDao;
