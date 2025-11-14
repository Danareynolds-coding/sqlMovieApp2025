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
// http://localhost:3000/actor-form
router.get('/actor-form', (req, res)=> {
    res.render('pages/actor-form', {
      title: 'ACTOR FORM',
      name: 'Add an Actor'
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
  .render('pages/error', {
    title:'error page',
    name: '404 - Page Not Found'
  })
})                                              

module.exports = router                         // export router
