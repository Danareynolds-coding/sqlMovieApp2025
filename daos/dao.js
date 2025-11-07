const daoCommon = require('./common/daoCommon')   //73

const movieDao = {                                //74
  ...daoCommon,                                   //75
  ...require('./api/movieDao')                    //76
}                                                 //77

module.exports = {                                //78
  movieDao                                        //79
}                                                 //80