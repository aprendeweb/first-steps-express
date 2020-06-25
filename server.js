const express = require('express');
const app = express();
const peopleRouter = express.Router();
const animalRouter = express.Router();

peopleRouter.get('/hello', (req, res) => {
  res.send('Hello from people router');
});

animalRouter.get('/', (req, res) => {
  res.send('Hello from animal router');
});

app.use('/people', peopleRouter);
app.use('/animal', animalRouter);

app.listen(3000, () => {
  console.log('Server listen on port', 3000);
});
