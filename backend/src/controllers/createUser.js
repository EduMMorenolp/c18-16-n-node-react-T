const AuthEmail = require("../emails/AuthEmail")
const { createAccessToken } = require("../libs/createAccessToken")
const prisma = require('../models/prisma')
const bcrypt = require('bcrypt')

const userPost = async(email, password) =>{
    const userExists = await prisma.users.findUnique({
        where: { email }
    })

    if (userExists) {
      throw new Error('El Usuario ya está registrado');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt)

    
    const newUser = await prisma.users.create({
        data: {
          email,
          password: hashedPassword
        }
    })
 
    const { password: pass, ...user } = newUser
    AuthEmail.sendConfirmationEmail({email: user.email})
    const token = await createAccessToken({ id: user.id })
    return {
        status: 201,
        message: 'usuario creado',
        data: {
          ...user,
          token
        }
      }
}

module.exports = userPost 