const express=require('express')
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
const app=express()
const port=3000
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const continentmodel=require('./models/continent')
const url="mongodb+srv://dbSweta:dbUserSweta@cluster0-rfpcb.mongodb.net/public?retryWrites=true&w=majority"

mongoose.connect(url, { useNewUrlParser: true,useUnifiedTopology: true});

app.set('view engine', 'pug');

//app.use(express.static('public'));

app.get('/',(req,res)=>{
    continentmodel.find({}).exec((err,continent)=>{
        res.render('index',{continents:continent})
    })
})

app.post("/submit",urlencodedParser,(req,res)=>{
   
    var continent = new continentmodel({
        _id: new mongoose.Types.ObjectId().toHexString(),
         continentName: req.body.name});
    continent.save(function(err,continent){
        if(err){
            throw err;
        }
        else
        {
            continentmodel.find({}).exec((err,continent)=>{
                res.render('index',{continents:continent})
            })
        }
    });
})

app.put('/update/:id',urlencodedParser,(req,res)=>{
    var id=req.params.id;
    console.log(id);
    try {
        continentmodel.findByIdAndUpdate(id, req.body)
        continentmodel.save()
        continentmodel.find({}).exec((err,continent)=>{
            res.render('index',{continents:continent})
        })
      } catch (err) {
        res.status(500).send(err)
      }
})

app.delete('/delete/:id',urlencodedParser,(req,res)=>{
    var id=req.params.id;
    console.log(id);
    try {
        const continent = continentmodel.findByIdAndDelete(id)
    
        if (!continent) res.status(404).send("No item found")
        continentmodel.find({}).exec((err,continent)=>{
            res.render('index',{continents:continent})
        })
      } catch (err) {
        res.status(500).send(err)
      }
})

app.listen(port,()=>{
    console.log(`open at http//:localhost:${port}`)
})