//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require("./date.js");
// or
// const date = require(__dirname + "/date.js");

const app = express();

// can be let items/workItems
const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {

  const day = date();
  res.render('list', {listTitle: day, newListItems: items});

});

app.post("/", function(req, res) {

  const item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    console.log(item);
    res.redirect("/work");
  } else {
    items.push(item);
    console.log(item);
    res.redirect("/");
  }

});

app.get("/work", function(req, res) {
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.post("/work", function(req, res) {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
})

app.listen(1111, function() {
  console.log("Server started on port 1111.");
});
