const express = require('express');
const app = express();
const peopleRouter = require('./src/peoples/routes');
const animalRouter = require('./src/animals/routes');

const errorHandler = (error, req, res, next) => {
  console.log(error.message);
  res.status(500).send(`Something wrong ${error.message}`);
};

app.use(express.json());

app.use('/people', peopleRouter);
app.use('/animal', animalRouter);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log('Server listen on port', process.env.PORT);
});
