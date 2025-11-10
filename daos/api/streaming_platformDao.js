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
};
module.exports = streaming_platformDao