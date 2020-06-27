const express = require('express');
const router = express.Router();
const { responseHelloRoute } = require('./controller');

router.get('/hello/:name', responseHelloRoute);

module.exports = router;
