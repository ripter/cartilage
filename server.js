/*global require __dirname */
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));
app.use('/libs', express.static(__dirname + '/bower_components'));

app.listen(3000);
console.log('Listening on port 3000');