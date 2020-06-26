const express = require('express');
const app = express();
const peopleRouter = express.Router();
const animalRouter = express.Router();

app.use(express.json());

peopleRouter.get('/hello/:name', (req, res) => {
  console.log(req.params);
  res.send('Hello from people router');
});

animalRouter.get('/', (req, res) => {
  console.log(req.query);
  res.send('Hello from animal router');
});

animalRouter.post('/', (req, res) => {
  console.log(req.body);
  res.send('Body');
});

app.use('/people', peopleRouter);
app.use('/animal', animalRouter);

app.listen(3000, () => {
  console.log('Server listen on port', 3000);
});
