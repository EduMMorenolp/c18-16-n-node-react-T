const { createAccessToken } = require('../libs/jwt');
const prisma = require('../config/prisma');
const bcrypt = require('bcrypt');

// Servicio para iniciar sesión
const login = async (email, password) => {

    const usuario = await prisma.usuario.findUnique({
        where: { email }
    });

    if (!usuario) {
        throw new Error("Credenciales inválidas");
    }

    // Verificar si la contraseña es correcta utilizando bcrypt
    // const passwordMatch = await bcrypt.compare(password, usuario.password);
    // if (!passwordMatch) {
    //     throw new Error("Credenciales inválidas");
    // }

    // Generar token de acceso
    const token = await createAccessToken({ id: usuario.id });

    // Devolver los datos del usuario y el token
    return {
        id: usuario.id,
        nombre: usuario.nombre,
        email: usuario.email,
        token: token
    };
};

module.exports = { login };
