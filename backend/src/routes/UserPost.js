const express = require('express')
const userRoute = express.Router()
const createUser = require('../handlers/User/postUser')



userRoute.post('/createUser', createUser)

module.exports = userRoute