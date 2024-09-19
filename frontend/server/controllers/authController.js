const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const users = require('../models/user');

// Secret key for JWT
const SECRET_KEY = 'supersecretkey';

exports.login = (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);

    if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Compare password (plain text since we're not hashing initially)
    if (user.password !== password) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Generate JWT Token
    const token = jwt.sign(
        { id: user.id, roles: user.roles },
        SECRET_KEY,
        { expiresIn: '1h' }
    );

    return res.json({ token });
};
