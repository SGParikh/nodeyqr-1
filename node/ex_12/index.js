const express = require('express');
const onelinerjoke=require('one-liner-joke')
const app = express();
const port=3000;


app.get('/api/products',(req,res)=>{
    const jsonArray=`{
        description: 'Products',
        items: [
          { name: 'Star Wars jacket' , price: 100},
          { name: 'FIFA 22 PS4' , price: 79},
          { name: 'Superheore t-shirt' , price: 10},
          { name: 'Riders game shirt' , price: 200},
          { name: 'Large Meat lovers pizza' , price: 12},
          { name: 'Canada Dry  bottle' , price: 2}
        ]
      }`
    res.json(jsonArray)
})
  


  app.listen(port, function() {
    console.log(`Listening on port ${port}`);
  });