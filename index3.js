require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express');
const res = require('express/lib/response');
const app = express()
//const port = 3000
const { Schema } = mongoose;
// schema
console.log(process.env.DATABASE_URI)
  const SalesSchema = new Schema({
       item:String,
       qty:Number,
       status:String
    
  });

//   const studentSchema = new Schema({
//     name:String,
//     age:Number
// });
mongoose.connect(process.env.DATABASE_URI,{
  useUnifiedTopology:true,
  useNewUrlParser:true
})
.then(() =>{console.log('database connected')})
.catch ((err)=>{
  console.log(`database not connected ->${err.message}`)
})
// create sales modle

const Sales=mongoose.model('sales', SalesSchema) 
//const Student=mongoose.model('student', studentSchema) 

// app.route('/students').get(function(req, res) {
//   Student.find({},(err, result)=>{
//     if (!err){
//       res.send(result);
//     }else{
//       console.log(err)
//       res.send('Some Error')

//     }
  
    
//   })
  //res.send('Some Error')
//})
app.get('/', (req,res)=> res.send ('Welcome Home'));
app.get('/sales', (req, res) => {
  Sales.find({},(err,found)=>{
    if (!err){
      res.send(found);
    }else{
      console.log(err)
      res.send('Some Error')

    }
    
  })
  //res.send('Some Error')
})
 
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
