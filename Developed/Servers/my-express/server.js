
const express = require("express");

const app = express();

app.get("/", function(req, res) {
  res.send("<h1>Hello</h1>");
});

app.get("/contact", function(req, res) {
  res.send("Contact me at aurimas@gmail.com");
});

app.get("/about", function(req, res) {
  res.send("Aurimas is awesome");
});

app.get("/hobbies", function(req, res) {
  res.send("<ul><li>Coffee</li><li>Code</li><li>Sports</li></ul>");
});

app.listen(3000, function() {
    console.log("Server started on port 3000")
});
