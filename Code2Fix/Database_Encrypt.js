const mysql = require('mysql');
const crypto = require('crypto');

// Función para generar una sal aleatoria para el cifrado
function generateSalt(length) {
    return crypto.randomBytes(Math.ceil(length/2))
            .toString('hex') // Convertir a formato hexadecimal
            .slice(0,length); // Devolver la cantidad requerida de caracteres
}

// Función para cifrar los datos
function encrypt(text, password) {
    const salt = generateSalt(16); // Generar una sal
    const key = crypto.scryptSync(password, salt, 32); // Generar una clave usando la contraseña y la sal
    const iv = crypto.randomBytes(16); // Generar un vector de inicialización
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv); // Crear un cifrador usando la clave y el vector de inicialización

    let encrypted = cipher.update(text, 'utf8', 'hex'); // Cifrar el texto
    encrypted += cipher.final('hex'); // Finalizar el cifrado
    return { salt, iv: iv.toString('hex'), encrypted }; // Devolver la sal, el vector de inicialización y los datos cifrados
}

// Función para descifrar los datos
function decrypt(encryptedText, password, salt, iv) {
    const key = crypto.scryptSync(password, salt, 32); // Generar la clave usando la contraseña y la sal
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, Buffer.from(iv, 'hex')); // Crear un descifrador usando la clave y el vector de inicialización

    let decrypted = decipher.update(encryptedText, 'hex', 'utf8'); // Descifrar el texto
    decrypted += decipher.final('utf8'); // Finalizar el descifrado
    return decrypted; // Devolver los datos descifrados
}

// Crear una conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'tu_usuario',
  password: 'tu_contraseña',
  database: 'tu_base_de_datos'
});

connection.connect();

// Cifrar los datos y guardarlos en la base de datos
const password = 'clave secreta';
const data = 'datos a encriptar';
const encryptedData = encrypt(data, password);

connection.query('INSERT INTO tu_tabla (salt, iv, data) VALUES (?, ?, ?)', [encryptedData.salt, encryptedData.iv, encryptedData.encrypted], function (error, results, fields) {
  if (error) throw error;
  console.log('Datos encriptados guardados en la base de datos');
});

// Recuperar los datos de la base de datos y descifrarlos
connection.query('SELECT * FROM tu_tabla WHERE id = ?', [1], function (error, results, fields) {
  if (error) throw error;
  const decryptedData = decrypt(results[0].data, password, results[0].salt, results[0].iv);
  console.log('Datos desencriptados:', decryptedData);
});

connection.end();