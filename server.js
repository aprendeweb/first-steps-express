const express = require('express');
const app = express();
const peopleRouter = require('./src/peoples/routes');
const { port } = require('./config');
const morgan = require('morgan');
const helmet = require('helmet');

const errorHandler = (error, req, res, next) => {
  console.log(error.message);
  res.status(500).send(`Something wrong ${error.message}`);
};

app.use(helmet());
app.use(morgan('combined'));
app.use(express.json());
app.use('/people', peopleRouter);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Server listen on port', port);
});
