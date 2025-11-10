const connect = require('../../config/dbconfig')
   
const actorDao = {
    table: 'actor',

    findMovieByActor(res, table, id) {
        let sql = `SELECT 
            a.actor_id, 
            a.first_name, 
            a.last_name,
            GROUP_CONCAT(CONCAT(m.title,' (', m.yr_released, ')') ORDER BY m.title SEPARATOR ', ') AS movies
        FROM actor a
        LEFT JOIN movie_to_actor mta ON a.actor_id = mta.actor_id
        LEFT JOIN movie m ON mta.movie_id = m.movie_id
        WHERE a.actor_id = ?
        GROUP BY a.actor_id, a.first_name, a.last_name`;
        
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

module.exports = actorDao