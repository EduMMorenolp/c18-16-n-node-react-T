const { login } = require('../services/authLoginService');

const iniciarSesion = async (req, res) => {
    const { email, password } = req.body;

    try {
        const resultado = await login(email, password);

        res.json(resultado);
    } catch (error) {
        console.error("Error al iniciar sesión:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

module.exports = { iniciarSesion };
