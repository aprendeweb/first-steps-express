const express = require('express');
const router = express.Router();
const { responseHelloRoute } = require('../controllers/peoples');

router.get('/hello/:name', responseHelloRoute);

module.exports = router;
