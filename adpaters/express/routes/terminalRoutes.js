const express = require('express');
const terminalController = require('../controllers/TerminalController');

const router = express.Router();

router.get('/terminals/:id', terminalController.findById);
router.get('/terminals', terminalController.findAll);

module.exports = router;
