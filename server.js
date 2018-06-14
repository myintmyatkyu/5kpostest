var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var router = require('./app/routes');//express.Router();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use("/",router);

var port=process.env.port||5000;
mongoose.connect("mongodb://localhost:27017/5KPOS");
app.listen(port,function(){
    console.log("Server is running at "+ port);
})