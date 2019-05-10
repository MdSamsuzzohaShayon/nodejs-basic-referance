const express = require('express');
//USING EJS FOR OUR VIEW ENGEN
// WE CAN DO EXECTLY SAME AS WE DO IN HTML
//WE CAN EMBABED JS DATA 

let bodyParser = require('body-parser')

let app = express();
let urlencodedParser = bodyParser.urlencoded({ extended: false })


//USING EJS FOR OUR VIEW ENGEN
app.set('view engine','ejs');
//FOR USING STYLESHEET
app.use('/assets',express.static('assets'));

/*app.get('/',function(req, res){
    let data = {age: 22, job:'developer'};
    res.sendFile(__dirname+'/index.html');
});*/





app.get('/',(req, res)=>{
    res.render('index');
});
app.get('/news',(req, res)=>{
    res.render('news', {qs: req.query});
});
app.post('/news',urlencodedParser, (req, res)=>{
    console.log(req.body);
    res.render('news',{qs: req.query});
});
app.get('/about',(req, res)=>{
    res.render('about');
});





app.get('/profile/:name',(req, res)=>{
    let data = {
        age: 22,
        job:'developer',
        hobbies: ['eating', 'fighting','Fishing']
        };
    //LOOKING VIEWS FOLDER THAT IS DEFAULT BEHAVIOR
    res.render('profile.ejs',{person: req.params.name, data:data});
    //res.render('profile.ejs');
});




/*app.get("/game/:gameTitle/:gameCreator",function(req,res){
    const title = req.params.gameTitle;
    const creator = req.params.gameCreator;
    res.render("game.ejs",{
        title: title,
        creator: creator
    })
});*/


app.listen(3000);