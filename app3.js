const express = require('express');
const app = express();

app.use(function(req, res, next){
  console.log('First Middlewaer ...')
  req.user = 'HJH';
  next();
});

app.use(function(req, res, next){
  console.log('Second Middleware ...');
  res.status(200).send(`<h1>${req.user} responds at Express Server</h1>`);
})

app.listen(500);
