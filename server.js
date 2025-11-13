const express = require('express')                             // step 1 set up server 1-4
const server = express()                                       //2
const router = require('./routes/router')                      //29connect router pt1              
const PORT = process.env.PORT || 3000                          //3



const helmet = require('helmet')                              //5 import helmet security
const cors = require('cors')                                  //6 import cors security


//server.use(helmet())                                        // helmet set up not used
server.use(helmet.contentSecurityPolicy({                     //8 helmet config 8-16
  useDefaults:true,                                           //9
  crossOriginResourcePolicy: false,                           //10  
  crossOriginEmbedderPolicy: false,                           //11
  directives:{                                                //12
      "img-Src": ["'self'", "https: data"],                   //13                 
      "scriptScr": ["'self'", "cdn.jsdelivr.net"]             //14
      }                                                       //15          
}))                                                            //16

server.use(cors())                                            //  cors set up
server.use(express.json())                                   // make json
server.use(express.urlencoded({extended: true}))              //18 urls                         

// '/' is  localhost:300
server.use('/', router)                                       //30connect router pt2

server.listen(PORT, ()=> console.log(`Movies are cool !`));    //4
