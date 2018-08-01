var express = require('express');
var app = express();
var mysql = require('mysql');
/*app.use('/static', express.static(path.join(__dirname, '/view')));*/


app.set('view engine', 'ejs');

app.get('/', function(req, res){
  /*res.render('page.html');*/
  res.render('page');
});

app.listen(3000, function(){
  console.log('App Listening on port 3000');
});
