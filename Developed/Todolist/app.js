//jshint esversion:6


const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

var items = ["Buy Food", "Cook Food", "Eat Food"];


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {

  var today = new Date();
  var options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
  var day = today.toLocaleDateString("en-US", options);

  res.render('list', {kindOfDay: day, newListItems: items});

});

app.post("/", function(req, res) {
  var item = req.body.newItem;
  items.push(item);
  console.log(item);
  res.redirect("/");
});


app.listen(2222, function() {
  console.log("Server started on port 2222.");
});
