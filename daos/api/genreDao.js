const connect = require('../../config/dbconfig')
   
const genreDao = {
table:'genre',
findMovieByGenre(res, table, id) {
        let sql = `SELECT 
        g.genre_id,
        g.genre, 
        GROUP_CONCAT(CONCAT(m.title,' (', m.yr_released, ')') ORDER BY m.title SEPARATOR ', ') AS movies
        FROM genre g
        LEFT JOIN movie_to_genre mtg ON g.genre_id = mtg.genre_id
        LEFT JOIN movie m ON mtg.movie_id = m.movie_id
        WHERE g.genre_id = ?
        GROUP BY g.genre_id, g.genre`;
        connect.execute(
            sql,
            [id],
            (error, rows) => {
                if (!error) {
                    if (rows.length > 0) {
                        res.json(rows[0])
                    } else {
                        res.status(404).json({ error: 'Actor not found' })
                    }
                } else {
                    console.log('Dao error', error)
                    res.status(500).json({ error: 'Database error' })
                }
            }
        )  
       
    }
}
module.exports = genreDao