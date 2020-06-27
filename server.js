const express = require('express');
const app = express();
const peopleRouter = require('./src/peoples/routes');
const animalRouter = require('./src/animals/routes');

app.use(express.json());

app.use('/people', peopleRouter);
app.use('/animal', animalRouter);

app.listen(3000, () => {
  console.log('Server listen on port', 3000);
});
