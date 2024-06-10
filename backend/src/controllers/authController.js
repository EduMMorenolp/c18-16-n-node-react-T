const prisma = require('../models/prisma')
const { checkPassword, hashPassword } = require('../utils/auth')
const generateJWT = require('../utils/jwt')

const controllerLogin = async (req, res) => {
  const { email, password } = req.body
  
  try {
    const user = await prisma.users.findUnique({
      where:
        { email }
    })

    if (!user) {
      const error = new Error('Invalid email or password')
      return res.status(404).json({ error: error.message })
    }

    const isPasswordCorrect = await checkPassword(password, user.password)
    if(!isPasswordCorrect) {
      const error = new Error('Invalid email or password')
      return res.status(401).json({ error: error.message })
    }
    
    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      userToken: generateJWT({id: user.id})
    })
  } catch (error) {
    res.status(500).json({ error: 'Invalid email or password' })
  }
}

const controllerRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body
    const userExists = await prisma.users.findUnique({
      where:
        { email }
    })

    if (userExists) {
      const error = new Error('El Usuario ya esta registrado')
      return res.status(409).json({ error: error.message })
    }

    const userPassword = await hashPassword(password);
    await prisma.users.create({
      data: {
        name,
        email,
        password: userPassword
      }
    })
    res.send('Cuenta creada, iniciar sesión')
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

const controllerUser = async (req, res) => {
  return res.json(req.user)
}

module.exports = { controllerLogin, controllerRegister, controllerUser}
