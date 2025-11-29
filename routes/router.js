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

// http://localhost:3000/actors-form
router.get('/actors-form', (req, res)=> {
    res.render('pages/actors-form', {
      title: 'Actors Form',
      name: 'Add an Actor'
    })
})

// http://localhost:3000/directors-form
router.get('/directors-form', (req, res)=> {
    res.render('pages/directors-form', {
      title: 'Directors Form',
      name: 'Add a Director'
    })
})
// http://localhost:3000/genre-form
router.get('/genre-form', (req, res)=> {
    res.render('pages/genre-form', {
      title: 'GENRE FORM',
      name: 'Add a Genre'
    })
})
// http://localhost:3000/production-form
router.get('/production-form', (req, res)=> {
    res.render('pages/production-form', {
      title: 'PRODUCTION COMPANY FORM',
      name: 'Add a Production Company'
    })
})
// http://localhost:3000/streaming_platform-form
router.get('/streaming_platform-form', (req, res)=> {
    res.render('pages/streaming_platform-form', {
      title: 'STREAMING PLATFORM FORM',
      name: 'Add a Streaming Platform'
    })
})

//RootRoute=> http://localhost:3000/api 
router.get('/api',(req, res)=> {                  
 // res.send('album api')     just checking//
 res.json({                                      
  'Movies': `http://localhost:${PORT}/api/movie`, 
  'Actors': `http://localhost:${PORT}/api/actor`,
  'Directors':`http://localhost:${PORT}/api/director`,
  'Production':`http://localhost:${PORT}/api/production`,
  'Genres': `http://localhost:${PORT}/api/genre`,
  'Streaming Platform': `http://localhost:${PORT}/api/streaming_platform`
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
})                    // http://localhost:3000/actors-form

                          
  

module.exports = router                         // export router
