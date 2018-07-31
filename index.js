var express = require('express');
var app = express();

/*app.use('/static', express.static(path.join(__dirname, '/view')));*/

app.get('/', function(req, res){
  /*res.render('page.html');*/
  res.send("Hi");
});

app.listen(3000, function(){
  console.log('App Listening on port 3000');
});
