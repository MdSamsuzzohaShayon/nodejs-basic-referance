//npm install express
//npm uninstall express

const express = require('express');

let app = express();
//USING EJS FOR OUR VIEW ENGEN
app.set('view engine','ejs');
app.get('/',(req, res)=>{
    res.send('this is the home');
});
app.get('/home',(req, res)=>{
    res.sendFile(__dirname+ '/express.html');
});
app.get('/contract',(req, res)=>{
    res.send('this is the Contract');
});
/*app.get('/profile/:id',(req, res)=>{
    res.send('you requester to see profile of id: '+ req.params.id);
});
app.get('/profile/:name',(req, res)=>{
    res.send('you requester to see profile of name: '+ req.params.name);
});
*/


app.get('/profile/:name',function(req, res){
    let data = {age: 22, job:'developer'};
    //LOOKING VIEWS FOLDER THAT IS DEFAULT BEHAVIOR
    res.render('profile',{person: req.params.name, data:data});
});


app.listen(3000);