const MongoClient = require('mongodb')
const url="mongodb://localhodt:27017"

MongoClient.connect(url,{useUnifiedTopology:true}, function(err, client) {
    console.log("Connected successfully to server");
    const db=client.db('comics')
    const collection=db.collection('superheroes')
    collection.find({}).toArray((err,superheroes)=>{
        if(err)
        {
            console.log(err)
        }
       
        client.close()
        res.render('index',{superhero:superheroes})
    })
   
  });