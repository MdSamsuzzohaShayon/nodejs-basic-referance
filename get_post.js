const express = require('express');


let bodyParser = require('body-parser')

let app = express();
// BODY PARSER IS A NPM PACKAGE 
// IT USED TO SHOW DATA WHAT WE GET FROM USER
let urlencodedParser = bodyParser.urlencoded({ extended: false })


//USING EJS FOR OUR VIEW ENGEN
app.set('view engine','ejs');
//FOR USING STYLESHEET
app.use('/assets',express.static('assets'));






app.get('/',(req, res)=>{
    res.render('index');
});
app.get('/news',(req, res)=>{
    res.render('news', {qs: req.query});
});
app.post('/news',urlencodedParser, (req, res)=>{
    console.log(req.body);
    res.render('news-success',{data : req.body});
});
app.get('/about',(req, res)=>{
    res.render('about');
});





app.listen(3000);