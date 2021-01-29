const express = require("express");
const app = express()
const port = 1254
const path = require('path')
app.use(express.static(__dirname + "/public"));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname + "/public/home.html"));
})
app.get('/err',(req,res)=>{
    res.sendFile(path.join(__dirname + "/public/err.html"));
})

app.listen(port, () => {
  console.log(
    "The server is running," +
      " please, open your browser at http://localhost:%s",
    port
  );
});
