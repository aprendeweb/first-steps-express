const express = require('express');
const router = express.Router();
const {
  getAllPeoples,
  createPoeple,
  deletePoeple,
  updatePoeple,
} = require('./controller');

router.get('/', getAllPeoples);
router.post('/', createPoeple);
router.delete('/:code', deletePoeple);
router.put('/:code', updatePoeple);

module.exports = router;
