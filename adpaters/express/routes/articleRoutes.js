const express = require('express');
const articleController = require('../controllers/ArticleController');

const router = express.Router();

router.get('/articles/:id', articleController.findById);
router.get('/articles', articleController.findAll);
router.post('/articles', articleController.create);
router.put('/articles/:id', articleController.update);
router.delete('/articles/:id', articleController.remove);

module.exports = router;