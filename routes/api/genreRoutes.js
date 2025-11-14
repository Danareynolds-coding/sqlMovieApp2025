const router = require('express').Router()
const{genreDao: dao} = require('../../daos/dao')

//http://localhost:3000/api/genre
router.get('/',(req, res)=> {
  dao.findAll(res, dao.table)
})
//   http://localhost:3000/api/genre/get_movieForGenre/?
router.get('/get_movieForGenre/:id', (req, res)=> {
  dao.findMovieByGenre(res, dao.table, req.params.id)
})
//htpp://localhost:3000/api/genre/sort/:sort
router.get('/sort/:sorter', (req, res)=> {
  dao.sort(res, dao.table, req.params.sorter)
})
router.get('/:id', (req, res)=> {
  dao.findById(res, dao.table, req.params.id)
})
router.post('/create', (req, res)=> {
  dao.create(req, res, dao.table)
})
router.patch('/update/:id', (req, res)=> {
  dao.update(req, res,dao.table)
})
  
module.exports = router