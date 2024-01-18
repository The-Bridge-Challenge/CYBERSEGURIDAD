// Importando módulos requeridos
const bcrypt = require('bcrypt');
const usersModels = require('../models/users');
const { createToken } = require('../utils/jwt');

// Objeto para almacenar los intentos de inicio de sesión
let loginAttempts = {};

// Función de inicio de sesión
const login = async (req, res) => {
    try {
        // Extrayendo email y contraseña del cuerpo de la solicitud
        const { email, password } = req.body;

        // Verificar si la cuenta está temporalmente bloqueada debido a intentos fallidos de inicio de sesión
        if (loginAttempts[email] && loginAttempts[email].blockedUntil > Date.now()) {
            return res.status(401).json({ msg: "Cuenta temporalmente bloqueada debido a múltiples intentos fallidos de inicio de sesión" });
        }

        // Buscando al usuario en la base de datos
        const user = await usersModels.findOne({ where: { email: email } });
        if (user) {
            // Comparando la contraseña proporcionada con la contraseña almacenada
            bcrypt.compare(password, user.password).then((result) => {
                if (result) {
                    // Si la contraseña es correcta, resetear los intentos fallidos
                    delete loginAttempts[email];  

                    // Crear un nuevo token
                    const token = createToken({ email: user.email, role: user.rol });

                    // Enviar el token en una cookie y como parte de la respuesta
                    res.status(200)
                        .cookie('access_token', token, { secure: true, httpOnly: true })
                        .json({ role: user.rol, cookie: token });
                } else {
                    // Si la contraseña es incorrecta, registrar el intento fallido
                    if (!loginAttempts[email]) {
                        loginAttempts[email] = { attempts: 1, blockedUntil: null };
                    } else {
                        loginAttempts[email].attempts++;
                        // Si hay 5 o más intentos fallidos, bloquear la cuenta durante 15 minutos
                        if (loginAttempts[email].attempts >= 5) {
                            loginAttempts[email].blockedUntil = Date.now() + 15 * 60 * 1000;
                        }
                    }
                    res.status(401).json({ msg: "Credenciales inválidas" });
                }
            }).catch((error) => {
                // Manejar error de bcrypt
                res.status(500).json({ msg: "Error interno del servidor" });
            });
        } else {
            // Si no se encuentra al usuario, enviar una respuesta de error
            res.status(401).json({ msg: "Credenciales inválidas" });
        }
        
    } catch (error) {
        // Manejar cualquier otro error
        res.status(500).json({ msg: "Error interno del servidor" });
    }
};

// Función de cierre de sesión
const logout = async (req, res) => {
    try {
        // Limpiar la cookie del token de acceso
        res.status(200)
            .cookie('access_token', "", { secure: true, httpOnly: true })
            .send();
    } catch (error) {
        // Manejar cualquier error
        res.status(500).json({ msg: "Error interno del servidor" });
    }
};

// Exportando las funciones de inicio y cierre de sesión
const loginController = {
    login,
    logout
};

module.exports = loginController;