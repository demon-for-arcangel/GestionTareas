const express = require('express');
const router = express.Router();
const AuthController = require('../Controllers/AuthController');

router.post('/registro', AuthController.registrarUsuario);
router.post('/inicio-sesion', AuthController.iniciarSesion);
/* router.post('/cerrar-sesion', AuthController.cerrarSesion);
 */
module.exports = router;
