var express = require('express');
var bodyParser = require('body-parser');
var app = express();


var urlencodedParser = bodyParser.urlencoded({ extended:false});

app.set('view engine', 'ejs');

 app.use('/assets', express.static('assets'));

// app.use('/assets', function(req, res, next) {
//     console.log(req.url);
//     next();
// });

var data = {age:24, name: 'Josh', job:'programmer', hobbies:['eating', 'fishing', 'gaming']};

app.get('/', (req, res)=>{
    res.render('index');
});

app.get('/contact', (req, res)=>{
    res.render('contact', {quer:req.query});

    // console.log(req.query);
});

app.post('/contact', urlencodedParser, function(req,res) {
    console.log(req.body);
    res.render('contact-success', {data:req.body});
});



app.get('/profile/:id', (req, res)=> {
    res.render('profile', { person: req.params.id, data: data });
});


app.listen(3000); 