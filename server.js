const express = require('express')                             // step 1 set up server 1-4
const server = express()                                       //2
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


server.use(cors())                                            //7  cors set up
server.use(express.json())                                    //17 make json
server.use(express.urlencoded({extended: true}))              //18 urls                         

server.listen(PORT, ()=> console.log(`Movies are cool !`));    //4
