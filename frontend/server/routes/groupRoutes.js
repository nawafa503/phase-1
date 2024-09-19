const express = require('express');
const { createGroup, createChannel } = require('../controllers/groupController');
const { authenticate, authorize } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/createGroup', authenticate, authorize(['superadmin', 'groupadmin']), createGroup);
router.post('/createChannel', authenticate, authorize(['superadmin', 'groupadmin']), createChannel);

module.exports = router;
