const jwt = require('jsonwebtoken')
require('dotenv').config()

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization
  const token = authHeader && authHeader.split(' ')[1]

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        return res.status(401).send({ message: 'Token has expired.' })
      } else if (err.name === 'JsonWebTokenError') {
        return res.status(400).send({ message: 'Invalid token.' })
      } else {
        return res.status(500).send({ message: 'Failed to authenticate token.' })
      }
    }
    console.log(user)
    req.user = user
    next()
  })
}

module.exports = verifyToken
