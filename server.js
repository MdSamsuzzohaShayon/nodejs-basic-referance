const express = require('express');
let app = express();

app.set('view engine','ejs');
app.use('/assets',express.static('assets'));






app.get('/',(req, res)=>{
    res.render('index');
});
app.get('/news',(req, res)=>{   
    res.render('news',{qs: req.query});
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


app.listen(3000);


