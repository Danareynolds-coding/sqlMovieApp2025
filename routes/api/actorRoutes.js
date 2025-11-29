
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

//   http://localhost:3000/api/actor/get_movieForActor/?
router.get('/get_movieForActor/:id', (req, res)=> {
  dao.findMovieByActor(res, dao.table, req.params.id)
})
// http://api/actor/?
router.get('/:id', (req, res)=> {
  dao.findById(res, dao.table, req.params.id)
})
//POST  http://localhost:3000/api/actor/create
router.post('/create',(req, res)=> {
  dao.create(req, res, dao.table)
})

//PATCH
http://localhost:3000/
router.patch('/update/:id', (req, res)=> {
  dao.update(req, res,dao.table)
})
  


module.exports = router
