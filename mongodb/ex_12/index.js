const express=require('express')
var mongoose = require('mongoose');
const superheromodel=require('./models/superhero.model')
const app=express()
const port=3000
//const MongoClient = require('mongodb')
const url="mongodb://localhost:27017/comics"
mongoose.connect(url, { useNewUrlParser: true });

app.get('/',(req,res)=>{
   superheromodel.find({}).exec((superheroes)=>{
        res.json(superheroes)
   })
})

  app.listen(port,()=>{
      console.log(`server is running on port:${port}`)
  })