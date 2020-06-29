require('dotenv').config();
require('./server');
const fs = require('fs');
const { dbFilePath } = require('./config');

initialValues = {
  peoples: [],
};

if (!fs.existsSync(dbFilePath))
  fs.writeFileSync(dbFilePath, JSON.stringify(initialValues));
