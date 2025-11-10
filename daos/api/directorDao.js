const connect = require('../../config/dbconfig')
   


const directorDao = {
    table: 'director',
    findMovieByDirector(res, table, id) {
        let sql = `SELECT 
            d.director_id, 
            d.first_name, 
            d.last_name,
            GROUP_CONCAT(CONCAT(m.title,' (', m.yr_released, ')') ORDER BY m.title SEPARATOR ', ') AS movies
        FROM director d
        LEFT JOIN movie_to_director mtd ON d.director_id = mtd.director_id
        LEFT JOIN movie m ON mtd.movie_id = m.movie_id
        WHERE d.director_id = ?
        GROUP BY d.director_id, d.first_name, d.last_name`;
        
        connect.execute(
            sql,
            [id],
            (error, rows) => {
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
            }
        );
    }
}

module.exports = directorDao