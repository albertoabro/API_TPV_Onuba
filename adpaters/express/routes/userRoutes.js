const express = require('express');
const userController = require('../controllers/UserController');

const router = express.Router();

router.get('/users/:id', userController.findById);
router.get('/users', userController.findAll);
router.get('/users/search/:userName', userController.findByUserName);
router.post('/users/login',userController.findByCredentials);
router.post('/users', userController.create);
router.put('/users/:id', userController.update);
router.delete('/users/:id', userController.remove);

module.exports = router;