const express = require('express');
const familyController = require('../controllers/FamilyController');

const router = express.Router();

router.get('/families/:id', familyController.findById);
router.get('/families', familyController.findAll);
router.get('/families/search/:nameFamily', familyController.findByNameFamily);
router.post('/families', familyController.create);
router.put('/families/:id', familyController.update);
router.delete('/families/:id', familyController.remove);

module.exports = router;