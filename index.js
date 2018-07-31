var express = require('express');
var app = express();
var mysql = require('mysql');
/*app.use('/static', express.static(path.join(__dirname, '/view')));*/

var connectionmysql = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodeDB'
});

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  /*res.render('page.html');*/
  res.render('page');
});

app.listen(3000, function(){
  console.log('App Listening on port 3000');
});

connectionmysql.connect(function() {
  console.log("DB Connected!");
});
