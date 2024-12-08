const express = require('express');
const app = express();

app.use(function(req, res, next){
  res.status.apply(200).send(`<h1> Hi! Welcome ~ </h1>
          <h1>Hello World!!!!!!</h1>`);
});

app.listen(500);
