const { serviceLogin, serviceRegister } = require('../services/authService')

<<<<<<< Updated upstream
const iniciarSesion = async (req, res) => {
    const { email, password } = req.body;

    try {
        const resultado = await login(email, password);

        res.json(resultado);
    } catch (error) {
        console.error("Error al iniciar sesión:", error);
        res.status(401).json({ message: error.message });
    }
};

const registrarUsuario = async (req, res) => {
    const { email, password, nombre, role } = req.body;

    try {
        const newUser = await registro(email, password, nombre, role)

        res.json(newUser)
    } catch (error) {
        console.error("Error al registrar:", error);
        res.status(400).json({ message: error.message });
    }
=======
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
>>>>>>> Stashed changes
}

const controllerRegister = async (req, res) => {
  const { email, password } = req.body

  try {
    const responseRegister = await serviceRegister(email, password)
    res.status(responseRegister.status).json({
      message: responseRegister.message,
      data: responseRegister.data
    })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

module.exports = { controllerLogin, controllerRegister }
