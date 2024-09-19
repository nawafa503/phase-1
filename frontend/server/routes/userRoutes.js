const express = require('express');
const { getAllUsers, createUser } = require('../controllers/userController');
const { authenticate, authorize } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/users', authenticate, authorize(['superadmin']), getAllUsers);
router.post('/createUser', createUser);

module.exports = router;
