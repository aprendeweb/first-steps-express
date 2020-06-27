const express = require('express');
const router = express.Router();
const {
  responseInitialRoute,
  responseBody,
} = require('../controllers/animals');
const { makeLog } = require('../middlewares');

router.get('/', responseInitialRoute);
router.post('/', makeLog, responseBody);

module.exports = router;
