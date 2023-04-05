const express = require('express');
const typeUserController = require('../controllers/TypeUserController');

const router = express.Router();

router.get('/typesUser/:id', typeUserController.findById);
router.get('/typesUser', typeUserController.findAll);
router.post('/typesUser', typeUserController.create);
router.put('/typesUser/:id', typeUserController.update);
router.delete('/typesUser/:id', typeUserController.remove);

module.exports = router;