const express = require('express')              //81
const router = express.Router()                 //82

const {movieDao: dao} = require('../../daos/dao') //84
const { table } = require('../../daos/api/movieDao')
// http://localhost:3000/api/movie
router.get('/', (req ,res)=> {
     dao.findAll(res, dao.table)
 })

// // http://localhost:3000/api/movie
// router.get('/', (req, res)=> {                  //85
//     dao.findMovieInfo(res, dao.table)            //86
// })                                              //87
router.get('/sort/:sorter', (req, res)=> {    
    dao.sort(res, dao.table, req.params.sorter)
})                                  
//http://localhost:3000/api/:id
router.get('/:id', (req, res)=> {                //107
    dao.findById(res, dao.table, req.params.id)  //108         
})                                                //109
 

module.exports = router                         //83