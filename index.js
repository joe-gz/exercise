var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect("mongodb://localhost/exercise");

var app = express();

app.use(express.static(__dirname+ '/public'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/',function(req,res){
  console.log('what up?');
})

app.listen(3000);
