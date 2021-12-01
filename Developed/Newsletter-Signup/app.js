//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {

  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  const data = {
      members: [{
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        }
      }
    ]
  };

  console.log(firstName, lastName, email);

  const jsonData = JSON.stringify(data);
  const url = "https://us20.api.mailchimp.com/3.0/lists/556ed07dad";
  const options = {
    method: "POST",
    auth: "aurimas13:2e1155a1d40ae472ae17219ee5d25370-us20"
  };
  const request = https.request(url, options, function(response) {

      if (response.statusCode === 200) {
        res.sendFile(__dirname + "/success.html");
      } else {
        res.sendFile(__dirname + "/failure.html");
      }

      response.on("data", function(data) {
          console.log(JSON.parse(data));
      })
  });

  request.write(jsonData); request.end();

});

app.post("/failure", function(req, res) {
  res.redirect("/")
});

app.listen(process.env.PORT || 3333, function() {
  console.log("Server is running on heroku or locally at port 3333");
});

// API Key
// 3dcbc46278b08c1378901ffd90deb775-us20 (github added, so available locally)
// 2e1155a1d40ae472ae17219ee5d25370-us20

// List/Audience Id
// 556ed07dad
