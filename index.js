const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Check out /test to see a json message from express!');
});

app.get('/test', (req, res) => {
  res.send({express: 'Welcome to Express!'});
});

app.listen(port, () => {
  console.log(`Currently listening on port ${port}`);
});