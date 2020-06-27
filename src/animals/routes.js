const express = require('express');
const router = express.Router();
const { responseInitialRoute, responseBody } = require('./controller');
const { makeLog } = require('./middleware');

router.get('/', responseInitialRoute);
router.post('/', makeLog, responseBody);

module.exports = router;
