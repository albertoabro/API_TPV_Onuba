const express = require('express');
const providerController = require('../controllers/ProviderController');

const router = express.Router();

router.get('/providers/:id', providerController.findById);
router.get('/providers', providerController.findAll);
router.get('/providers/search/:nameProvider', providerController.findByNameProvider);
router.post('/providers', providerController.create);
router.put('/providers/:id', providerController.update);
router.delete('/providers/:id', providerController.remove);

module.exports = router;