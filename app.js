var express = require('express')
var app = express()

// Build Your Route Here
app.get("/",function(req, resp){
  resp.render("index.ejs" ,{
    welcomePhrase: "Hello, World from Express and EJS!"
  })
})

module.exports = app
