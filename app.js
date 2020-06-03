var EJS  = require('ejs');
const express = require('express');
const app=express()
const bodyParser = require('body-parser')
const mongoose=require('mongoose')
const {mongourl}=require('./config/keys')

mongoose.connect(process.env.Mongourl||mongourl,{useNewUrlParser: true,useUnifiedTopology:true});

const port=process.env.PORT||5000

app.use(bodyParser.urlencoded({extended:false}))

// serving static files using express
app.use(express.static('public'));

// import routes
require('./routes')(app)

// use ejs
app.set('view engine', 'ejs');

// port listening
app.listen(port,()=>{
    console.log("server is running on "+port)
});