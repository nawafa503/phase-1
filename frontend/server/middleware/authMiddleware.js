const jwt = require('jsonwebtoken');
const SECRET_KEY = 'supersecretkey';

exports.authenticate = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ message: 'No token provided' });
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to authenticate token' });
        }

        req.user = decoded; // Add decoded token to request object
        next();
    });
};

exports.authorize = (roles) => (req, res, next) => {
    const userRoles = req.user.roles;

    const hasRole = roles.some(role => userRoles.includes(role));

    if (!hasRole) {
        return res.status(403).json({ message: 'You do not have permission to access this resource' });
    }

    next();
};
