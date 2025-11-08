
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
router.get('/:id', (req, res)=> {
  dao.findById(res, dao.table, req.params.id)
})
module.exports = router
