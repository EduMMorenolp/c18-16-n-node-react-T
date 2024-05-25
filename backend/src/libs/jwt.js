const jwt = require('jsonwebtoken')
require('dotenv').config()

<<<<<<< Updated upstream
const createAccessToken = (payload) => {
    return new Promise((resolve, reject) => {
        const JWT_SECRET = process.env.JWT_SECRET;
        console.log(JWT_SECRET)
        jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
            if (err) reject(err);
            resolve(token);
        });
    });
};
=======
const createAccessToken = async (payload) => {
  return new Promise((resolve, reject) => {
    const JWT_SECRET = process.env.JWT_SECRET
>>>>>>> Stashed changes

    jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
      if (err) reject(err)
      resolve(token)
    })
  })
}

module.exports = { createAccessToken }
