const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('Наше промежуточное ПО');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/contact', (req, res) => {
  res.send('<h1>Contact Page</h1>');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
