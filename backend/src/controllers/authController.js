const { serviceLogin, serviceRegister } = require('../services/authService')

const controllerLogin = async (req, res) => {
  const { email, password } = req.body

  try {
    const responseLogin = await serviceLogin(email, password)
    res.status(responseLogin.status).json({
      message: responseLogin.message,
      data: responseLogin.data
    })
  } catch (error) {
    res.status(401).json({ message: error.message })
  }
}

const controllerRegister = async (req, res) => {
  const { email, password, roleId } = req.body

  try {
    const responseRegister = await serviceRegister(email, password, roleId)
    res.status(responseRegister.status).json({
      message: responseRegister.message,
      data: responseRegister.data
    })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

module.exports = { controllerLogin, controllerRegister }
