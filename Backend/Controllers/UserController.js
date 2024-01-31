const db = require('../database/ConexionSequelize');

const listarUsuarios = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM usuarios');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
};

const listarUsuarioId = async (req, res) => {
  const usuarioId = req.params.id;

  try {
    const [rows] = await db.query('SELECT * FROM usuarios WHERE id_usuario = ?', [usuarioId]);

    if (rows.length === 0) {
      res.status(404).send('Usuario no encontrado');
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
};

const modificarContraseña = async (req, res) => {
  const { id_usuario, nuevaContrasena } = req.body;

  try {
    await db.query('UPDATE usuarios SET contrasena = ? WHERE id_usuario = ?', [nuevaContrasena, id_usuario]);
    res.json({ message: 'Contraseña modificada exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
};

const crearUsuario = async (req, res) => {
  const { nombre_usuario, email, contrasena, id_rol } = req.body;

  try {
    const [result] = await db.query(
      'INSERT INTO usuarios (nombre_usuario, email, contrasena, id_rol) VALUES (?, ?, ?, ?)',
      [nombre_usuario, email, contrasena, id_rol]
    );

    res.json({ id: result.insertId, message: 'Usuario creado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
};

const eliminarUsuario = async (req, res) => {
  const usuarioId = req.params.id;

  try {
    await db.query('DELETE FROM usuarios WHERE id_usuario = ?', [usuarioId]);
    res.json({ message: 'Usuario eliminado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
};

const eliminarRolUsuario = async (req, res) => {
  const { usuarioId, rolId } = req.params;

  try {
    await db.query('DELETE FROM usuarios WHERE id_usuario = ? AND id_rol = ?', [usuarioId, rolId]);
    res.json({ message: 'Rol eliminado exitosamente del usuario' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
};

const añadirRolUsuario = async (req, res) => {
  const { usuarioId, rolId } = req.params;

  try {
    await db.query('UPDATE usuarios SET id_rol = ? WHERE id_usuario = ?', [rolId, usuarioId]);
    res.json({ message: 'Rol añadido exitosamente al usuario' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
};

const mostrarRanking = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT id_programador, COUNT(id_programador) as cantidad FROM historialtareas GROUP BY id_programador ORDER BY cantidad DESC');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
};

const actualizarContraseña = async (req, res) => {
  const { id_usuario, nuevaContrasena } = req.body;

  try {
    await db.query('UPDATE usuarios SET contrasena = ? WHERE id_usuario = ?', [nuevaContrasena, id_usuario]);
    res.json({ message: 'Contraseña actualizada exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
};

module.exports = { listarUsuarios, listarUsuarioId, modificarContraseña, crearUsuario, eliminarUsuario, eliminarRolUsuario, añadirRolUsuario, mostrarRanking, actualizarContraseña };
