var express = require('express');

var app = express();

app.set('view engine', 'ejs');


app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
});

app.get('/contact', (req, res)=>{
    res.sendFile(__dirname +'/contact.html');
});

var data = {age:24, name: 'Josh', job:'programmer', hobbies:['eating', 'fishing', 'gaming']};

app.get('/profile/:id', (req, res)=> {
    res.render('profile', { person: req.params.id, data: data });
});


app.listen(3000); 