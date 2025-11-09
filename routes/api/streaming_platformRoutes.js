
const router = require('express').Router()
const{streaming_platformDao: dao} = require('../../daos/dao')

//http://localhost:3000/api/streaming_platform
router.get('/',(req, res)=> {
  dao.findAll(res, dao.table)
})
//   http://localhost:3000/api/streaming_platform/get_movieForStreaming_platform/?
router.get('/get_movieForStreaming_platform/:id', (req, res)=> {
  dao.findStreaming_platform(res, dao.table, req.params.id)
})
//http://localhost:3000/api/streaming_platform/sort/:sort
router.get('/sort/:sorter', (req, res)=> {
  dao.sort(res, dao.table, req.params.sorter)
})
router.get('/:id', (req, res)=> {
  dao.findById(res, dao.table, req.params.id)
})
module.exports = router
