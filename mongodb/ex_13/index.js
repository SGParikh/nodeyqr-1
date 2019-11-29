const express=require('express')
var mongoose = require('mongoose');
const app=express()
const port=3000
const useromodel=require('./models/user')
const url="mongodb://localhost:27017/social"
mongoose.connect(url, { useNewUrlParser: true});


app.get('/user',(req,res)=>{
    useromodel.find({}).exec((err,user)=>{
         res.json(user)
    })
 })

 app.get('/:id',(req,res)=>{
     var id=req.params.id;
    useromodel.find({_id:id}).exec((user)=>{
         res.json(user)
    })
 })

 app.post('/user',(req,res)=>{
     useromodel.create(req,body,(err,user)=>{
        if(err){
            return res.status(400).json(err)
        }
        res.json(user)
     })
    //  let user=new useromodel(req.body)
    //  user.save(req.body).then((user)=>{
    //     res.json(user)
    // }).catch(err => console.log(err))
 })

app.listen(port,()=>{
    console.log(`server is running on port:${port}`)
})