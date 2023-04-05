const express = require('express');
const ticketController = require('../controllers/TicketController');

const router = express.Router();

router.get('/tickets/:id', ticketController.findById);
router.get('/tickets', ticketController.findAll);
router.post('/tickets', ticketController.create);
router.put('/tickets/:id', ticketController.update);
router.delete('/tickets/:id', ticketController.remove);

module.exports = router;