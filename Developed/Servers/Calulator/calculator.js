//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// A code you need to write to always use overparser
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {

console.log(req.body);

var num1 = Number(req.body.n1);
var num2 = Number(req.body.n2);

var result = num1 + num2;

  res.send("The result of the calculation is " + result);
});

app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
  console.log(req.body);
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = weight / (height * height);
  res.send("You BMI is " + bmi);
});

app.listen(3000, function() {
    console.log("Server started on port 3000")
});
