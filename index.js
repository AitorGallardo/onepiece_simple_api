const express = require('express');
const cors = require('cors');

const data = require('./onepiece_eastblue.json'); // Replace 'data.json' with the actual filename and path to your JSON file

require('dotenv').config();

const apiKeyMiddleware = require('./middlewares');

const app = express();

app.use(cors());

app.use(apiKeyMiddleware);

app.get('/api/', (req, res) => {
  res.status(200).json({ message: 'Success.' });
});

app.get('/api/crews', (req, res) => {
  res.json(data);
});

app.get('/api/crews/:id', (req, res) => {
  const { id } = req.params;
  const arr = Object.values(data)[0];
  const crew = arr.find((r) => r.id == id);

  res.json(crew);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
