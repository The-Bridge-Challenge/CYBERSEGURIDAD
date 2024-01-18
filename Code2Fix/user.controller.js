// Importando los módulos necesarios
const usersModel = require("../models/users.model");
const { validationResult } = require('express-validator');
let bcrypt = require('bcryptjs');
require('dotenv').config()
const uuidV4 = require('uuid')

// Obteniendo la sal del archivo de configuración
const salt = process.env.SALT

// Controlador para obtener todos los usuarios
const getAllUsers = async (req, res, next) => {
  try {
    // Buscando todos los usuarios en la base de datos
    let user = await usersModel.findAll();
    // Enviando la respuesta con los usuarios
    res.status(200).json(user);
  } catch (error) {
    // Si hay un error, lo pasamos al middleware de manejo de errores
    next(error);
  }
};

// Controlador para leer un usuario
const readUser = async (req, res, next) => {
  // Validando la entrada del usuario
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    // Obteniendo el email del cuerpo de la solicitud
    const email = req.body.email
    // Buscando el usuario en la base de datos
    let user = await usersModel.findOne({ where: { email: email } });
    if (user) {
      // Si el usuario existe, enviamos la respuesta con el usuario
      res.status(200).json(user);
    } else {
      // Si el usuario no existe, enviamos un mensaje de error
      res.status(400).json({ msg: "wrong credentials user not found" });
    }
  } catch (error) {
    // Si hay un error, lo pasamos al middleware de manejo de errores
    next(error);
  }
};

// Middleware de manejo de errores
function errorHandler (err, req, res, next) {
  // Registrando el error en la consola
  console.error(`ERROR: ${err.message}`);
  // Enviando una respuesta con un mensaje de error genérico
  res.status(500).json({ message: 'Ha ocurrido un error interno' });
}

// Exportando los controladores y el middleware de manejo de errores
module.exports = {
  readUser,
  getAllUsers,
  errorHandler,
};