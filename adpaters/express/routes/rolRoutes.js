const express = require('express');
const rolController = require('../controllers/RolController');

const router = express.Router();

router.get('/roles/:id', rolController.findById);
router.get('/roles', rolController.findAll);
router.post('/roles', rolController.create);
router.put('/roles/:id', rolController.update);
router.delete('/roles/:id', rolController.remove);

module.exports = router;