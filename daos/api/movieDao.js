const connect = require("../../config/dbconfig");

const movieDao = {
  table: "movie",
  findMovieInfo: (res, table) => {
    const sql = `SELECT m.movie_id, m.title, m.rating, m.runtime, m.nationality, m.yr_released, m.showing, m.poster,
      CASE
        WHEN m.budget IS NULL THEN ''
        ELSE m.budget
        END budget,
      CASE
        WHEN m.gross IS NULL THEN ''
        ELSE m.gross
        END gross
      FROM movie m
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
  findMovieByDirectorId: (res, table, id) => {
    const sql = `SELECT m.title, m.movie_id, m.yr_released, d.last_name, d.first_name
    FROM movie AS m
    INNER JOIN movie_to_director AS mtd ON m.movie_id = mtd.movie_id
    INNER JOIN director AS d ON mtd.director_id = d.director_id 
    WHERE d.director_id = ?
    ORDER BY m.title, d.last_name`
    
    connect.query(sql, [id], (error, rows) => {
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
  findMoviesWithActors: (res, table) => {
    const sql = `SELECT 
      m.movie_id, m.title, m.yr_released, m.poster,
      GROUP_CONCAT(CONCAT(a.first_name, ' ', a.last_name) ORDER BY a.last_name SEPARATOR ', ') AS actors
    FROM movie m
    LEFT JOIN movie_to_actor mta ON m.movie_id = mta.movie_id
    LEFT JOIN actor a ON mta.actor_id = a.actor_id
    GROUP BY m.movie_id, m.title, m.yr_released, m.poster, m.budget, m.gross
    ORDER BY m.title`;

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
  
  findMoviesWithGenres: (res, table) => {
    const sql = `SELECT 
      m.movie_id, m.title, m.yr_released, m.poster,
      GROUP_CONCAT(CONCAT(g.genre,' ') ORDER BY g.genre SEPARATOR ', ') AS genres
    FROM movie m
    LEFT JOIN movie_to_genre mtg ON m.movie_id = mtg.movie_id
    LEFT JOIN genre g ON mtg.genre_id = g.genre_id
    GROUP BY m.movie_id, m.title, m.yr_released, m.poster
    ORDER BY m.title`;

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
  findMovieByActorId: (res, table, id) => {
    const sql = `SELECT m.title,  m.movie_id,m.yr_released, a.last_name, a.first_name
    FROM movie AS m
    INNER JOIN movie_to_actor AS mta ON m.movie_id = mta.movie_id
    INNER JOIN actor AS a ON mta.actor_id = a.actor_id 
    WHERE a.actor_id = ?
    ORDER BY m.title, a.last_name`
    
    connect.query(sql, [id], (error, rows) => {
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
  findMovieProduction: (res, table) => {
    const sql = `SELECT m.movie_id, m.title, m.yr_released, p.production
    FROM movie AS m
    JOIN production AS p ON m.production_id = p.production_id`
    
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
  }
};

module.exports = movieDao;
 



    