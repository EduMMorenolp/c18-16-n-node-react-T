const jwt = require("jsonwebtoken")


const generateJWT = (payload) => {
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: '180d'
    })
    return token
}


module.exports = generateJWT