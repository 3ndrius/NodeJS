var express = require('express');

var app = express();

app.set('view engine', 'ejs');

 app.use('/assets', express.static('assets'));

// app.use('/assets', function(req, res, next) {
//     console.log(req.url);
//     next();
// });


app.get('/', (req, res)=>{
    res.render('index');
});

app.get('/contact', (req, res)=>{
    res.render('contact');
});

var data = {age:24, name: 'Josh', job:'programmer', hobbies:['eating', 'fishing', 'gaming']};

app.get('/profile/:id', (req, res)=> {
    res.render('profile', { person: req.params.id, data: data });
});


app.listen(3000); 