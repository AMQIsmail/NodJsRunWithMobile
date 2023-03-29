const express = require('express');
const app = new express();


app.get('/', function(req, res){
res.send('node js run with mobile 28');
});

// undefine route
app.use('*', function(req, res){
   res.send("404");
});


app.listen(300, function(){
 console.log('node js runing with mobile');
})

