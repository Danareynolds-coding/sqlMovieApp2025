const express = require('express')                             // step 1 set up server 1-4
const server = express()                                       //2
const router = require('./routes/router')                      //29connect router pt1              
const PORT = process.env.PORT || 3000                          //3



const helmet = require('helmet')                              //5 import helmet security
const cors = require('cors')                                  //6 import cors security


//server.use(helmet())                                        // helmet set up not used
server.use(helmet.contentSecurityPolicy({                     //8 helmet config 8-16
  useDefaults:true,                                          
  crossOriginResourcePolicy: false,                             
  crossOriginEmbedderPolicy: false,                           
  directives:{                                                      "img-Src": ["'self'", "https: data"],                                   
      "scriptScr": ["'self'", "cdn.jsdelivr.net"]             
      }                                                                
}))                                                           

server.use(cors())                                            //  cors set up
server.use(express.json())                                   // make json
server.use(express.urlencoded({extended: true}))                                  
server.set('view engine', 'ejs')
// '/' is  localhost:300
server.use('/', router)                               // connect router//

server.listen(PORT, ()=> console.log(`Movies are cool !`));    
