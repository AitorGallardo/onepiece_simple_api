const express = require('express');
const data = require('./onepiece_eastblue.json'); // Replace 'data.json' with the actual filename and path to your JSON file

require('dotenv').config();

const apiKeyMiddleware = require('./middlewares');

const app = express();

app.use(apiKeyMiddleware);

app.get('/api/data', (req, res) => {
  res.json(data);
});


const port = 3000; // Replace with the desired port number
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});