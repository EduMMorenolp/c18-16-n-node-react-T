const jwt = require('jsonwebtoken')
require('dotenv').config()

const createAccessToken = async (payload) => {
  return new Promise((resolve, reject) => {
    const JWT_SECRET = process.env.JWT_SECRET

    jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
      if (err) reject(err)
      resolve(token)
    })
  })
}

module.exports = { createAccessToken }
