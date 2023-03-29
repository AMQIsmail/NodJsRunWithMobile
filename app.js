


 


const express  = require('express');
const app = express();
// requure api
//const api = require('./src/routes/api');

// versioning api
//app.use('/', api);
//app.use('/api/v1', api);

// undefine route
app.use('*', function(req, res){
   res.send("404");
});

// home route
app.get('/', function(req, res){
  res.send("hello home route 28");
});

// app export
module.exports = app
