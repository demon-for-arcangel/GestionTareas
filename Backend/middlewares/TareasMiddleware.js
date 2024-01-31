const db = require('../database/ConexionSequelize');

const verificarPropietarioTarea = async (req, res, next) => {
  const { id_usuario } = req.usuarioAutenticado;
  const idTarea = req.params.idTarea; // Ajusta esto según cómo se defina el parámetro en tus rutas

  try {
    // Verificar si el usuario es el propietario de la tarea
    const [tarea] = await db.query('SELECT id_programador FROM tareas WHERE id_tarea = ?', [idTarea]);

    if (!tarea || tarea[0].id_programador !== id_usuario) {
      return res.status(403).json({ message: 'No tienes permisos para realizar esta acción en la tarea' });
    }

    next();
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
};

module.exports = { verificarPropietarioTarea };
