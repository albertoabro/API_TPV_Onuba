const express = require('express');
const traceabilityProductController = require('../controllers/TraceabilityProductController');

const router = express.Router();

router.get('/traceabilityProduct/:id', traceabilityProductController.findById);
router.get('/traceabilityProducts', traceabilityProductController.findAll);
router.post('/traceabilityProducts', traceabilityProductController.create);

module.exports = router;