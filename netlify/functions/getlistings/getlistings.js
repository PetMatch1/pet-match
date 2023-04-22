const express = require("express");
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

const handler = async (event) => {
    app.get("https://api.sampleapis.com/coffee/hot",function(req,res){
        console.log(req.body)
})
}

module.exports = { handler }