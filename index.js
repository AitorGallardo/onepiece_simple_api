const express = require('express');
const cors = require('cors');

const data = require('./onepiece_eastblue.json'); // Replace 'data.json' with the actual filename and path to your JSON file

require('dotenv').config();

const arr = Object.values(data)[0];
const amountOfPirates = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue.members.length,
  0,
);

const apiKeyMiddleware = require('./middlewares');

const app = express();

app.use(cors());

app.use(apiKeyMiddleware);

app.get('/', (req, res) => {
  res.send('👋👋👋')
})

app.get('/api/', (req, res) => {
  res.status(200).json({ 'Success Request' });
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
