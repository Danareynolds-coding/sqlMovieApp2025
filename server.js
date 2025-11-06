const express = require('express')                             //1
const server = express()                                       //2
const PORT = process.env.PORT || 3000                          //3


server.listen(PORT, ()=> console.log('Movies are cool !'));    //4
