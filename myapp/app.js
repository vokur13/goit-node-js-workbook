const express = require('express');
const app = express();

const PORT = 3000;

app.use((req, res, next) => {
  console.log('Наше промежуточное ПО');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/contact/:id', (req, res) => {
  res.send(`<h1>Contact Page</h1> Parameter: ${req.params.id}`);
});

app.listen(PORT, () => {
  console.log('Example app listening on port 3000!');
});
