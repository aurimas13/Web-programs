const express = require("express");
const https = require('https');
const bodyParser = require("body-parser");

const app = express();

// necessary code for us to start parsing through of post request
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");

});

app.post("/", function(req, res){
  console.log(req.body.cityName);
  // getting live data using an api
   const query = req.body.cityName;
   const apiKey = "3244f13aca3f4703024de40b631e8ce2";
   const unit = "metric";
   const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey +"&units=" + unit;
  // making an https request to get data as a JSON format
   https.get(url, function(response){
     console.log(response.statusCode);

     response.on("data", function(data){
       const weatherData = JSON.parse(data);
       // parsing data as JSON format and fetching the specific items
       const temp = weatherData.main.temp;
       const weatherDescription = weatherData.weather[0].description;
       const icon = weatherData.weather[0].icon;
       const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
       console.log(weatherDescription);
       // const object = {
       //   name: "Aurimas",
       //   favouriteFood: "Burger"
       // }
       // // turns JS object into string:
       // console.log(JSON.stringify(object));
       // turns to JSON
       // console.log(weatherData);
       // can have multiple res.write() but only one re.send()
       // sending data back to the browser using html we wanted to write
       res.write("<p> The weather is currently " + weatherDescription + ".</p>");
       res.write("<h1>The temperature in " + query + " is " + temp + " degrees Celsius.</h1>");
       res.write("<img src=" + imageURL + ">");
       res.send();
     })
   })
});

app.listen(3000, function() {
  console.log("Server is running on port 3000.");
});
