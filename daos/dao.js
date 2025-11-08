const daoCommon = require('./common/daoCommon')   //73

const movieDao = {                                //74
  ...daoCommon,                                   //75
  ...require('./api/movieDao')                    //76
}        
const actorDao = {                                //74
  ...daoCommon,                                   //75
  ...require('./api/actorDao')                    //76
} 
const directorDao = {                                //74
  ...daoCommon,                                   //75
  ...require('./api/directorDao')                    //76
} 
const genreDao = {                                //74
  ...daoCommon,                                   //75
  ...require('./api/genreDao')                    //76
}                                                         //77
const productionDao = {                                //74
  ...daoCommon,                                   //75
  ...require('./api/productionDao')                    //76
}
const streaming_platformDao = {                                //74
  ...daoCommon,                                   //75
  ...require('./api/streaming_platformDao')                    //76
}                       
     
module.exports = {                                
  movieDao,                                       
  actorDao,
  directorDao,
  genreDao,
  productionDao,
  streaming_platformDao
}
                                                 