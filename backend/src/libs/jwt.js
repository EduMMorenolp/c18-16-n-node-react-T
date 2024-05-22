const jwt = require('jsonwebtoken');

const createAccessToken = (payload) => {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, 'your-secret-key', { expiresIn: '1h' }, (err, token) => {
            if (err) reject(err);
            resolve(token);
        });
    });
};

module.exports = { createAccessToken };