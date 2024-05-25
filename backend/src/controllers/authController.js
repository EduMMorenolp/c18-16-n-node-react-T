const { login, registro } = require('../services/authService');

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
  const { email, password } = req.body;

  try {
    const newUser = await registro(email, password)
    res.json(newUser)
  } catch (error) {
    console.error("Error al registrar:", error);
    res.status(400).json({ message: error.message });
  }
}

module.exports = { iniciarSesion, registrarUsuario };
