const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    console.log(authHeader)

    const token = authHeader

    // Problemas de local en el backend

    // const token = authHeader && authHeader.split(' ')[1];
    // if (!token) {
    //     return res.status(401).json({ error: 'Access denied, token missing!' });
    // }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Invalid token!' });
        }

        req.user = user;
        next();
    });
};

module.exports = verifyToken;
