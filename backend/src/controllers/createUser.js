const { createAccessToken } = require("../libs/createAccessToken")
const prisma = require('../models/prisma')
const bcrypt = require('bcrypt')

const userPost = async(email, password) =>{
    const userExist = await prisma.users.findUnique({
        where: { email }
    })

    if (userExist) {
      throw new Error('El Usuario ya está registrado');
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = await prisma.users.create({
        data: {
          email,
          password: hashedPassword
        }
    })

    const { password: pass, ...user } = newUser
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