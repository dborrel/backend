const express = require('express');
const {get_messages, add_message, has_not_viewed_messages} = require('../controllers/messageController');

const router = express.Router();

router.get('/get_messages/:idEmisor/:idReceptor', get_messages);
router.post('/add_message', add_message);
router.get('/has_not_viewed_messages/:idEmisor/:idReceptor',has_not_viewed_messages);

module.exports = router;