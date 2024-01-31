const express = require('express');
const router = express.Router();
const AuthMiddleware = require('../middlewares/authMiddleware');
const RolMiddleware = require('../middlewares/RolesMiddleware');
const UsuariosController = require('../Controllers/UserController');

router.get('/usuarios', AuthMiddleware, RolMiddleware(1), UsuariosController.listarUsuarios);
router.get('/usuarios/:idUsuario', AuthMiddleware, RolMiddleware(1), UsuariosController.listarUsuarioId);
router.post('/usuarios', AuthMiddleware, RolMiddleware(1), UsuariosController.crearUsuario);
router.put('/usuarios/:idUsuario', AuthMiddleware, RolMiddleware(1), UsuariosController.modificarContraseña);
router.delete('/usuarios/:idUsuario', AuthMiddleware, RolMiddleware(1), UsuariosController.eliminarUsuario);
router.delete('/usuarios/:idUsuario/rol', AuthMiddleware, RolMiddleware(1), UsuariosController.eliminarRolUsuario);
router.post('/usuarios/:idUsuario/rol', AuthMiddleware, RolMiddleware(1), UsuariosController.añadirRolUsuario);
router.get('/usuarios/ranking', AuthMiddleware, RolMiddleware(1), UsuariosController.mostrarRanking);

module.exports = router;
