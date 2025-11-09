const express = require('express')              //81
const router = express.Router()                 //82

const {movieDao: dao} = require('../../daos/dao') //84
const { table } = require('../../daos/api/movieDao')
// http://localhost:3000/api/movie
// router.get('/', (req ,res)=> {
//      dao.findAll(res, dao.table)
//  })

// http://localhost:3000/api/movie
router.get('/', (req, res)=> {                  
    dao.findMovieInfo(res, dao.table)            
}) 

// http://localhost:3000/api/movie/with_actors
router.get('/with_actors', (req, res)=> {
    dao.findMoviesWithActors(res, dao.table)
})
// http://localhost:3000/api/movie/with_genres
router.get('/with_genres', (req, res)=> {
    dao.findMoviesWithGenres(res, dao.table)
})
//http://localhost:3000/api/movie/get_movieDirector/?
router.get('/get_movieDirector/:id',(req, res)=> {
    dao.findMovieByDirectorId(res, dao.table, req.params.id)
})

router.get('/get_movieActor/:id', (req, res)=>{
    dao.findMovieByActorId(res, dao.table, req.params.id)
})
                                       
router.get('/sort/:sorter', (req, res)=> {    
    dao.sort(res, dao.table, req.params.sorter)
})                                  
//http://localhost:3000/api/:id
router.get('/:id', (req, res)=> {               
    dao.findById(res, dao.table, req.params.id)          
})                                                

module.exports = router                         