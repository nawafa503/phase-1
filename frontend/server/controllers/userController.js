const users = require('../models/user');

exports.getAllUsers = (req, res) => {
    res.json(users);
};

exports.createUser = (req, res) => {
    const { username, email, password } = req.body;

    const newUser = {
        id: users.length + 1,
        username,
        email,
        password, // Plain text for now, use bcrypt for hashing
        roles: ['user'],
        groups: []
    };

    users.push(newUser);
    res.status(201).json(newUser);
};
