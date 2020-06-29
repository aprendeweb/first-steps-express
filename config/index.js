const path = require('path');

module.exports = {
  port: process.env.PORT,
  dbFilePath: path.join(__dirname, '../', process.env.BD_FILENAME),
};
