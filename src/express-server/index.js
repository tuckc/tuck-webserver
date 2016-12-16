var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var exphbs = require('express-handlebars');
var app = express();
var port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/', express.static(path.join(__dirname + '/public')));
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', (req, res) => {
  res.render('index.html');
});

app.post('/node/', (req, res) => {
  console.log("TEST ENDPOINT HIT");
  console.log(req.body);
  var test = req.body.test;
  var test2 = req.body.test2;
  console.log("Test: " + test + "\nTest2: " + test2);
  res.render('test.html');
});

var mod = {
  app: app,
  port: port
};

module.exports = mod;
