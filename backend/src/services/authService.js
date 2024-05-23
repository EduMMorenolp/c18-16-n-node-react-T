const { createAccessToken } = require('../libs/jwt');
const prisma = require('../models/prisma');
const bcrypt = require('bcrypt');

// Servicio para iniciar sesión
const login = async (email, password) => {
    const usuario = await prisma.user.findUnique({
        where: { email }
    });

    if (!usuario) {
        throw new Error("Credenciales inválidas");
    }

    const passwordMatch = await bcrypt.compare(password, usuario.password);
    if (!passwordMatch) {
        throw new Error("Credenciales inválidas");
    }

    const token = await createAccessToken({ id: usuario.id });

    return {
        id: usuario.id,
        nombre: usuario.nombre,
        email: usuario.email,
        token: token
    };
};

const registro = async (email, password, nombre, role) => {
    const usuarioExistente = await prisma.user.findUnique({
        where: { email }
    });

    if (usuarioExistente) {
        throw new Error("El usuario ya existe");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const nuevoUsuario = await prisma.user.create({
        data: {
            email,
            password: hashedPassword,
            nombre,
            role
        }
    });

    const token = await createAccessToken({ id: nuevoUsuario.id });

    return {
        id: nuevoUsuario.id,
        nombre: nuevoUsuario.nombre,
        email: nuevoUsuario.email,
        role: nuevoUsuario.role,
        token: token
    };
}

module.exports = { login, registro };
