//const {queryAction} = require('../../helpers/queryAction')
// queryAction(re, error, rows, table)
const queryAction = (obj, error, row, table)=> {

        if (!error ){  
          if (rows.length === 1){
            obj.json(...rows)
          } else{
            obj.json(rows)
          }                                  
        }else{                               
          console.log(`DAO Error: ${error}`) 
          obj.json({                         
            "message": 'error',              
            'table':`${table}`,              
            'error':error                    
          })                                 
        }                                    
      }    
      module.exports = {
        queryAction
      }                                  