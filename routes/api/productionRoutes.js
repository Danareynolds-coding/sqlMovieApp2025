
const router = require('express').Router()

const {productionDao: dao} = require('../../daos/dao')
//http://localhost:3000/api/production
router.get('/', (req, res)=> {
  dao.findAll(res, dao.table)
  })
//   http://localhost:3000/api/production/get_movieForProduction/?
router.get('/get_movieForProduction/:id', (req, res)=> {
  dao.findMovieByProduction(res, dao.table, req.params.id)
})

//htpp://localhost:3000/api/production/sort/:sort
router.get('/sort/:sorter', (req, res)=> {
  dao.sort(res, dao.table, req.params.sorter)
})
router.get('/:id', (req, res)=> {
  dao.findById(res, dao.table, req.params.id)
})

 module.exports = router
