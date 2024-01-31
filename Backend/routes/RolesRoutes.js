const express = require('express');
const router = express.Router();
const AuthMiddleware = require('../middlewares/authMiddleware');
const RolMiddleware = require('../middlewares/RolesMiddleware');
const RolesController = require('../Controllers/RolesController');

router.get('/roles', AuthMiddleware, RolMiddleware(1), RolesController.listarRoles);
router.get('/roles/:idRol', AuthMiddleware, RolMiddleware(1), RolesController.listarRolId);
router.put('/roles/:idRol', AuthMiddleware, RolMiddleware(1), RolesController.modificarRol);
router.post('/roles', AuthMiddleware, RolMiddleware(1), RolesController.crearRol);
router.delete('/roles/:idRol', AuthMiddleware, RolMiddleware(1), RolesController.eliminarRol);
router.get('/roles/usuario/:idUsuario', AuthMiddleware, RolMiddleware(1), RolesController.buscarRolDelUsuario);
router.get('/roles/buscar/:nombreRol', AuthMiddleware, RolMiddleware(1), RolesController.buscarUsuariosPorRol);

module.exports = router;
