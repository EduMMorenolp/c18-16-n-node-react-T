const jwt = require("jsonwebtoken")
const prisma = require("../models/prisma")

const authenticate = async (req, res, next) => {
    const bearer = req.headers.authorization
    if(!bearer) {
        const error = new Error('No Autorizado')
        return res.status(401).json({error: error.message})
    }

    // const token = bearer.split(' ')[1] cR7_2014_#
    const [, token] = bearer.split(' ')
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await prisma.user.findUnique({
            where: {
                id: decoded.id
            },
        })
        if(typeof decoded === 'object' && decoded.id) {
            if(user) {
                req.user = user
                next()
            } else {
                res.status(500).json({error: 'Token No Válido'})
            }
        }
      
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error: 'Token No Válido'})
    }
}


module.exports = authenticate
