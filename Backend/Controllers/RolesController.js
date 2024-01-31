const db = require('../database/ConexionSequelize');

const listarRoles = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM roles');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
};

const listarRolId = async (req, res) => {
  const rolId = req.params.id;

  try {
    const [rows] = await db.query('SELECT * FROM roles WHERE id_rol = ?', [rolId]);

    if (rows.length === 0) {
      res.status(404).send('Rol no encontrado');
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
};

const modificarRol = async (req, res) => {
  const { id_rol, nuevoNombre } = req.body;

  try {
    await db.query('UPDATE roles SET nombre_rol = ? WHERE id_rol = ?', [nuevoNombre, id_rol]);
    res.json({ message: 'Rol modificado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
};

const crearRol = async (req, res) => {
  const { nombre_rol } = req.body;

  try {
    const [result] = await db.query('INSERT INTO roles (nombre_rol) VALUES (?)', [nombre_rol]);
    res.json({ id: result.insertId, message: 'Rol creado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
};

const eliminarRol = async (req, res) => {
  const rolId = req.params.id;

  try {
    await db.query('DELETE FROM roles WHERE id_rol = ?', [rolId]);
    res.json({ message: 'Rol eliminado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
};

const buscarRolDelUsuario = async (req, res) => {
  const usuarioId = req.params.id;

  try {
    const [rows] = await db.query('SELECT r.* FROM usuarios u JOIN roles r ON u.id_rol = r.id_rol WHERE u.id_usuario = ?', [usuarioId]);

    if (rows.length === 0) {
      res.status(404).send('Rol no encontrado para el usuario');
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
};

const buscarUsuariosPorRol = async (req, res) => {
  const rolId = req.params.id;

  try {
    const [rows] = await db.query('SELECT * FROM usuarios WHERE id_rol = ?', [rolId]);
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
};

module.exports = { listarRoles, listarRolId, modificarRol, crearRol, eliminarRol, buscarRolDelUsuario, buscarUsuariosPorRol };