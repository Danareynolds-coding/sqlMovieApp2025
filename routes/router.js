const express = require('express')               

const router = express.Router()                 //  define router
const PORT = process.env.PORT || 3000 

//http://localhost:3000
router.get('/', (req, res)=> {
    res.render('pages/home', {
      title: 'movie-app home',
      name:"Movies to Talk About"
    })
})

//RootRoute=> http://localhost:3000/api 
router.get('/api',(req, res)=> {                  
 // res.send('album api')                         // just checking
 res.json({                                      
  'Movies': `http://localhost:${PORT}/api/movie`, 
  'Actors': `http://localhost:${PORT}/api/actor`,
  'Directors':`http://localhost:${PORT}/api/director`,
  'Production':`http://localhost:${PORT}/api/production`,
  'Genres': `http://localhost:${PORT}/api/genre`,
  'Streaming Platform': `http://localhost:${PORT}/api/streaming_platform`,
  
   })                                            
})                                              

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


router.use((req, res, next)=> {                
  res.status(404)                               
  .send('<h1>404 this page does not exist</h1>')
})                                              

module.exports = router                         // export router
