const express = require('express');
const typePayController = require('../controllers/TypePayController');

const router = express.Router();

router.get('/typesPay/:id', typePayController.findById);
router.get('/typesPay', typePayController.findAll);
router.post('/typesPay', typePayController.create);
router.put('/typesPay/:id', typePayController.update);
router.delete('/typesPay/:id', typePayController.remove);

module.exports = router;