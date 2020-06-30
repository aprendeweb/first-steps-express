const express = require('express');
const router = express.Router();
const { createPoepleSchema, updatePeopleSchema } = require('./schemas');
const validateInformation = require('./middleware');
const {
  getAllPeoples,
  createPoeple,
  deletePoeple,
  updatePoeple,
} = require('./controller');

router.get('/', getAllPeoples);
router.post('/', validateInformation(createPoepleSchema), createPoeple);
router.delete('/:code', deletePoeple);
router.put('/:code', validateInformation(updatePeopleSchema), updatePoeple);

module.exports = router;
