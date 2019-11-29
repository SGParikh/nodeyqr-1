const express=require('express')
const app=express()
const port=3000
const MongoClient = require('mongodb')
const url="mongodb://localhost:27017"


app.get('/',(req,res)=>{
    MongoClient.connect(url,{useUnifiedTopology:true}, function(err, client) {
        if(err){
            console.log(err)
            return
        }
        console.log("Connected successfully to server");
        const db=client.db('comics')
        const collection=db.collection('superheroes')
        collection.find({}).toArray((err,superheroes)=>{
            if(err)
            {
                console.log(err)
            }
            client.close()
            res.json(superheroes)
        })
       
      });
    
})

  app.listen(port,()=>{
      console.log(`server is running on port:${port}`)
  })