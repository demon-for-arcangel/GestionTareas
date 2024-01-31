const db = require('../database/ConexionSequelize');

const todasLasTareas = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM tareas');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
};

const tareaUnica = async (req, res) => {
  const tareaId = req.params.id;

  try {
    const [rows] = await db.query('SELECT * FROM tareas WHERE id_tarea = ?', [tareaId]);

    if (rows.length === 0) {
      res.status(404).send('Tarea no encontrada');
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
};

const editarEstadoTarea = async (req, res) => {
  const { id_tarea, completada } = req.body;

  try {
    await db.query('UPDATE tareas SET completada = ? WHERE id_tarea = ?', [completada, id_tarea]);
    res.json({ message: 'Estado de la tarea modificado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
};

const insertarTarea = async (req, res) => {
  const { descripcion, dificultad, horas_previstas, id_programador, asignada_por } = req.body;

  try {
    const [result] = await db.query(
      'INSERT INTO tareas (descripcion, dificultad, horas_previstas, id_programador, asignada_por) VALUES (?, ?, ?, ?, ?)',
      [descripcion, dificultad, horas_previstas, id_programador, asignada_por]
    );

    res.json({ id: result.insertId, message: 'Tarea creada exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
};

const eliminarTarea = async (req, res) => {
  const tareaId = req.params.id;

  try {
    await db.query('DELETE FROM tareas WHERE id_tarea = ?', [tareaId]);
    res.json({ message: 'Tarea eliminada exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
};

const editarProgresoTarea = async (req, res) => {
  const { id_tarea, porcentaje_realizacion } = req.body;

  try {
    await db.query('UPDATE tareas SET porcentaje_realizacion = ? WHERE id_tarea = ?', [porcentaje_realizacion, id_tarea]);
    res.json({ message: 'Progreso de la tarea modificado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
};

const agregarTiempoTarea = async (req, res) => {
  const { id_tarea, horas_realizadas } = req.body;

  try {
    await db.query('UPDATE tareas SET horas_realizadas = ? WHERE id_tarea = ?', [horas_realizadas, id_tarea]);
    res.json({ message: 'Tiempo de la tarea añadido exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
};

const editarAsignacionTarea = async (req, res) => {
  const { id_tarea, id_programador, asignada_por } = req.body;

  try {
    await db.query('UPDATE tareas SET id_programador = ?, asignada_por = ? WHERE id_tarea = ?', [id_programador, asignada_por, id_tarea]);
    res.json({ message: 'Asignación de la tarea modificada exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
};

const eliminarAsignacionTarea = async (req, res) => {
  const tareaId = req.params.id;

  try {
    await db.query('UPDATE tareas SET id_programador = NULL, asignada_por = NULL WHERE id_tarea = ?', [tareaId]);
    res.json({ message: 'Asignación de la tarea eliminada exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
};

const todasLasTareasDisponibles = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM tareas WHERE id_programador IS NULL');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
};

const obtenerTareasDeUsuario = async (req, res) => {
  const usuarioId = req.params.id;

  try {
    const [rows] = await db.query('SELECT * FROM tareas WHERE id_programador = ?', [usuarioId]);
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
};

const obtenerTareasDeTodosUsuarios = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM tareas WHERE id_programador IS NOT NULL');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
};

const obtenerTareasRealizadas = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM tareas WHERE completada = true');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
};

const obtenerTareasPendientes = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM tareas WHERE completada = false');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
};

const evaluarUsuarios = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT id_programador, COUNT(id_programador) as cantidad FROM historialtareas GROUP BY id_programador ORDER BY cantidad DESC');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
};

const actualizacionCompleta = async (req, res) => {
  // Implementa lógica para la actualización completa según tus necesidades
  res.json({ message: 'Función de actualización completa ejecutada' });
};

module.exports = {
  todasLasTareas,
  tareaUnica,
  editarEstadoTarea,
  insertarTarea,
  eliminarTarea,
  editarProgresoTarea,
  agregarTiempoTarea,
  editarAsignacionTarea,
  eliminarAsignacionTarea,
  todasLasTareasDisponibles,
  obtenerTareasDeUsuario,
  obtenerTareasDeTodosUsuarios,
  obtenerTareasRealizadas,
  obtenerTareasPendientes,
  evaluarUsuarios,
  actualizacionCompleta
};
