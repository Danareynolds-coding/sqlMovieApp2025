
const router = require('express').Router()
const{actorDao: dao} = require('../../daos/dao')

//http://localhost:3000/api/actor
router.get('/',(req, res)=> {
  dao.findAll(res, dao.table)
})

//htpp://localhost:3000/api/actor/sort/:sort
router.get('/sort/:sorter', (req, res)=> {
  dao.sort(res, dao.table, req.params.sorter)
})
// http://api/actor/?
router.get('/:id', (req, res)=> {
  dao.findById(res, dao.table, req.params.id)
})
//   http://localhost:3000/api/actor/get_movieForActor/?
router.get('/get_movieForActor/:id', (req, res)=> {
  dao.findMovieByActor(res, dao.table, req.params.id)
})

module.exports = router
