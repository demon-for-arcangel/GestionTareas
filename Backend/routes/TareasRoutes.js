const express = require('express');
const router = express.Router();
const AuthMiddleware = require('../middlewares/authMiddleware');
const RolMiddleware = require('../middlewares/RolesMiddleware');
const TareasMiddleware = require('../middlewares/TareasMiddleware');
const TareasController = require('../Controllers/TareasController');

router.get('/tareas', AuthMiddleware, RolMiddleware(2), TareasController.todasLasTareas);
router.get('/tareas/:idTarea', AuthMiddleware, RolMiddleware(2), TareasMiddleware.verificarPropietarioTarea, TareasController.tareaUnica);
router.put('/tareas/:idTarea/estado', AuthMiddleware, RolMiddleware(2), TareasMiddleware.verificarPropietarioTarea, TareasController.editarEstadoTarea);
router.post('/tareas', AuthMiddleware, RolMiddleware(1), TareasController.insertarTarea);
router.delete('/tareas/:idTarea', AuthMiddleware, RolMiddleware(1), TareasMiddleware.verificarPropietarioTarea, TareasController.eliminarTarea);
router.put('/tareas/:idTarea/progreso', AuthMiddleware, RolMiddleware(2), TareasMiddleware.verificarPropietarioTarea, TareasController.editarProgresoTarea);
router.post('/tareas/:idTarea/tiempo', AuthMiddleware, RolMiddleware(2), TareasMiddleware.verificarPropietarioTarea, TareasController.agregarTiempoTarea);
router.put('/tareas/:idTarea/asignacion', AuthMiddleware, RolMiddleware(1), TareasController.editarAsignacionTarea);
router.delete('/tareas/:idTarea/asignacion', AuthMiddleware, RolMiddleware(1), TareasController.eliminarAsignacionTarea);
router.get('/tareas/disponibles', AuthMiddleware, RolMiddleware(2), TareasController.todasLasTareasDisponibles);
router.get('/tareas/usuario', AuthMiddleware, RolMiddleware(2), TareasController.obtenerTareasDeUsuario);
router.get('/tareas/todos-usuarios', AuthMiddleware, RolMiddleware(1), TareasController.obtenerTareasDeTodosUsuarios);
router.get('/tareas/realizadas', AuthMiddleware, RolMiddleware(1), TareasController.obtenerTareasRealizadas);
router.get('/tareas/pendientes', AuthMiddleware, RolMiddleware(1), TareasController.obtenerTareasPendientes);
router.get('/tareas/evaluacion', AuthMiddleware, RolMiddleware(1), TareasController.evaluarUsuarios);
router.put('/tareas/actualizacion-completa', AuthMiddleware, RolMiddleware(1), TareasController.actualizacionCompleta);

module.exports = router;
