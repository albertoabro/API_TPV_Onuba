const express = require('express');
const productController = require('../controllers/ProductController');

const router = express.Router();

router.get('/products/:id', productController.findById);
router.get('/products', productController.findAll);
router.post('/products', productController.create);
router.put('/products/:id', productController.update);
router.delete('/products/:id', productController.remove);

module.exports = router;