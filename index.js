const express = require("express");
const app = express()
const port = 1254
const path = require('path')
app.use(express.static(__dirname + "/public"));
const timeCheck = function (req, res, next) {
  var temp = moment().format("a");
  var time = moment().format("hhmm");
  if (temp == "am") {
    if ((parseInt(time) < 0900) || (parseInt(time) >= 1200)){
      app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname + "/public/err.html"));
      });
    }else {
      app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname + "/public/home.html"));
      });
      app.get("/services", (req, res) => {
        res.sendFile(path.join(__dirname + "/public/services.html"));
      });
      app.get("/aboutus", (req, res) => {
        res.sendFile(path.join(__dirname + "/public/about.html"));
      });
    }
    
    next();
  } else {
    if (parseInt(time) > 0500) {
      app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname + "/public/error.html"));
      });
    } else {
      app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname + "/public/home.html"));
      });
      app.get("/services", (req, res) => {
        res.sendFile(path.join(__dirname + "/public/services.html"));
      });
      app.get("/about", (req, res) => {
        res.sendFile(path.join(__dirname + "/public/about.html"));
      });
    }
  }
  next();
};


app.listen(port, () => {
  console.log(
    "The server is running," +
      " please, open your browser at http://localhost:%s",
    port
  );
});
