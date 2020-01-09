// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/blog.amp.html");//esto si queremos servir un archivo desde el mismo server
  //response.redirect("https://amp-test2.herokuapp.com/blog.amp.html");//esto para servir un archivo cualquiera 
  //hay que guardar el código en GitHub y conectarlo en Heroku, finalmente lo que ponemos en el redirect es Heroku
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});