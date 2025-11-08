const express = require('express')               //31 

const router = express.Router()                 // 32 define router
const PORT = process.env.PORT || 3000            //33 add port

//RootRoute=> http://localhost:3000/api 35-40
router.get('/api',(req, res)=> {                  //35
 // res.send('album api')                         //36 just checking
 res.json({                                      //37
  'Movies': `http://localhost:${PORT}/api/movie`, 
  'Actors': `http://localhost:${PORT}/api/actor`,
  'Directors':`http://localhost:${PORT}/api/director`,
  'Production':`http://localhost:${PORT}/api/production`,
  'Genres': `http://localhost:${PORT}/api/genre`,
  'Streaming Platform': `http://localhost:${PORT}/api/streaming_platform`
   })                                            
})                                               //40

// router.use('/api/movie', require('./api/movieRoutes'))  
// router.use('/api/actor', require('./api/actorRoutes')) 
// router.use('/api/production', require('./api/productionRoutes')) 

const endpoints = [
  'movie',
  'actor',
  'director',
  'genre',
  'production',
 'streaming_platform'
]
endpoints.forEach(endpoint => {
  router.use(`/api/${endpoint}`, require(`./api/${endpoint}Routes`))
})


router.use((req, res, next)=> {                 //41
  res.status(404)                               //42
  .send('<h1>404 this page does not exist</h1>')//43
})                                              //44

module.exports = router                         //34 export router
