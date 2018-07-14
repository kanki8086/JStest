var express = require('express');
var app = express();


app.options('/',function(req,res){
  console.log('options accessed');
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET');
  res.set('Access-Control-Allow-Headers', 'Origin, Authorization, Accept, Content-Type');
  res.set('Access-Control-Max-Age', '3600');
  res.json({
  });
});


app.get('/',function(req,res){
  console.log(req.headers);
  res.json({
    message:"Hello,world"
  });
});


let port = 3001;
app.listen(port);
console.log('running at port ' + port);