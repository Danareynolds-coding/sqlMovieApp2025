const connect = require('../../config/dbconfig')

const streaming_platformDao = {
  table:'streaming_platform',
  findStreaming_platform(res, table, id) {
        let sql = `SELECT
            s.streaming_platform_id, s.streaming_platform,
        GROUP_CONCAT(CONCAT(m.title,' (', m.yr_released, ')') ORDER BY m.title SEPARATOR ', ') AS movies
        FROM streaming_platform s
        LEFT JOIN movie_to_streaming mts ON s.streaming_platform_id = mts.streaming_platform_id
        LEFT JOIN 
        movie m ON mts.movie_id = m.movie_id
        WHERE s.streaming_platform_id = ?
        GROUP BY s.streaming_platform_id, s.streaming_platform`;
        connect.execute(
            sql,
            [id],
            (error, rows) => {
                if (!error) {
                    console.log('Query executed successfully. Rows returned:', rows.length)
                    console.log('Looking for streaming_platform_id:', id)
                    if (rows.length > 0) {
                        res.json(rows[0])
                    } else {
                        res.status(404).json({ error: 'Streaming platform not found' })
                    }
                } else {
                    console.log('Dao error:', error)
                    console.log('SQL:', sql)
                    res.status(500).json({ error: 'Database error', details: error.message })
                }
            }
        )  
       
    }
 
}
module.exports = streaming_platformDao