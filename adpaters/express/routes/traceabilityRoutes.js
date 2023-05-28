const express = require('express');
const traceabilityController = require('../controllers/TraceabilityController');

const router = express.Router();

router.get('/traceabilities/:id', traceabilityController.findById);
router.get('/traceabilities', traceabilityController.findAll);
router.get('/traceabilities/search/:numberBatch',traceabilityController.findByNumberBatch);
router.post('/traceabilities', traceabilityController.create);
router.delete('/traceabilities/:id', traceabilityController.remove);

module.exports = router;