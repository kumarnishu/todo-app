module.exports=(app)=>{
const Wish=require('./models/wish')
// home route
app.get('/',(req,res)=>{
    Wish.find({}).then(data=>{
        res.render("home",{wish:data})
    })
})

// ejs using
app.get('/about',(req,res)=>{
    res.render('about',{})
})

// post

app.post('/sent',(req,res)=>{
    const Item=new Wish({
        wish:req.body.name
    })
    Item.save().then(data=>{
        console.log("saved");
        res.send(data);
    })

})
  
app.delete('/remove/:id',(req,res)=>{
    Wish.findOneAndRemove({wish:req.params.id}).then(data=>{
        console.log("deleted");
        res.send(data);
    })  
})
}