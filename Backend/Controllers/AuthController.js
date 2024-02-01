const { Usuario } = require('../models'); 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registrarUsuario = async (req, res) => {
  const { nombre_usuario, email, contrasena, id_rol } = req.body;

  try {
    const existingUser = await Usuario.findOne({ where: { email } });

    if (existingUser) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }

    const hashedPassword = await bcrypt.hash(contrasena, 10);

    const nuevoUsuario = await Usuario.create({
      nombre_usuario,
      email,
      contrasena: hashedPassword,
      id_rol,
    });

    res.json({ id_usuario: nuevoUsuario.id_usuario, email: nuevoUsuario.email, id_rol: nuevoUsuario.id_rol });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
};

const iniciarSesion = async (req, res) => {
  const { email, contrasena } = req.body;

  try {
    const usuario = await Usuario.findOne({ where: { email } });

    if (!usuario) {
      return res.status(401).json({ message: 'Credenciales incorrectas' });
    }

    const passwordMatch = await bcrypt.compare(contrasena, usuario.contrasena);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Credenciales incorrectas' });
    }

    const token = jwt.sign({ id_usuario: usuario.id_usuario, email, id_rol: usuario.id_rol }, process.env.CLAVE, { expiresIn: '2h' });
    res.json({ id_usuario: usuario.id_usuario, token, id_rol: usuario.id_rol }); // Agregar id_rol a la respuesta
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
};

module.exports = { registrarUsuario, iniciarSesion };
