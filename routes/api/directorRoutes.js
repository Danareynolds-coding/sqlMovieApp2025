const router = require('express').Router()
const{directorDao: dao} = require('../../daos/dao')
//http://localhost:3000/api/director
router.get('/',(req, res)=> {
  dao.findAll(res, dao.table)
})
//   http://localhost:3000/api/director/get_movieForDirector/?
router.get('/get_movieForDirector/:id', (req, res)=> {
  dao.findMovieByDirector(res, dao.table, req.params.id)
})
//htpp://localhost:3000/api/director/sort/:sort
router.get('/sort/:sorter', (req, res)=> {
  dao.sort(res, dao.table, req.params.sorter)
})
router.get('/:id', (req, res)=> {
  dao.findById(res, dao.table, req.params.id)
})
module.exports = router