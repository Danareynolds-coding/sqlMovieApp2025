const connect = require('../../config/dbconfig')     

const daoCommon = {                                  
//methods to query db
findAll: (res, table)=> {                       

  //sql 2 args 1.sql query 2. call back action
    connect.query(                                  //48
     `SELECT * FROM ${table};`,                     //49
     (error, rows )=> {                             //50
        if (!error){                                //51
          if (rows.length === 1) {                  //52
            res.json(rows[0])                       //53
          }else{                                    //54
            res.json(rows)                          //55
          }                                         //56
        }else{                                      //57
          console.log(`Dao Error: ${error}`)        //58
          res.json({                                //59
            "message":'error',                      //60
            'table': `${table}`,                    //61
            'error': error                          //62
          })                                        //63
        }                                           //64
      }                                             //65
     )                                              //66
  },                                                //67

  findById: (res, table, id)=> {                        //89

    connect.query(                                    //90
      `SELECT * FROM ${table} WHERE ${table}_id = ${id};`, //91
      (error, rows)=> {                                    //92
        if (!error ){                                      //93 
          if (rows.length === 1) {                        //94
            res.json(rows[0])                             //95
          } else {
            res.json(rows)
          }
        }else{                                            //96
          console.log(`DAO Error: ${error}`)              //97
          res.json({                                      //97
            "message": 'error',                           //98
            'table':`${table}`,                           //99
            'error':error                                 //100
          })                                              //101
        }                                                 //102
      }                                                   //103
    )                                                     //104
  },                                                      //105

  sort:(res, table, sorter)=> {                           //110

    connect.query(                                        
      `SELECT * FROM ${table} ORDER BY ${sorter};`,       

      (error, rows)=> {                                  
        if (!error){                                     
          if (rows.length === 1){
            res.json(rows[0])
          }else{
            res.json(rows)
          }                           
        }else{                                            
          console.log(`DAO Error: ${error}`)              
          res.json({                                      
            "message": 'error',                          
            'table':`${table}`,                          
            'error':error                                
          })                                              //101
        }
      }
    )
  }
}                                                          //68


module.exports = daoCommon                                //46