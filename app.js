


 


const express  = require('express');
const app = new express();
// requure api
//const api = require('./src/routes/api');

// versioning api
//app.use('/', api);
//app.use('/api/v1', api);

// home route
app.get('/', function(req, res){
  res.send("hello home route 28");
});

// undefine route
app.use('*', function(req, res){
   res.send("404 ok err 28");
});



// app export
module.exports = app
