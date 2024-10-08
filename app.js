var express = require('express');
var path = require('path');
var app = express();

app.get('/components', function(req, res){
    res.render('content');
});

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','pug');

app.listen(3000);
